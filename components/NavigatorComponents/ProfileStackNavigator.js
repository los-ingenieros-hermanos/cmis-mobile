import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProfileScreen from "../../Screens/TabScreens/ProfileScreen";
import UserProfileScreen from "../../Screens/TabScreens/UserProfileScreen";
import UserListScreen from "../../Screens/UserListScreen";
import ApplicationsScreen from "../../Screens/ApplicationsScreen";
import CreatePostScreen from "../../Screens/StackScreens/CreatePostScreen";
import UserProfileView from "../../Screens/StackScreens/UserProfileView";
import FollowersListScreen from "../../Screens/StackScreens/FollowersListScreen";

import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

export default function ProfileStackNavigator() {
  const Stack = createNativeStackNavigator();
  
  const userRole = useSelector((store) => store.userID.userRole);
  const [condition, setCondition] = React.useState(false);

  handleScreen = () => {
    console.log("USERROLE : "+userRole);

    if(userRole == "ROLE_STUDENT"){
      setCondition(true);
      console.log("Student");
    }else if(userRole == "ROLE_COMMUNITY"){
      setCondition(false);
      console.log("Community");
    }
    else{
      console.log("Else");
    }
  };

  useEffect(() => {
    handleScreen();
  }, []);

  return (
    <Stack.Navigator initialRouteName="Profile" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={condition ? UserProfileScreen : ProfileScreen} />
      <Stack.Screen name="UserList" component={UserListScreen} />
      <Stack.Screen name="Applications" component={ApplicationsScreen} />
      <Stack.Screen name="Followers" component={FollowersListScreen} />
      <Stack.Screen name="CreatePost" component={CreatePostScreen} />
      <Stack.Screen name="UserProfileView" component={UserProfileView} />
    </Stack.Navigator>
  );
}

