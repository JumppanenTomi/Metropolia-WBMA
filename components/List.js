import {FlatList, StyleSheet} from 'react-native';
import ListItem from './ListItem';
import {StatusBar} from "expo-status-bar";
import {useMedia} from "../hooks/ApiHooks";

const List = () => {
  const {mediaArray} = useMedia();
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
