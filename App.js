import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState,useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text} from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import SignupScreen from './Screens/SignupScreen';
import SplashScreen from './Screens/SplashScreen';


const App = () => {
  useEffect(() => {
    setTimeout(() => {
      setshowsplash(false)     
    }, 2000);
    
  }, [])
  
  
  const [showsplash,setshowsplash] = useState(true)

  const Stack = createNativeStackNavigator()
  return (
      <NavigationContainer >
        <Stack.Navigator screenOptions={{headerShown:false}}>
          {/* {showsplash?<Stack.Screen name='SplashScreen' component={SplashScreen}/>:null} */}
          <Stack.Screen name='SplashScreen' component={SplashScreen}/>
          <Stack.Screen name='LoginScreen' component={LoginScreen}/>
          <Stack.Screen name='SignupScreen' component={SignupScreen}/>
          <Stack.Screen name='HomeScreen' component={HomeScreen}/>

        </Stack.Navigator>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
