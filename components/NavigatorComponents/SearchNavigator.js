import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import SearchScreen from '../../Screens/TabScreens/SearchScreen';
import SearchedProfile from '../../Screens/SearchedProfile';

export default function SearchNavigator() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>

        <Stack.Screen name="Search" options={{headerShown:false}} component={SearchScreen} />
        <Stack.Screen name="SearchedProfile" component={SearchedProfile} />

    </Stack.Navigator>
  );
}

