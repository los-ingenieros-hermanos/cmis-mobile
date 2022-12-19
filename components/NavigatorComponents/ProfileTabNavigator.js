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
              <Drawer.Screen name="Profil" component={ProfileScreen} options={{headerShown:false,
                                                                          drawerStyle:[{backgroundColor:'rgba(84,70,115,1)'}],
                                                                          drawerInactiveTintColor:'rgba(208,210,242,1)',
                                                                          drawerActiveBackgroundColor:'rgba(208,210,242,1)',
                                                                          drawerActiveTintColor:'black',
                                                                          }}/>
              
              <Drawer.Screen name="Askıda Proje" component={Ideas} options={{headerShown:false,
                                                                          drawerStyle:[{backgroundColor:'rgba(84,70,115,1)'}],
                                                                          drawerInactiveTintColor:'rgba(208,210,242,1)',
                                                                          drawerActiveBackgroundColor:'rgba(208,210,242,1)',
                                                                          drawerActiveTintColor:'black',}} />
              
              <Drawer.Screen name="Ayarlar" component={Setting} options={{headerShown:false,
                                                                          drawerStyle:[{backgroundColor:'rgba(84,70,115,1)'}],
                                                                          drawerInactiveTintColor:'rgba(208,210,242,1)',
                                                                          drawerActiveBackgroundColor:'rgba(208,210,242,1)',
                                                                          drawerActiveTintColor:'black',}} />
              
              <Drawer.Screen name="Genel" component={General} options={{headerShown:false,
                                                                          drawerStyle:[{backgroundColor:'rgba(84,70,115,1)'}],
                                                                          drawerInactiveTintColor:'rgba(208,210,242,1)',
                                                                          drawerActiveBackgroundColor:'rgba(208,210,242,1)',
                                                                          drawerActiveTintColor:'black',}}  />
              
              <Drawer.Screen name="Takip Ettiklerim" component={Followed} options={{headerShown:false,
                                                                                    drawerStyle:[{backgroundColor:'rgba(84,70,115,1)'}],
                                                                                    drawerInactiveTintColor:'rgba(208,210,242,1)',
                                                                                    drawerActiveBackgroundColor:'rgba(208,210,242,1)',
                                                                                    drawerActiveTintColor:'black',}}  />
              
              <Drawer.Screen name="Topluluk/Takımlar" component={Community} options={{headerShown:false,
                                                                          drawerStyle:[{backgroundColor:'rgba(84,70,115,1)'}],
                                                                          drawerInactiveTintColor:'rgba(208,210,242,1)',
                                                                          drawerActiveBackgroundColor:'rgba(208,210,242,1)',
                                                                          drawerActiveTintColor:'black',}} />
              
              <Drawer.Screen name="Kaydedilenler" component={Bookmarked} options={{headerShown:false,
                                                                          drawerStyle:[{backgroundColor:'rgba(84,70,115,1)'}],
                                                                          drawerInactiveTintColor:'rgba(208,210,242,1)',
                                                                          drawerActiveBackgroundColor:'rgba(208,210,242,1)',
                                                                          drawerActiveTintColor:'black',}}  />
    </Drawer.Navigator>
  )
}