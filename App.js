import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import TabNavigator from './components/NavigatorComponents/TabNavigator';
import TestScreen from './TestScreen';
import { Provider } from 'react-redux';
import { store } from './redux/store';


function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
     <NavigationContainer>
       <Stack.Navigator initialRouteName='Main' screenOptions={{headerShown: false}}>
         <Stack.Screen name="Login" component={LoginScreen} />
         <Stack.Screen name="Register" /*options={{title: 'Register'}}*/ component={RegisterScreen} />
         <Stack.Screen name="Main" component={TabNavigator} />
         <Stack.Screen name="Test" component={TestScreen} />
       </Stack.Navigator>

     </NavigationContainer>
    </Provider>

  );
}

export default App;