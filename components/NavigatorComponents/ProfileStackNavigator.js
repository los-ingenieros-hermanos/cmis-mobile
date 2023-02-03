import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProfileScreen from "../../Screens/TabScreens/ProfileScreen";
import UserProfileScreen from "../../Screens/TabScreens/UserProfileScreen";
import UserListScreen from "../../Screens/UserListScreen";
import ApplicationsScreen from "../../Screens/ApplicationsScreen";
import CreatePostScreen from "../../Screens/StackScreens/CreatePostScreen";
import CreateProjectIdea from "../../Screens/StackScreens/CreateProjectIdeas";
import UserProfileView from "../../Screens/StackScreens/UserProfileView";
import FollowersListScreen from "../../Screens/StackScreens/FollowersListScreen";


import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

export default function ProfileStackNavigator() {
  const Stack = createStackNavigator();
  
  const userRole = useSelector((store) => store.userID.userRole);
  const [condition, setCondition] = React.useState(false);

  handleScreen = () => {
    if(userRole == "ROLE_STUDENT"){
      setCondition(true);
    }else if(userRole == "ROLE_COMMUNITY"){
      setCondition(false);
    }
  };

  useEffect(() => {
    handleScreen();
  }, []);

  return (
    <Stack.Navigator initialRouteName="Profile2" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile2" component={condition ? UserProfileScreen : ProfileScreen} />
      <Stack.Screen name="UserList" component={UserListScreen} />
      <Stack.Screen name="Applications" component={ApplicationsScreen} />
      <Stack.Screen name="Followers" component={FollowersListScreen} />
      <Stack.Screen name="CreatePost" component={CreatePostScreen} />
      <Stack.Screen name="UserProfileView" component={UserProfileView} />
      <Stack.Screen name="CreateIdea" component={CreateProjectIdea} />
    </Stack.Navigator>
  );
}

