import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const PostScreen = () => {
  return (
    <View style={styles.container}>
      <Text>this is post INFO</Text>
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
