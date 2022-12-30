import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProfileScreen from '../TabScreens/ProfileScreen';
import UserListScreen from '../UserListScreen';
import ApplicationsScreen from '../ApplicationsScreen';

function App() {
  const Stack = createNativeStackNavigator();
  return (
      <Stack.Navigator initialRouteName='Profile' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="UserList" component={UserListScreen} />
        <Stack.Screen name="Applications" component={ApplicationsScreen} />
      </Stack.Navigator>
  );
}

export default App;