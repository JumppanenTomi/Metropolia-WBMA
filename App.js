import {StatusBar} from 'expo-status-bar';
import {StyleSheet, SafeAreaView, Platform} from 'react-native';
import List from './components/List';

const App = () => {
  //console.log('App starting!')
  return (
    <>
      <SafeAreaView style={styles.container}>
        <List />
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
};

export default App;

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
