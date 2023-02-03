import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../../Screens/TabScreens/SearchScreen';
import SearchedProfile from '../../Screens/StackScreens/CommunityProfileView';

const Stack = createStackNavigator();

export default function SearchNavigator({navigation}) {

  return (
    <Stack.Navigator>

        <Stack.Screen name="Search" options={{headerShown:false}} component={SearchScreen} initialParams={{navigation}} />
        <Stack.Screen name="SearchedProfile" options={{headerShown:false}} component={SearchedProfile} initialParams={{navigation}} />
    </Stack.Navigator>
  );
}

