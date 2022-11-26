// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import LoginScreen from './Screens/LoginScreen';
import SecondPage from './Screens/RegisterScreen';
import RegisterScreen from './Screens/RegisterScreen';


function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}} >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" /*options={{title: 'Register'}}*/ component={RegisterScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;