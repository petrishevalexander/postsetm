import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Loader} from '../components/Loader';
import {getComments} from '../store/actions';
import {THEME} from '../theme';

export const PostScreen = ({route}) => {
  const post = route.params.post;
  const comments = useSelector(state => state.postReducer.comments);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const requestUrl = `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`;
    fetch(requestUrl)
      .then(response => response.json())
      .then(json => {
        dispatch(getComments(json));
        setIsLoading(false);
      })
      .catch(error => console.error(error));
  }, [post.id, dispatch]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.autorInfo}>Автор: пользователь №{post.userId}</Text>
      <Text style={styles.header}>О чем пост:</Text>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.body}>{post.body}</Text>
      <Text style={styles.header}>Комментарии:</Text>
      {isLoading ? (
        <Loader />
      ) : (
        comments.map(comment => (
          <View key={comment.id} style={styles.commentWrapper}>
            <Text style={styles.commentName}>Имя: {comment.name}</Text>
            <Text style={styles.commentEmail}>e-mail: {comment.email}</Text>
            <Text style={styles.commentBody}>{comment.body}</Text>
          </View>
        ))
      )}
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
    marginVertical: 10,
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
    fontSize: 16,
  },
  commentWrapper: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: THEME.COLORS.MAIN_LIGHT,
    padding: 5,
  },
  commentName: {
    color: THEME.COLORS.MAIN_DARK,
  },
  commentEmail: {
    color: THEME.COLORS.MAIN_LIGHT,
  },
  commentBody: {
    color: THEME.COLORS.GREY,
  },
});
