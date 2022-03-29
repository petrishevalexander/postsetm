import React, {useEffect, useState} from 'react';
import {Alert, FlatList, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Loader} from '../components/Loader';
import {Post} from '../components/Post';
import {deletePost, setPosts} from '../store/actions';

export const HomeScreen = ({navigation}) => {
  const postsPerPage = 5;
  // const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [postsStart, setPostsStart] = useState(0);

  const data = useSelector(state => state.postReducer.data);
  const dispatch = useDispatch();

  const getData = async start => {
    const requestUrl = `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=5`;
    await fetch(requestUrl)
      .then(response => response.json())
      .then(json => {
        dispatch(setPosts(json));
        // setData(prevData => prevData.concat(json));
        setIsLoading(false);
      })
      .catch(error => console.error(error));
  };

  useEffect(() => {
    setIsLoading(true);
    getData(postsStart);
  }, [postsStart]);

  const goToPost = post => {
    navigation.navigate('PostScreen', {post});
  };

  const handlerLoadMore = () => {
    console.log('handlerLoadMore');
    setPostsStart(prevValue => prevValue + postsPerPage);
  };
  const loader = () => {
    return isLoading ? <Loader /> : null;
  };
  const onDelete = async id => {
    Alert.alert(
      'Удаление поста',
      `Вы уверены, что хотите удалить пост №${id}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: async () => {
            await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
              method: 'DELETE',
            }).then(() => {
              dispatch(deletePost(id));
            });
          },
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Post item={item} goToPost={goToPost} onDelete={onDelete} />
        )}
        onEndReachedThreshold={0}
        onEndReached={handlerLoadMore}
        ListFooterComponent={loader}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
