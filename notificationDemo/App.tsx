import {Alert} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import messaging from '@react-native-firebase/messaging';
import Header from './sections/Header';
import SignInPage from './pages/SignInPage';
import CreateProfilePage from './pages/CreateProfilePage';
import ForgotPassword from './pages/ForgotPassword';
import BuisnessPage from './pages/BuisnessPage';
export default function App() {
  const Stack = createNativeStackNavigator();

  const defaultNavigationOptions = {
    header: () => <Header />, // Use your custom header component
  };
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

  // const screenWidth = Dimensions.get('window').width;
  // const screenHeight = Dimensions.get('window').height;
  // const platform = Platform.OS;
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultNavigationOptions}>
        <Stack.Screen name="Signin" component={SignInPage} />
        <Stack.Screen name="Createprofile" component={CreateProfilePage} />
        <Stack.Screen name="Forgotpassword" component={BuisnessPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
