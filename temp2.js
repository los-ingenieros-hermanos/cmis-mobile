import * as React from 'react';
import { Text, View, StyleSheet, Image,PixelRatio, TouchableOpacity } from 'react-native';
import TopBar from '../../components/TopBar';

import { ScrollView } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Feather } from '@expo/vector-icons';
import Post from '../../components/Post';

import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');


export default function ProfileScreen({navigation}) {
  return (
      <View style={{flex:1}}>
              <TopBar navigation={navigation}/>
              <ScrollView style={{ backgroundColor:'rgba(240,242,245,1)', marginBottom:62}}> 
              
          
              <View style={{width:'100%', height:200}}> 
                <Image style={{resizeMode:'cover', width:width, height:200, overflow:'hidden'}} source={require('../../storage/images/geekday.png')} />
              </View>
              

              
                  
                  <View style={{backgroundColor:'rgba(240,242,245,1)', backgroundColor:'yellow',flexDirection:'row',justifyContent:'space-between'}}> 
                    <View style={{top:'-15%', left:'10%', flexDirection:'column', alignItems:'center'}}>
                      <Image style={{borderWidth:7 ,borderColor:'rgba(240,242,245,1)',resizeMode:'cover', width:120, height:120,borderRadius:1000}} source={require('../../storage/images/pp_image.png')} />
                      <Text style={{textAlign:'center',maxWidth:200,fontSize: RFValue(17, 580),color:'rgba(43,31,71,1)', fontWeight:'600'}}> GTÜ Bilgisayar Topluluğu</Text>
                    </View>

                    <View style={{position:'absolute',top:'-2%',marginTop:5, alignItems:'center', paddingLeft:60, left:'50%'}}>
                          <Text style={{ fontSize: RFValue(20, 580), fontWeight:'bold', color:'rgba(84,70,115,1)'}}> 125 </Text>  
                          <Text style={{ fontSize: RFValue(13, 580), fontWeight:'400',color:'rgba(84,70,115,1)' }}> Takipçi </Text>
                    </View>

                    <View style={{position:'absolute',top:'-2%',marginTop:5, alignItems:'center', left:'45%'}}>
                          <Text style={{ fontSize: RFValue(20, 580), fontWeight:'bold', color:'rgba(84,70,115,1)'}}> 125 </Text>  
                          <Text style={{ fontSize: RFValue(13, 580), fontWeight:'400',color:'rgba(84,70,115,1)' }}> Üye </Text>
                    </View>

                    
                    <TouchableOpacity style={{marginRight:10,marginTop:5}}> 
                        <Entypo name="mail-with-circle" size={50} color="rgba(84,70,115,1)" />
                    </TouchableOpacity>
                  </View>
              
              

                <View style={{top:'-13%',backgroundColor:'rgba(240,242,245,1)',backgroundColor:'red' ,height:30, flexDirection:'row', justifyContent:'space-evenly', marginHorizontal:5, flex:1}}>
                    <TouchableOpacity onPress={() => navigation.navigate("Applications")} style={{justifyContent:'center', alignItems:'center',marginHorizontal:5,backgroundColor:'rgba(84,70,115,1)', borderRadius:5, width:'30%'}}>
                      <Text style={{color:'white',fontSize: RFValue(13, 580)}}>Başvurular</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => navigation.navigate("UserList")} style={{justifyContent:'center', alignItems:'center',marginHorizontal:5,backgroundColor:'rgba(84,70,115,1)', borderRadius:5, width:'20%'}}>
                      <Text style={{color:'white',fontSize: RFValue(13, 580)}}>Üyeler</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={{justifyContent:'center', alignItems:'center',marginHorizontal:5,backgroundColor:'rgba(84,70,115,1)', borderRadius:5, width:'30%'}}>
                      <Text style={{color:'white',fontSize: RFValue(13, 580)}}>Etkinlikler</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={{justifyContent:'center', alignItems:'center',marginHorizontal:5,backgroundColor:'rgba(84,70,115,1)', borderRadius:5, width:'10%'}}>
                    <Feather name="edit" size={RFValue(13, 580)} color="white" />
                    </TouchableOpacity>

                </View>
              
              

              <View style={{ top:0,shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2, elevation: 5 ,backgroundColor:'white', height:'8%', borderRadius:10, width:'100%'}}>
                <Text style={{marginHorizontal:'5%',marginTop:'1%',color:'rgba(51,51,51,1)', fontSize:16,fontWeight:'300' ,lineHeight:20, height:'65%', width:'85%'}}> Kulüp açıklaması. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in egestas erat, in aliquet metus. Praesent porta quis nunc eu elerisque. Sed id nulla venenatis tortor euismod imperdiet ac sed augue.</Text>
                <View style={{height:'25%', flexDirection:'row', top:5, alignItems:'center'}}> 
                    <Text style={{marginLeft:'4%', color:'rgba(51,51,51,1)'}}> Etiketler: </Text>
                    <View style={{backgroundColor:'rgba(217,217,217,1)', height:'40%', width:'15%', borderRadius:10, marginRight:5}}></View>
                    <View style={{backgroundColor:'rgba(217,217,217,1)', height:'40%', width:'15%', borderRadius:10, marginRight:5}}></View>
                </View>
              </View>
                  
                    <View style={{top:'-2%'}}> 
                      <Post />
                    </View>
                
              </ScrollView>
        </View>
     
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