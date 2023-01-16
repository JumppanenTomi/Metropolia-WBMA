import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity, Platform,
} from 'react-native';
import PropTypes from 'prop-types';
import {StatusBar} from "expo-status-bar";

const ListItem = ({singleMedia}) => {
  const item = singleMedia;
  return (
    <TouchableOpacity style={styles.item}>
      <Image
        style={styles.image}
        source={{uri: item.thumbnails.w160}}
      ></Image>
      <View style={styles.text}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={{color: '#A2A1A8'}}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};

export default ListItem;

const styles = StyleSheet.create({
  item:{
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
    backgroundColor: "#242834",
    overflow: 'hidden'
  },

  image:{
    height: 100,
    margin: 10,
    borderRadius: 15,
    borderBottomLeftRadius: 75,
    flex: 1
  },

  text:{
    height: 100,
    margin: 10,
    flex: 1,
    justifySelf: 'center'
  },

  title:{
    fontSize: 24,
    color: '#fff'
  }
});
