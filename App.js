import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import TabNavigator from './components/NavigatorComponents/TabNavigator';
import TestScreen from './TestScreen';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

function App({navigation}) {
  const Stack = createNativeStackNavigator();
  
  return (
    <Provider store={store}>
     <NavigationContainer>
       <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
         <Stack.Screen name="Login" component={LoginScreen} />
         <Stack.Screen name="Register" /*options={{title: 'Register'}}*/ component={RegisterScreen} />
         <Stack.Screen name="Main" component={TabNavigator} initialParams={{navigation}}/>
         <Stack.Screen name="Test" component={TestScreen} />
       </Stack.Navigator>

     </NavigationContainer>
    </Provider>

  );
}

export default App;