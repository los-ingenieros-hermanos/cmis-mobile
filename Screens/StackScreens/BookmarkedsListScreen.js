import { View, Text, Touchable, TouchableOpacity, ScrollView,Dimensions} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import TopBar from '../../components/TopBar'
import { Ionicons } from '@expo/vector-icons';
import CommunityItem from '../../components/CommunityItem';
import { useState } from 'react';
import BookmarkedItem from '../../components/BookmarkedItem';
const { width, height } = Dimensions.get('window');


export default function BookmarkedListScreen({navigation}) {
  
  return (
    <View style={{backgroundColor:'white', flex:1}}>
      <TopBar navigation={navigation}/>
      
      <View style={{backgroundColor:'rgba(240,242,245,1)',flex:1, alignItems:'center'}}> 
        <View style={{backgroundColor:'white', height:height*0.07,flexDirection:'row', alignItems:'center', justifyContent:'center'}}> 
            <TouchableOpacity onPress={() => navigation.goBack() } style={{flex:1, paddingLeft:5}}>
              <Ionicons name="arrow-back-outline" size={45} color="black"/>
            </TouchableOpacity>
            <Text style={{fontSize:17, flex:1, position:'absolute'}}>Kaydedilenler</Text> 
        </View>

        <ScrollView style={{backgroundColor:'rgba(240,242,245,1)'}}>
          
          <BookmarkedItem />
          <BookmarkedItem />
          <BookmarkedItem />
        
        </ScrollView>

      </View>

    </View>
  )
}