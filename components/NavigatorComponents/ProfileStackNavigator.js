import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProfileScreen from "../../Screens/TabScreens/ProfileScreen";
import UserProfileScreen from "../../Screens/TabScreens/UserProfileScreen";
import UserListScreen from "../../Screens/UserListScreen";
import ApplicationsScreen from "../../Screens/ApplicationsScreen";
import CreatePostScreen from "../../Screens/StackScreens/CreatePostScreen";

function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Profile" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="UserList" component={UserListScreen} />
      <Stack.Screen name="Applications" component={ApplicationsScreen} />
      <Stack.Screen name="CreatePost" component={CreatePostScreen} />
    </Stack.Navigator>
  );
}

export default App;
