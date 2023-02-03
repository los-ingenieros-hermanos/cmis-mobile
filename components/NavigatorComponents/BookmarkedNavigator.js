import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Bookmarkeds from "../../Screens/StackScreens/BookmarkedsListScreen";
import SinglePostScreen from "../../Screens/StackScreens/SinglePostScreen";

function BookmarkedNavigator() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Bookmarkeds" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Bookmarkeds" component={Bookmarkeds} />
      <Stack.Screen name="SinglePostScreen" component={SinglePostScreen} />
    </Stack.Navigator>
  );
}

export default BookmarkedNavigator;
