import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Post} from '../components/Post';

export const HomeScreen = () => {
  const [data, setData] = useState([]);
  const requestUrl =
    'https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5';
  useEffect(() => {
    fetch(requestUrl)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  console.log(data);
  return (
    <View style={styles.container}>
      <Text>heye</Text>
      <FlatList />
      <FlatList
        data={data}
        keyExtractor={({id}) => id}
        renderItem={({item}) => <Post item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
