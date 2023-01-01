import { View, Text, Touchable, TouchableOpacity,BackHandler ,ScrollView, Dimensions} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import TopBar from '../components/TopBar'
import { Ionicons } from '@expo/vector-icons';
import UserSearchItem from '../components/UserSearchItem';
import UserApplicationItem from '../components/UserApplicationItem';
import {useState, useEffect, useRef} from 'react';

const { width, height } = Dimensions.get('window');
export default function UserListScreen({navigation}) {
  
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
    console.log("BACK BUTTON CLICKED");
   
  };

  return (
    <View style={{backgroundColor:'white', flex:1}}>
      <TopBar navigation={navigation}/>
      
      <View style={{backgroundColor:'rgba(240,242,245,1)',flex:1, alignItems:'center'}}> 
        <View style={{backgroundColor:'white', height:height*0.07,flexDirection:'row', alignItems:'center', justifyContent:'center'}}> 
            <TouchableOpacity onPress={() => navigation.goBack() } style={{flex:1, paddingLeft:5}}>
              <Ionicons name="arrow-back-outline" size={45} color="black"/>
            </TouchableOpacity>
            <Text style={{fontSize:17, flex:1, position:'absolute'}}>Üyeler</Text> 
        </View>

        <ScrollView style={{backgroundColor:'rgba(240,242,245,1)'}}>
          
          <UserApplicationItem name={'name1'}/>
          <UserApplicationItem name={'name2'}/>
          <UserApplicationItem name={'name3'}/>
        
        </ScrollView>

      </View>

    </View>
  )
}