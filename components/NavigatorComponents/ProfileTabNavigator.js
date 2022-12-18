import React from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";

import Ideas from "../../Screens/DrawerScreens/IdeasScreen";
import Setting from "../../Screens/DrawerScreens/SettingScreen";
import General from "../../Screens/DrawerScreens/GeneralScreen";
import Followed from "../../Screens/DrawerScreens/FollowedScreen";
import Community from "../../Screens/DrawerScreens/CommunitiesScreen";
import Bookmarked from "../../Screens/DrawerScreens/BookmarkedsScreen";
import ProfileScreen from "../../Screens/TabScreens/ProfileScreen";

const Drawer = createDrawerNavigator();

export default function ProfileTabNavigator() {
  return (
    <Drawer.Navigator>
              <Drawer.Screen name="Profil"  options={{headerShown:false}} component={ProfileScreen} />
              <Drawer.Screen name="Askıda Proje"  options={{headerShown:false}} component={Ideas} />
              <Drawer.Screen name="Ayarlar" options={{headerShown:false}} component={Setting} />
              <Drawer.Screen name="Genel" options={{headerShown:false}} component={General} />
              <Drawer.Screen name="Takip Ettiklerim" options={{headerShown:false}} component={Followed} />
              <Drawer.Screen name="Topluluk/Takımlar" options={{headerShown:false}} component={Community} />
              <Drawer.Screen name="Kaydedilenler" options={{headerShown:false}} component={Bookmarked} />
    </Drawer.Navigator>
  )
}