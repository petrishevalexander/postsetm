import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
// import { THEME } from "../theme";

export const Post = ({item}) => {
  return (
    <Text>{item.id + '. ' + item.title}</Text>
    // <TouchableOpacity onPress={() => goToPost(post)}>
    //   <View style={styles.container}>
    //     <ImageBackground source={{ uri: post.img }} style={styles.image}>
    //       <View style={styles.textWrapper}>
    //         <Text style={styles.text}>
    //           {new Date(post.date).toLocaleDateString()}
    //         </Text>
    //       </View>
    //     </ImageBackground>
    //   </View>
    // </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});
