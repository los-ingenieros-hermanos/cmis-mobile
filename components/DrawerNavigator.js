import React from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import TopBar from "./TopBar";
import TabNavigator from "./TabNavigator";

import SearchScreen from "../Screens/SearchScreen";
import DrawerOpen from "../Screens/DrawerOpen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <SafeAreaView style={styles.container}>
    <Drawer.Navigator>
      <Drawer.Screen name="Drawer" options={{header:TopBar, sceneContainerStyle:[{top:0}]}} component={TabNavigator} />
        
      <Drawer.Screen name="Search" options={{headerShown:false}} component={DrawerOpen} />
    </Drawer.Navigator>
    </SafeAreaView>
  );
};

export default DrawerNavigator

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });