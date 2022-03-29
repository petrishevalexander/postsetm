import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {THEME} from '../theme';

export const Post = ({item, goToPost, onDelete}) => {
  return (
    <TouchableOpacity onPress={() => goToPost(item)}>
      <View style={styles.container}>
        <View style={styles.textWrapper}>
          <Text style={{color: THEME.COLORS.GREY}}>Пост №{item.id}</Text>
          <Text style={styles.date}>
            Дата: {new Date().toLocaleDateString()}
          </Text>
          <Text style={styles.title}>{item.title} </Text>
        </View>
        <View style={styles.buttonArea}>
          <Button
            title="Delete post"
            onPress={() => onDelete(item.id)}
            color={THEME.COLORS.RED}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    borderWidth: 2,
    borderColor: THEME.COLORS.MAIN,
    marginVertical: 5,
    width: '100%',
    height: 200,
  },
  textWrapper: {
    justifyContent: 'center',
    padding: 5,
  },
  date: {
    fontSize: 16,
    color: THEME.COLORS.MAIN_LIGHT,
  },
  title: {
    fontWeight: '600',
    fontSize: 24,
    color: THEME.COLORS.MAIN_DARK,
  },
  buttonArea: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
