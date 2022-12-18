import * as React from 'react';
import { Animated, Dimensions, Text, View, BackHandler, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Component, useState, useEffect } from 'react';

import CalendarScreen from '../../Screens/TabScreens/CalendarScreen';
import ProfileScreen from '../../Screens/TabScreens/ProfileScreen';

import { AntDesign } from '@expo/vector-icons'; 
import { useRef } from 'react';
import { Octicons } from '@expo/vector-icons';
import ProfilePicture from 'react-native-profile-picture';
import { Keyboard } from 'react-native';
import SearchNavigator from './SearchNavigator';
import HomeTabNavigator from './HomeTabNavigator';
import ProfileTabNavigator from './ProfileTabNavigator';

const Tab = createBottomTabNavigator();


export default function TabNavigator({navigation}) {
  
  //const navigation = useNavigation();

  const tabOffsetValue = useRef(new Animated.Value(getWidth()*0.025)).current;
  const [opacityValue, setOpacityValue] = useState(1);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  
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

 useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
        setOpacityValue(0);
        console.log("keyboardDidShow");
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
        console.log("keyboardDidHide");
        setOpacityValue(1);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

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

        <Tab.Screen name={"HomePage"} component={HomeTabNavigator} options={{
            tabBarLabel: ({ focused }) => (
              <View style={{ position: 'absolute',}}>
                <Text style={{color: focused ? "rgba(105,89,149,1)" : 'gray', fontSize: 10, fontWeight: 'bold'}}>Anasayfa</Text>
              </View>),
            tabBarIcon: ({ focused }) => (
              <View style={{ position: 'absolute',}}>
                <Octicons name="home" size={35} color={focused ? "rgba(105,89,149,1)" : 'gray'} ></Octicons>
              </View>
            ),
          }} listeners={({ navigation, route}) => ({
            tabPress: e => { Animated.spring(tabOffsetValue, { toValue: getWidth()*0.025, useNativeDriver: true }).start();
            routeName = route.name;}
          })}>
        </Tab.Screen>

        
        <Tab.Screen name={"SearchNavigator"} component={SearchNavigator} options={{
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
            tabBarHideOnKeyboard: true,
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


        <Tab.Screen name={"Profile"} component={ProfileTabNavigator} options={{
            tabBarLabel: ({ focused }) => (
                <View style={{ position: 'absolute',}}>
                  <Text style={{color: focused ? "rgba(105,89,149,1)" : 'gray', fontSize: 10, fontWeight: 'bold'}}>Profil</Text>
                </View>
              ),
            tabBarIcon: ({ focused }) => (
              <View style={{ position: 'absolute'}}>
                  <ProfilePicture isPicture={true} requirePicture={require('../../storage/images/pp_image.png')} shape='circle' width={35} height={35}/>
              </View>
            )
          }} listeners={({ navigation, route }) => ({
            tabPress: e => {Animated.spring(tabOffsetValue, { toValue: getWidth()*0.77, useNativeDriver: true}).start();
            routeName = route.name;
            }
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
        opacity: opacityValue,
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