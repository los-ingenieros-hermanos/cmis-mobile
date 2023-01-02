import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import UserProfileScreen from "../../Screens/TabScreens/UserProfileScreen";


import Bookmarkeds from "../../Screens/StackScreens/BookmarkedsListScreen";
import SinglePostScreen from "../../Screens/StackScreens/SinglePostScreen";

function BookmarkedNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Bookmarkeds" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Bookmarkeds" component={Bookmarkeds} />
      <Stack.Screen name="SinglePostScreen" component={SinglePostScreen} />
    </Stack.Navigator>
  );
}

export default BookmarkedNavigator;
