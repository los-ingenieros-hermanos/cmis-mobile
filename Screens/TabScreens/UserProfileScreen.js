import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import TopBar from '../../components/TopBar';
import { ScrollView } from 'react-native-gesture-handler';
import { RFValue } from "react-native-responsive-fontsize";
import { AntDesign} from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

const { width, height } = Dimensions.get('window');

export default function UserProfileScreen({navigation}) {
  
  const first = useSelector((store) => store.studentData.firstname);
  const last = useSelector((store) => store.studentData.lastname);

  const IDTest =  useSelector((store) => store.studentData.id);
  const pp_image = useSelector((store) => store.studentData.image);
  const banner = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAcCAIAAACGS4oPAAAAKklEQVRIie3NQQEAQAQAsHNZ0D+iFj62Aousflv+2iSTyWQymUwmk53PBoSKAKdl2LbmAAAAAElFTkSuQmCC";
  const profileInfo = useSelector((store) => store.studentData.info);




  return (
      <View style={{flex:1}}>
              <ScrollView style={{ backgroundColor:'rgba(240,242,245,1)'}}> 
              
              
              <View style={{width:'100%', height:height*0.55}}> 
                <Image style={{resizeMode:'cover', width:width, height:height*0.25, overflow:'hidden'}} source={{uri: `${banner}`}} />
                
                  <View style={{flexDirection:'row', height:height*0.085, width:width*0.9}}> 
                      
                      <View style={{top:-height*0.075, left:width*0.05, flexDirection:'row'}}>
                        <Image style={{borderWidth:7 ,borderColor:'rgba(240,242,245,1)',resizeMode:'cover', width:height*0.15, height:height*0.15,borderRadius:1000}} source={{uri: `${pp_image}`}} />
                      </View>

                      <View style={{left:width*0.05}}>
                        <Text style={{top:5,textAlign:'center',width:width*0.55,fontSize: RFValue(16, 580),color:'rgba(43,31,71,1)', fontWeight:'600'}}> 
                            {first + " "+ last}
                        </Text>
                      </View>

                      <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/erseleren/')} style={{marginTop:5, left:-10}}>    
                          <AntDesign name="instagram" size={45} color="rgba(229,59,100,1)" />
                      </TouchableOpacity>
                  </View>

                  
              
                    <View style={{backgroundColor:'white',top:5,shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2, elevation: 5, height:height*0.15, borderRadius:10, width:'96%', alignSelf:'center'}}>
                      <Text numberOfLines={3}  style={{marginHorizontal:'5%',
                                                        marginTop:'1%',
                                                        color:'rgba(51,51,51,1)', 
                                                        fontSize:RFValue(13, 580),
                                                        fontWeight:'300',
                                                        lineHeight:height*0.027,
                                                        height:height*0.1, width:'85%'}}> Kulüp açıklaması. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in egestas erat, in aliquet metus. Praesent porta quis nunc eu elerisque. Sed id nulla venenatis tortor euismod imperdiet ac sed augue.</Text>
                    </View>
              
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