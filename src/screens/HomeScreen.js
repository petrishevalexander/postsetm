import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Post} from '../components/Post';

export const HomeScreen = ({navigation}) => {
  const postsPerPage = 5;
  const [data, setData] = useState([]);
  const [postsLimit, setPostsLimit] = useState(postsPerPage);

  const getData = limit => {
    const requestUrl = `https://jsonplaceholder.typicode.com/posts?_start=0&_limit=${limit}`;
    fetch(requestUrl)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    getData(postsLimit);
  }, [postsLimit]);
  useEffect(() => {
    console.log('length: ' + data.length);
  }, [data]);

  const goToPost = post => {
    navigation.navigate('PostScreen', {post});
  };

  const handlerLoadMore = () => {
    console.log('handlerLoadMore');
    setPostsLimit(prevValue => prevValue + postsPerPage);
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Post item={item} goToPost={goToPost} />}
        onEndReached={handlerLoadMore}
        onEndReachedThreshold={0}
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
