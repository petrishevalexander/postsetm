import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {THEME} from '../theme';

export const PostScreen = ({navigation, route}) => {
  const post = route.params.post;
  return (
    <View style={styles.container}>
      <Text style={styles.autorInfo}>Автор: пользователь №{post.userId}</Text>
      <Text style={styles.header}>О чем пост:</Text>
      <Text style={styles.title}>{post.title}</Text>

      <Text>{post.body}</Text>
      <Text style={styles.header}>Комментарии:</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  autorInfo: {
    color: THEME.COLORS.MAIN_LIGHT,
  },
  header: {
    marginTop: 10,
    textAlign: 'center',
    color: THEME.COLORS.MAIN_SUPER_DARK,
    fontWeight: '600',
    fontSize: 24,
  },
  title: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 24,
    color: THEME.COLORS.MAIN_DARK,
  },
});
