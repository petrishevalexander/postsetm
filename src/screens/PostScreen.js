import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {THEME} from '../theme';

export const PostScreen = ({navigation, route}) => {
  const post = route.params.post;
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.autorInfo}>Автор: пользователь №{post.userId}</Text>
      <Text style={styles.header}>О чем пост:</Text>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.body}>{post.body}</Text>
      <Text style={styles.header}>Комментарии:</Text>
    </ScrollView>
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
  body: {
    color: THEME.COLORS.DARK_GREY,
  },
});
