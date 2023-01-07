import * as React from 'react';
import {useState, useEffect, useRef} from 'react';
import { Animated, Dimensions, Text, View, BackHandler, Alert, Keyboard, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Octicons } from '@expo/vector-icons'; 

import CalendarScreen from '../../Screens/TabScreens/CalendarScreen';
import SearchNavigator from './SearchNavigator';
import HomeTabNavigator from './HomeTabNavigator';
import { useSelector, useDispatch } from 'react-redux';
import { changeTab } from '../../redux/actions/currentTabAction';
import ProfileStackNavigator from './ProfileStackNavigator';

export default function TabNavigator() {

  const Tab = createBottomTabNavigator();
  const tabOffsetValue = useRef(new Animated.Value(getWidth()*0.025)).current;
  const [opacityValue, setOpacityValue] = useState(1);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [userPP, setUserPP] = useState(useSelector((store) => store.userID.userProfileImage));
  const dispatch = useDispatch();
  const name1 = useSelector((store) => store.tabName.tabName);
  const userRole = useSelector((store) => store.userID.userRole);
  const defaultPP = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAFElEQVQYlWNkuLiJAQkwMaACUvkAdxgBjXva0XwAAAAASUVORK5CYII=";

  useEffect(() => {
    if(userRole=="ROLE_STUDENT"){

    }
    else if(userRole=="ROLE_COMMUNITY"){
    
    }
  
  }, []);

  const handleChange = (nameOfCurrentTab) => {
    console.log("nameOfCurrentTab: " + nameOfCurrentTab);
    dispatch(changeTab(nameOfCurrentTab));
    console.log("name1: " + name1);
  };
 

  const handleSearch = () => {
    console.log("Button pressed");
    handleBackButtonClick();
  };
  

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


  const handleBackButtonClick = () => {
      console.log("routeName1: " + name1);
      if (name1=="Home") {
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


  // const handleBackButton = () => {
  //   if (this.props.navigation.isFocused()) {
  //     this.props.navigation.goBack();
  //     return true;
  //   }
  //   if (this.props.navigation.state.routeName === 'Search' ||
  //       this.props.navigation.state.routeName === 'Calendar' ||
  //       this.props.navigation.state.routeName === 'Profile') {
  //         Animated.spring(tabOffsetValue, { toValue: getWidth()*0.025, useNativeDriver: true }).start(() => {
  //           this.props.navigation.navigate('Home');
  //         });
  //     return true;
  //   }
  //   return false;
  // }

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
            routeName = route.name;
            handleChange("Home");}
          })}>
        </Tab.Screen>

        
        <Tab.Screen name={"SearchNavigator"} component={SearchNavigator} initialParams={{ handleSearch}} options={{
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
              routeName = route.name;
              handleChange("Search");} 
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
            routeName = route.name;
            handleChange("Calendar");}
          })}>
        </Tab.Screen>


        <Tab.Screen name={"Profile"} component={ProfileStackNavigator} options={{
            tabBarLabel: ({ focused }) => (
                <View style={{ position: 'absolute',}}>
                  <Text style={{color: focused ? "rgba(105,89,149,1)" : 'gray', fontSize: 10, fontWeight: 'bold'}}>Profil</Text>
                </View>
              ),
            tabBarIcon: ({ focused }) => (
              <View style={{ position: 'absolute'}}>
                  <Image style={{width: 35, height: 35, borderRadius:1000}} source={{uri: `${userPP ? userPP : defaultPP}`}}/>
              </View>
            )
          }} listeners={({ navigation, route }) => ({
            tabPress: e => {Animated.spring(tabOffsetValue, { toValue: getWidth()*0.77, useNativeDriver: true}).start();
            routeName = route.name;
            handleChange("Profile");}
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