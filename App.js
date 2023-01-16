
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, SafeAreaView, Platform, ImageBackground, View} from 'react-native';
import List from './components/List';
import {Text} from "react-native";

const App = () => {
  //console.log('App starting!')
  return (
    <>
      <SafeAreaView style={styles.SafeArea}>
        <View style={styles.hero}>
          <ImageBackground source={{uri: 'http://placekitten.com/2048/1920'}} resizeMode={'cover'} style={styles.heroImage} imageStyle={{borderBottomRightRadius: 100}}>
            <Text style={styles.title}>Homeless Kittens</Text>
          </ImageBackground>
        </View>
        <List />
      </SafeAreaView>
      <StatusBar style={"light"} />
    </>
  );
};

export default App;

const styles = StyleSheet.create({
    SafeArea: {
      flex: 1,
      backgroundColor: '#202028',
      paddingTop: Platform.OS === "ios" ? StatusBar.currentHeight : 30,
    },

    title:{
      fontSize: 28,
      padding: 15,
      position: "absolute",
      bottom: 15,
      color: '#fff',
      backgroundColor: '#2768FC'
    },

    heroImage:{
      justifyContent: "flex-end",
      height: 300,
      width: '100%',
      marginBottom: 30,
    }
});
