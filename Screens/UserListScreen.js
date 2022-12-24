import { View, Text, Touchable, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import TopBar from '../components/TopBar'
import { Ionicons } from '@expo/vector-icons';
import UserSearchItem from '../components/UserSearchItem';
import { useState } from 'react';

export default function UserListScreen({navigation}) {
  
  return (
    <View style={{backgroundColor:'white', flex:1}}>
      <TopBar navigation={navigation}/>
      
      <View style={{backgroundColor:'rgba(240,242,245,1)', flex:1, alignItems:'center'}}> 
        <View style={{backgroundColor:'white', height:'6.5%', flexDirection:'row', alignItems:'center', justifyContent:'center'}}> 
            <TouchableOpacity onPress={() => navigation.goBack() } style={{flex:1, paddingLeft:5}}>
              <Ionicons name="arrow-back-outline" size={45} color="black"/>
            </TouchableOpacity>
            <Text style={{fontSize:17, flex:1, position:'absolute'}}>Üyeler</Text> 
        </View>

        <ScrollView style={{backgroundColor:'rgba(240,242,245,1)'}}>
          
          <UserSearchItem name={'name1'}/>
          <UserSearchItem name={'name2'}/>
          <UserSearchItem name={'name3'}/>
        
        </ScrollView>

      </View>

    </View>
  )
}