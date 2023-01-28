import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, Text, Button, Image } from "react-native";
import {MainContext} from '../contexts/MainContext';
import {useTag} from "../hooks/ApiHooks";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { uploadsUrl } from "../utils/variables";

const Profile = () => {
  const {getFilesByTag} =useTag();
  const {setIsLoggedIn, user, setUser} = useContext(MainContext);
  const [avatar, setAvatar] = useState('http://placekitten.com/640'); // placekitten... is default if user has no avatar

  const loadAvatar = async () => {
    try {
      console.log(user.user_id)
      const avatarArray = await getFilesByTag('avatar_' + user.user_id);
      setAvatar(avatarArray.pop().filename);
    } catch (error) {
      console.error('user avatar fetch failed', error.message);
    }
  };

  useEffect(() => {
    loadAvatar();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile</Text>
      <Image style={styles.image} source={{uri: uploadsUrl + avatar}} />
      <Text>Username: {user.username}</Text>
      <Image style={styles.image} source={{uri: avatar}}></Image>
      <Text>Email: {user.email}</Text>
      <Text>Full name: {user.full_name}</Text>
      <Button
        title="Logout!"
        onPress={async () => {
          console.log('Logging out!');
          setUser({});
          setIsLoggedIn(false);
          try {
            await AsyncStorage.clear();
          } catch (error) {
            console.error('clearing asyncstorage failed', error);
          }
        }}
      />
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
    width: 200,
    height: 300,
  },
});

export default Profile;
