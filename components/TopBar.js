import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, StatusBar, Touchable, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Post from '../components/Post';
import ProfilePicture from 'react-native-profile-picture';



export default function TopBar() {
  return (
       
        <View style={{backgroundColor:"rgba(228,228,228,1)", height:65, flexDirection:'row', paddingBottom:1}}>


        
            <View style={{flex:2,backgroundColor:'white', alignItems:'stretch', flexDirection:'column', justifyContent:'center'}}> 
                <TouchableOpacity style={{alignSelf:'center'}}>
                    <ProfilePicture
                    isPicture={true}
                    requirePicture={require('../storage/images/pp_image.png')}
                    shape={'circle'}
                    height={40}
                    width={40}
                    />
                </TouchableOpacity>
            </View>

            <View style={{flex:4, backgroundColor:'white'}}>
                <Text style={{fontSize:35, color:"rgba(84,70,115,1)", alignSelf:'center', letterSpacing:7.5} }> cmis </Text>
            </View>
        
        

            <View style={{flex:2, backgroundColor:'white'}}>

            </View>

        </View>   
  );
}
