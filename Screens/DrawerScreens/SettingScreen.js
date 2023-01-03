import {Dimensions, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {StatusBar} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function SettingScreen({navigation}) {
  return (
    <View>
      <View style={{backgroundColor:'white', height:StatusBar.currentHeight}}> 
      </View>

      <View style={{backgroundColor:'rgba(84,70,115,1)', height:height*0.06, alignItems:'center', flexDirection:'row'}}>
            
            <View style={{width:width*0.10, position:'absolute'}}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{marginLeft:10}}>
                    <Ionicons name="arrow-back-outline" size={45} color="white" />
                </TouchableOpacity>
            </View>
            <View style={{width:width, alignItems:'center'}}>
                <Text style={{color:'white',fontSize: RFValue(15, 580) }}> Ayarlar </Text>
            </View>
      </View>

      <View style={{height:height*0.82, backgroundColor:'white'}}>
          <View style={{height:height*0.05, backgroundColor:'white', justifyContent:'center', marginLeft:width*0.025, marginVertical:10}}>
            <TouchableOpacity style={{flexDirection:'row'}}>
            <MaterialIcons name="lock" size={27} color="rgba(84,70,115,1)" />
              <Text style={{color:'rgba(84,70,115,1)', fontSize: RFValue(13,580)}}>Şifre Değiştir</Text>
            </TouchableOpacity>
          </View>

          <View style={{left:4,height:height*0.05, backgroundColor:'white', justifyContent:'center', marginLeft:width*0.025, marginVertical:5}}>
            <TouchableOpacity style={{flexDirection:'row'}}>
            <MaterialIcons name="logout" size={27} color='rgba(187,58,58,1)' />
              <Text style={{color:'rgba(187,58,58,1)', fontSize: RFValue(13,580)}}>Çıkış Yap</Text>
            </TouchableOpacity>
          </View>
      </View>

      
    </View>
  )
}