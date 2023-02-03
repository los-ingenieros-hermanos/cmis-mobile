import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CommunityProfileView from '../../Screens/StackScreens/CommunityProfileView';
import CommunityListScreen from '../../Screens/StackScreens/CommunitiesListScreen';

const Stack = createStackNavigator();

export default function CommunityListNavigator({navigation}) {
  
  return (
    <Stack.Navigator initialRouteName='CommunityList' screenOptions={{headerShown: false}}>

        <Stack.Screen name="CommunityList" options={{headerShown:false}} component={CommunityListScreen} initialParams={{navigation}} />
        <Stack.Screen name="CommunityProfileView" component={CommunityProfileView} options={{headerShown:false}} initialParams={{navigation}} />

    </Stack.Navigator>
  );
}

