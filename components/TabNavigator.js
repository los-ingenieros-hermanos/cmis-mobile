import * as React from 'react';
import { Animated, Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View, BackHandler, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Component, useState, useEffect } from 'react';

import SearchScreen from '../Screens/SearchScreen';
import HomePage from '../Screens/HomePage';
import CalendarScreen from '../Screens/CalendarScreen';
import ProfileScreen from '../Screens/ProfileScreen';

import { AntDesign } from '@expo/vector-icons'; 
import { useRef } from 'react';
import { Octicons } from '@expo/vector-icons';
import ProfilePicture from 'react-native-profile-picture';

const Tab = createBottomTabNavigator();


export default function TabNavigator({navigation}) {
  const tabOffsetValue = useRef(new Animated.Value(getWidth()*0.025)).current;
  var routeName = "Home";

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
    };
    BackHandler.removeEventListener(
      'hardwareBackPress',
      handleBackButtonClick,
    );

    return () => backHandler.remove();
  }, []);

  handleBackButtonClick = () => {
      
      if (routeName=="Home") {
        Alert.alert(
          'Exit App',
          'Exiting the application?', [{
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel'
          }, {
            text: 'OK',
            onPress: () => BackHandler.exitApp()
          }, ], {
          cancelable: false
        }
        )
        return true;
      } else {
        Animated.spring(tabOffsetValue, { toValue: getWidth()*0.025, useNativeDriver: true }).start();
        routeName = "Home";
      }
  };

  return (
    <NavigationContainer independent={true} >
      <Tab.Navigator screenOptions={{
        tabBarShowLabel: true,
        headerShown: false,
        "tabBarStyle": [ {
          "display":"flex", 
          backgroundColor: 'white',
          position: 'absolute',
          height: getWidth()*0.15,
          shadowColor: 'black',
          paddingBottom:5,
          paddingHorizontal: 0,
          
          }],
          
      }}>

        <Tab.Screen name={"Home"} component={HomePage} options={{
            tabBarLabel: ({ focused }) => (
              <View style={{ position: 'absolute',}}>
                <Text style={{color: focused ? "rgba(105,89,149,1)" : 'gray', fontSize: 10, fontWeight: 'bold'}}>Anasayfa</Text>
              </View>),
            tabBarIcon: ({ focused }) => (
              <View style={{ position: 'absolute',}}>
                <Octicons name="home" size={35} color={focused ? "rgba(105,89,149,1)" : 'gray'} ></Octicons>
              </View>
            )
          }} listeners={({ navigation, route}) => ({
            tabPress: e => { Animated.spring(tabOffsetValue, { toValue: getWidth()*0.025, useNativeDriver: true }).start();
            routeName = route.name;}
          })}>
        </Tab.Screen>

        
        <Tab.Screen name={"Search"} component={SearchScreen} options={{
            tabBarLabel: ({ focused }) => (
                <View style={{ position: 'absolute',}}>
                  <Text style={{color: focused ? "rgba(105,89,149,1)" : 'gray', fontSize: 10, fontWeight: 'bold'}}>Ara</Text>
                </View>
              ),
            tabBarIcon: ({ focused }) => (
              <View style={{position: 'absolute',}}>
                <AntDesign name="search1" size={35} color={focused ? "rgba(105,89,149,1)" : 'gray'}></AntDesign>
              </View>
            ),
          }} listeners={({ navigation, route }) => ({
            tabPress: e =>{ 
              Animated.spring(tabOffsetValue,{ toValue: getWidth()*0.27, useNativeDriver: true }).start();
              routeName = route.name;} 
          })}>
        </Tab.Screen>


        <Tab.Screen name={"Calendar"} component={CalendarScreen} options={{
            tabBarLabel: ({ focused }) => (
                <View style={{ position: 'absolute',}}>
                  <Text style={{color: focused ? "rgba(105,89,149,1)" : 'gray', fontSize: 10, fontWeight: 'bold'}}>Takvim</Text>
                </View>
              ),
            tabBarIcon: ({ focused }) => (
              <View style={{position: 'absolute',}}>
                <AntDesign name="calendar" size={35} color={focused ? "rgba(105,89,149,1)" : 'gray'}></AntDesign>
              </View>
            )
          }} listeners={({ navigation, route }) => ({
            tabPress: e => {Animated.spring(tabOffsetValue, {toValue: getWidth()*0.52, useNativeDriver: true}).start();
            routeName = route.name;}
          })}>
        </Tab.Screen>

        <Tab.Screen name={"Profile"} component={ProfileScreen} options={{
            tabBarLabel: ({ focused }) => (
                <View style={{ position: 'absolute',}}>
                  <Text style={{color: focused ? "rgba(105,89,149,1)" : 'gray', fontSize: 10, fontWeight: 'bold'}}>Profil</Text>
                </View>
              ),
            tabBarIcon: ({ focused }) => (
              <View style={{ position: 'absolute'}}>
                  <ProfilePicture isPicture={true} requirePicture={require('../storage/images/pp_image.png')} shape='circle' width={35} height={35}/>
              </View>
            )
          }} listeners={({ navigation, route }) => ({
            tabPress: e => {Animated.spring(tabOffsetValue, { toValue: getWidth()*0.77, useNativeDriver: true}).start();
            routeName = route.name;}
          })}>

          </Tab.Screen>

      </Tab.Navigator>
      

      <Animated.View style={{
        width: getWidth()*0.2,
        height: 4,
        backgroundColor: "rgba(105,89,149,1)",
        position: 'absolute',
        bottom: getWidth()*0.14,
        // Horizontal Padding = 20...
        borderRadius: 30,
        transform: [
          { translateX: tabOffsetValue }
        ]
      }}>

      </Animated.View>
    
    </NavigationContainer>

  );
}

function getWidth() {
  let width = Dimensions.get("window").width
  return width
}