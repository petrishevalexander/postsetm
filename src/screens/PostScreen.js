import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const PostScreen = ({navigation, route}) => {
  const postId = route.params.post.id;
  return (
    <View style={styles.container}>
      <Text>{postId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 32,
    // paddingHorizontal: 24,
  },
});
