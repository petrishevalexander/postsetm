import React, {useEffect, useState} from 'react';
import {Alert, FlatList, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Loader} from '../components/Loader';
import {Post} from '../components/Post';
import {deletePost, setPosts} from '../store/actions';

export const HomeScreen = ({navigation}) => {
  const postsPerPage = 5;
  const [isLoading, setIsLoading] = useState(false);
  const [postsStart, setPostsStart] = useState(0);

  const data = useSelector(state => state.postReducer.data);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    const requestUrl = `https://jsonplaceholder.typicode.com/posts?_start=${postsStart}&_limit=5`;
    fetch(requestUrl)
      .then(response => response.json())
      .then(json => {
        dispatch(setPosts(json));
        setIsLoading(false);
      })
      .catch(error => console.error(error));
  }, [dispatch, postsStart]);

  const goToPost = post => {
    navigation.navigate('PostScreen', {post});
  };

  const handlerLoadMore = () => {
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
          text: 'Отменить',
          style: 'cancel',
        },
        {
          text: 'Удалить',
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
        onEndReachedThreshold={0.01}
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
