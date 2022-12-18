import React from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";

import Ideas from "../../Screens/DrawerScreens/IdeasScreen";
import Setting from "../../Screens/DrawerScreens/SettingScreen";
import General from "../../Screens/DrawerScreens/GeneralScreen";
import Followed from "../../Screens/DrawerScreens/FollowedScreen";
import Community from "../../Screens/DrawerScreens/CommunitiesScreen";
import Bookmarked from "../../Screens/DrawerScreens/BookmarkedsScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <Drawer.Navigator>
              
              <Drawer.Screen name="Askıda Proje"  options={{headerShown:false}} component={Ideas} />
              <Drawer.Screen name="Ayarlar" options={{headerShown:false}} component={Setting} />
              <Drawer.Screen name="Genel" options={{headerShown:false}} component={General} />
              <Drawer.Screen name="Takip Ettiklerim" options={{headerShown:false}} component={Followed} />
              <Drawer.Screen name="Topluluk/Takımlar" options={{headerShown:false}} component={Community} />
              <Drawer.Screen name="Kaydedilenler" options={{headerShown:false}} component={Bookmarked} />
              

        </Drawer.Navigator>
    </SafeAreaView>
  );
};

export default DrawerNavigator

const styles = StyleSheet.create({
    container: {
      height: '97.5%',
      top:'2%',
    },

    drawerBackGround:{
      backgroundColor:'rgba(208,210,242,1)',
    },
    drawerTextColor:{
      color:'rgba(83,70,114,1)',
    }
  });