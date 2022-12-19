import * as React from 'react';
import { Text, View, StyleSheet, Image,PixelRatio, TouchableOpacity } from 'react-native';
import TopBar from '../../components/TopBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import navigation from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Feather } from '@expo/vector-icons';

import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');


export default function ProfileScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
              
              <TopBar navigation={navigation}/>
              
                  
        
              <View style={{backgroundColor:'green', width:'100%', height:'25%'}}> 
                <Image style={{resizeMode:'cover', backgroundColor:'red', width:width, height:'100%', overflow:'hidden'}} source={require('../../storage/images/geekday.png')} />
              </View>
              

              <View style={{backgroundColor:'rgba(217,217,217,1)', flexDirection:'row', justifyContent:'space-between', height:120}}> 
                  
                  
                  <View style={{top:'-10%', left:25, flexDirection:'column', alignItems:'center'}}>
                    <Image style={{borderWidth:7 ,borderColor:'rgba(217,217,217,1)',resizeMode:'cover', width:125, height:125,borderRadius:1000}} source={require('../../storage/images/pp_image.png')} />
                    <Text style={{fontSize: RFValue(17, 580),color:'rgba(43,31,71,1)'}}> Kulüp İsmi </Text>
                  </View>

                  <View style={{top:'-2%',marginTop:15, alignItems:'center', paddingLeft:25}}>
                        <Text style={{ fontSize: RFValue(20, 580), fontWeight:'bold', color:'rgba(84,70,115,1)'}}> 125 </Text>  
                        <Text style={{ fontSize: RFValue(13, 580), fontWeight:'600',color:'rgba(84,70,115,1)' }}> Takipçi </Text>
                  </View>

                  <View style={{top:'-2%',marginTop:15, alignItems:'center'}}>
                        <Text style={{ fontSize: RFValue(20, 580), fontWeight:'bold', color:'rgba(84,70,115,1)'}}> 125 </Text>  
                        <Text style={{ fontSize: RFValue(13, 580), fontWeight:'600',color:'rgba(84,70,115,1)' }}> Üye </Text>
                  </View>

                  
                  <TouchableOpacity style={{marginRight:10,marginTop:5}}> 
                      <Entypo name="mail-with-circle" size={50} color="rgba(84,70,115,1)" />
                  </TouchableOpacity>
              </View>

              <View style={{backgroundColor:'rgba(217,217,217,1)', height:30, flexDirection:'row', justifyContent:'space-evenly', marginHorizontal:10}}>
                  <TouchableOpacity style={{justifyContent:'center', alignItems:'center',marginHorizontal:5,backgroundColor:'rgba(84,70,115,1)', borderRadius:5, width:'30%'}}>
                    <Text style={{color:'white',fontSize: RFValue(14, 580)}}>Başvurular</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={{justifyContent:'center', alignItems:'center',marginHorizontal:5,backgroundColor:'rgba(84,70,115,1)', borderRadius:5, width:'20%'}}>
                    <Text style={{color:'white',fontSize: RFValue(14, 580)}}>Üyeler</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={{justifyContent:'center', alignItems:'center',marginHorizontal:5,backgroundColor:'rgba(84,70,115,1)', borderRadius:5, width:'30%'}}>
                    <Text style={{color:'white',fontSize: RFValue(14, 580)}}>Etkinlikler</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={{justifyContent:'center', alignItems:'center',marginHorizontal:5,backgroundColor:'rgba(84,70,115,1)', borderRadius:5, width:'10%'}}>
                  <Feather name="edit" size={RFValue(14, 580)} color="white" />
                  </TouchableOpacity>

              </View>

                   
      </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(217,217,217,1)",
  },
  scrollView: {
    backgroundColor: "rgba(217,217,217,1)",
  },
  text: {
    fontSize: 42,
  },
});