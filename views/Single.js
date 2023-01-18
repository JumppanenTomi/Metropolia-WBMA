import React from 'react';
import {StyleSheet, SafeAreaView, Text, Image, View} from 'react-native';

const Single = ({route}) => {
  const {title, desc, url} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{uri: url}}></Image>
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        <Text>{desc}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  image: {
    height: 250,
    width: '100%',
    margin: 20,
  },

  text: {
    height: '100%',
    margin: 15,
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
  },
});

export default Single;
