import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Ideas from "../../Screens/DrawerScreens/IdeasScreen";
import Setting from "../../Screens/DrawerScreens/SettingScreen";
import General from "../../Screens/DrawerScreens/GeneralScreen";
import Followed from "../../Screens/DrawerScreens/FollowedScreen";
import Bookmarked from "../../Screens/DrawerScreens/BookmarkedsScreen";
import ProfileStackNavigator from "./ProfileStackNavigator";


import BookmarkedsListScreen from "../../Screens/StackScreens/BookmarkedsListScreen";
import CommunityListScreen from "../../Screens/StackScreens/CommunitiesListScreen";

const Drawer = createDrawerNavigator();

export default function ProfileTabNavigator({navigation}) {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Profil"
        component={ProfileStackNavigator}
        options={{
          headerShown: false,
          drawerStyle: [{ backgroundColor: "rgba(84,70,115,1)" }],
          drawerInactiveTintColor: "rgba(208,210,242,1)",
          drawerActiveBackgroundColor: "rgba(208,210,242,1)",
          drawerActiveTintColor: "black",
        }}
      />

      <Drawer.Screen
        name="Askıda Proje"
        component={Ideas}
        options={{
          headerShown: false,
          drawerStyle: [{ backgroundColor: "rgba(84,70,115,1)" }],
          drawerInactiveTintColor: "rgba(208,210,242,1)",
          drawerActiveBackgroundColor: "rgba(208,210,242,1)",
          drawerActiveTintColor: "black",
        }}
      />

      <Drawer.Screen
        name="Ayarlar"
        component={Setting}
        options={{
          headerShown: false,
          drawerStyle: [{ backgroundColor: "rgba(84,70,115,1)" }],
          drawerInactiveTintColor: "rgba(208,210,242,1)",
          drawerActiveBackgroundColor: "rgba(208,210,242,1)",
          drawerActiveTintColor: "black",
        }}
      />

      <Drawer.Screen
        name="Topluluk/Takımlar"
        component={CommunityListScreen}
        initialParams={{navigation}}
        options={{
          headerShown: false,
          drawerStyle: [{ backgroundColor: "rgba(84,70,115,1)" }],
          drawerInactiveTintColor: "rgba(208,210,242,1)",
          drawerActiveBackgroundColor: "rgba(208,210,242,1)",
          drawerActiveTintColor: "black",
        }}
      />

      <Drawer.Screen
        name="Kaydedilenler"
        component={BookmarkedsListScreen}
        options={{
          headerShown: false,
          drawerStyle: [{ backgroundColor: "rgba(84,70,115,1)" }],
          drawerInactiveTintColor: "rgba(208,210,242,1)",
          drawerActiveBackgroundColor: "rgba(208,210,242,1)",
          drawerActiveTintColor: "black",
        }}
      />
    </Drawer.Navigator>
  );
}
