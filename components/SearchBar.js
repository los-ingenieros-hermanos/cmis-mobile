import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function SearchBar() {
  const navigation = useNavigation();


  return (
    <View style={{flexDirection:'column', width:'100%'}}>

        <View style={{flexDirection:'row', backgroundColor:'white', paddingBottom:10, marginTop:25}}>
        
            <View style={{ marginLeft:10, borderRadius:10, marginTop:10, flex:1}}>
                <TouchableOpacity style={{alignSelf:'center'}} onPress={() => {navigation.goBack()}} >
                    <AntDesign name="arrowleft" size={30} color="black" />
                </TouchableOpacity>
            </View>
            
            <View style={{flexDirection:'row',backgroundColor:'"rgba(217,217,217,1)"', borderRadius:5, marginTop:10, marginRight:10,flex:10}}>
                <EvilIcons name="search" size={25} color="black" style={{alignSelf:'center', paddingLeft:5}}/>
                <TextInput placeholder= "cmis'te ara" placeholderTextColor={'rgba(167,167,167,1)'} style={{paddingLeft:0, width:'100%'}}></TextInput>
            </View>
            
        </View>
    
        <View style={{ paddingHorizontal:10, flexDirection:'row', justifyContent:'space-between'}}> 
          <Text style={{fontWeight:'bold'}}> Arama Geçmişi</Text>
          <TouchableOpacity>
            <Text style={{fontWeight:'bold'}}> Temizle </Text>
          </TouchableOpacity>
          
        </View>

    </View>
  )
}