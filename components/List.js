import {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import ListItem from './ListItem';
import {baseUrl} from '../utils/variables';
import {StatusBar} from "expo-status-bar";

const List = () => {
  const [mediaArray, setMediaArray] = useState([]);

  const loadMedia = async () => {
    try {
      const response = await fetch(baseUrl + 'media');
      const json = await response.json();
      const media = await Promise.all(
        json.map(async (file) => {
          const fileResponse = await fetch(baseUrl + 'media/' + file.file_id);
          return await fileResponse.json();
        })
      );

      setMediaArray(media);
    } catch (error) {
      console.error('List, loadMedia', error);
    }
  };

  useEffect(() => {
    loadMedia();
  }, []);

  console.log('List, mediaArray', mediaArray);

  return (
    <FlatList
      data={mediaArray}
      renderItem={({item}) => <ListItem singleMedia={item} /> }
    />
  );
};

export default List;

const styles = StyleSheet.create({
  SafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "ios" ? StatusBar.currentHeight : 0
  },

  item:{
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
    backgroundColor: "#4f4f4f"
  },

  image:{
    height: 250,
    margin: 20,
    flex: 1
  },

  text:{
    height: "100%",
    margin: 15,
    flex: 1,
    alignItems: "center"
  },
  title:{
    fontSize: 28
  }
});
