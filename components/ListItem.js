import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {uploadsUrl} from '../utils/variables';
import {StatusBar} from 'expo-status-bar';

const ListItem = (props) => {
  const item = props.singleMedia;
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        props.navigation.navigate('Single', {
          title: item.title,
          desc: item.description,
          url: uploadsUrl + item.thumbnails.w160,
        });
      }}
    >
      <Image
        style={styles.image}
        source={{uri: uploadsUrl + item.thumbnails.w160}}
      ></Image>
      <View style={styles.text}>
        <Text style={styles.title}>{item.title}</Text>
        <Text>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  props: PropTypes.object,
};

export default ListItem;

const styles = StyleSheet.create({
  SafeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'ios' ? StatusBar.currentHeight : 0,
  },

  item: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
    backgroundColor: '#4f4f4f',
  },

  image: {
    height: 250,
    margin: 20,
    flex: 1,
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
