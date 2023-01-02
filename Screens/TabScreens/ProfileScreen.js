import * as React from 'react';
import { Text, View, StyleSheet, Image,PixelRatio, TouchableOpacity } from 'react-native';
import TopBar from '../../components/TopBar';
import { useRef } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Feather } from '@expo/vector-icons';
import Post from '../../components/Post';
import { Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');


export default function ProfileScreen({navigation}) {
  
  return (
      <View style={{flex:1}}>
              <TopBar navigation={navigation}/>
              <ScrollView style={{ backgroundColor:'rgba(240,242,245,1)'}}> 
              
              
              <View style={{width:'100%', height:height*0.61}}> 
                <Image style={{resizeMode:'cover', width:width, height:height*0.25, overflow:'hidden'}} source={require('../../storage/images/geekday.png')} />

                  <View style={{backgroundColor:'rgba(240,242,245,1)',flexDirection:'row',justifyContent:'space-between', height:height*0.15}}> 
                      <View style={{top:'-15%', left:'10%', flexDirection:'column'}}>
                        <Image style={{borderWidth:7 ,borderColor:'rgba(240,242,245,1)',resizeMode:'cover', width:height*0.15, height:height*0.15,borderRadius:1000}} source={require('../../storage/images/pp_image.png')} />
                        <Text style={{textAlign:'center',maxWidth:175,fontSize: RFValue(16, 580),color:'rgba(43,31,71,1)', fontWeight:'600'}}> GTÜ Bilgisayar Topluluğu</Text>
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

                  <View style={{backgroundColor:'rgba(240,242,245,1)',height:height*0.04, flexDirection:'row', justifyContent:'space-evenly', marginHorizontal:5}}>
                      <TouchableOpacity onPress={() => navigation.navigate("Applications")} style={{justifyContent:'center', alignItems:'center',marginHorizontal:5,backgroundColor:'rgba(84,70,115,1)', borderRadius:5, width:'30%'}}>
                        <Text style={{color:'white',fontSize: RFValue(13, 580)}}>Başvurular</Text>
                      </TouchableOpacity>
                      
                      <TouchableOpacity onPress={() => navigation.navigate("UserList")} style={{justifyContent:'center', alignItems:'center',marginHorizontal:5,backgroundColor:'rgba(84,70,115,1)', borderRadius:5, width:'20%'}}>
                        <Text style={{color:'white',fontSize: RFValue(13, 580)}}>Üyeler</Text>
                      </TouchableOpacity>
                      
                      <TouchableOpacity style={{justifyContent:'center', alignItems:'center',marginHorizontal:5,backgroundColor:'rgba(84,70,115,1)', borderRadius:5, width:'30%'}}>
                        <Text style={{color:'white',fontSize: RFValue(13, 580)}}>Etkinlikler</Text>
                      </TouchableOpacity>
                      
                      <TouchableOpacity onPress={() => navigation.navigate("CreatePost")} style={{justifyContent:'center', alignItems:'center',marginHorizontal:5,backgroundColor:'rgba(84,70,115,1)', borderRadius:5, width:'10%'}}>
                        <AntDesign name="plus" size={22} color="white" />
                      </TouchableOpacity>
                  </View>
              
                    <View style={{backgroundColor:'white',top:5,shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2, elevation: 5, height:height*0.15, borderRadius:10, width:'96%', alignSelf:'center'}}>
                      <Text numberOfLines={3}  style={{marginHorizontal:'5%',marginTop:'1%',color:'rgba(51,51,51,1)', fontSize:RFValue(13, 580),fontWeight:'300' ,lineHeight:height*0.027, height:height*0.1, width:'85%'}}> Kulüp açıklaması. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in egestas erat, in aliquet metus. Praesent porta quis nunc eu elerisque. Sed id nulla venenatis tortor euismod imperdiet ac sed augue.</Text>
                    </View>
              
              </View>
              
              

              
                  <Post />
                  
                
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