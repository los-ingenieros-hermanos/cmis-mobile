import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import SearchScreen from '../../Screens/TabScreens/SearchScreen';
import SearchedProfile from '../../Screens/SearchedProfile';

export default function SearchNavigator({route}) {
  const navigation = useNavigation();
  const { handleSearch } = route.params;
  return (
    <Stack.Navigator>

        <Stack.Screen name="Search" options={{headerShown:false}} component={SearchScreen} initialParams={{ handleSearch }} />
        <Stack.Screen name="SearchedProfile" component={SearchedProfile} />

    </Stack.Navigator>
  );
}

