import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import SearchScreen from '../../Screens/TabScreens/SearchScreen';

import CommunityProfileView from '../../Screens/StackScreens/CommunityProfileView';
import CommunityListScreen from '../../Screens/StackScreens/CommunitiesListScreen';

export default function CommunityListNavigator({navigation}) {
  
  return (
    <Stack.Navigator initialRouteName='CommunityList' screenOptions={{headerShown: false}}>

        <Stack.Screen name="CommunityList" options={{headerShown:false}} component={CommunityListScreen} initialParams={{navigation}} />
        <Stack.Screen name="CommunityProfileView" component={CommunityProfileView} options={{headerShown:false, headerTitle:""}} initialParams={{navigation}} />

    </Stack.Navigator>
  );
}

