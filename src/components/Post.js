import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// import { THEME } from "../theme";

export const Post = ({item, goToPost}) => {
  return (
    <TouchableOpacity onPress={() => goToPost(item)}>
      <View style={styles.container}>
        <Text>{item.id + '. ' + item.title}</Text>
      </View>
    </TouchableOpacity>
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

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    marginVertical: 5,
    width: '100%',
    height: 200,
  },
});
