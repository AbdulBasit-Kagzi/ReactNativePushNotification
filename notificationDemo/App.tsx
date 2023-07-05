import {
  Alert,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Platform,
} from 'react-native';
import React, {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';
export default function App() {
  useEffect(() => {
    getToken();
  }, []);

  const getToken = async () => {
    const token = await messaging().getToken();
    console.log('token', await token);
  };
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const platform = Platform.OS;
  return (
    <View>
      <Text>App</Text>
      <Text>{screenWidth}</Text>
      <Text>{screenHeight}</Text>
      <Text>{platform}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
