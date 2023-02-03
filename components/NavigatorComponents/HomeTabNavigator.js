import React from "react";
import {BackHandler } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ideas from "../../Screens/DrawerScreens/IdeasScreen";
import Setting from "../../Screens/DrawerScreens/SettingScreen";
import HomeScreen from "../../Screens/TabScreens/HomeScreen";
import BookmarkedNavigator from "./BookmarkedNavigator";
import CommunityListNavigator from "./CommunityListNavigator";
import { useSelector, useDispatch } from 'react-redux';
import {useState, useEffect, useRef} from 'react';

const Drawer = createDrawerNavigator();

export default function HomeTabNavigator() {
  const userRole = useSelector((store) => store.userID.userRole);
  
  useEffect(() => {
    const onBackPress = () => {
      //BackHandler.exitApp();
      return true;
    };

    BackHandler.addEventListener('hardwareBackPress', onBackPress);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  }, []);

  
  return (
    <Drawer.Navigator>
              <Drawer.Screen name="Home" component={HomeScreen} options={{headerShown:false,
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
              {/* {userRole == "ROLE_STUDENT" &&
              <Drawer.Screen name="Takip Ettiklerim" component={Followed} options={{headerShown:false,
                                                                                    drawerStyle:[{backgroundColor:'rgba(84,70,115,1)'}],
                                                                                    drawerInactiveTintColor:'rgba(208,210,242,1)',
                                                                                    drawerActiveBackgroundColor:'rgba(208,210,242,1)',
                                                                                    drawerActiveTintColor:'black',}}  />} */}
              
              <Drawer.Screen name="Topluluk/Takımlar" component={CommunityListNavigator} options={{headerShown:false,
                                                                          drawerStyle:[{backgroundColor:'rgba(84,70,115,1)'}],
                                                                          drawerInactiveTintColor:'rgba(208,210,242,1)',
                                                                          drawerActiveBackgroundColor:'rgba(208,210,242,1)',
                                                                          drawerActiveTintColor:'black',}} />
              {userRole == "ROLE_STUDENT" && 
              <Drawer.Screen name="Kaydedilenler" component={BookmarkedNavigator} options={{headerShown:false,
                                                                          drawerStyle:[{backgroundColor:'rgba(84,70,115,1)'}],
                                                                          drawerInactiveTintColor:'rgba(208,210,242,1)',
                                                                          drawerActiveBackgroundColor:'rgba(208,210,242,1)',
                                                                          drawerActiveTintColor:'black'}}  />}
    </Drawer.Navigator>
  )
}
