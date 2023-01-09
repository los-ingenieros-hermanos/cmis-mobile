import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import TopBar from '../../components/TopBar';
import { ScrollView } from 'react-native-gesture-handler';
import { RFValue } from "react-native-responsive-fontsize";
import { AntDesign} from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {useFocusEffect } from '@react-navigation/native'
import ProjectIdeas from '../../components/ProjectIdeas';

import {s_updateBanner,s_updateInstagram,s_updateInfo,s_updateImage} from '../../redux/actions/studentDataAction';

const { width, height } = Dimensions.get('window');

export default function UserProfileScreen({navigation}) {
  
  const first = useSelector((store) => store.studentData.firstname);
  const last = useSelector((store) => store.studentData.lastname);

  const IDTest =  useSelector((store) => store.studentData.id);
  const [refreshing, setRefreshing] = React.useState(0);
  const url1 = useSelector((store) => store.url.url);
  const defaultBanner = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAKCAIAAAD3rtNaAAAAFElEQVQYlWPcPuMvAwZgwhQagqIA/fUCYMd5vI0AAAAASUVORK5CYII=";
  
  const [profileInfo, setProfileInfo] = React.useState(useSelector((store) => store.studentData.info));
  const [pp_image, setPP_image] = React.useState(useSelector((store) => store.studentData.image));
  const [instaLink, setInstalink] = React.useState(useSelector((store) => store.studentData.instagram));
  const [banner_image, setBanner] = React.useState(useSelector((store) => store.studentData.banner));

  const dispatch = useDispatch();

  const handleSocialMedia = async () => {
    console.log("LINK : " + instaLink);
    
    if(instaLink === null || instaLink === undefined || instaLink === ""){
      alert("Bu topluluk için sosyal medya hesabı bulunmamaktadır.");
    }
    else{
      const supported = await Linking.canOpenURL(instaLink);
        if (supported) {
          Linking.openURL(instaLink)
        } else {
          // URL can't be opened
        }
      
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      setRefreshing(refreshing + 1);
        
      fetch(url1+'/api/cmis/students/'+IDTest, {
          method: 'GET'
          })
          .then((response) => response.json())
          .then((responseJson) => {
              dispatch(s_updateImage(responseJson.image));
              dispatch(s_updateInstagram(responseJson.instagram));
              dispatch(s_updateInfo(responseJson.info));
              dispatch(s_updateBanner(responseJson.banner));
              setProfileInfo(responseJson.info);
              setPP_image(responseJson.image);
              setInstalink(responseJson.instagram);
              setBanner(responseJson.banner);
        })
        .catch((error) => {
          console.error(error);
        });
      
      
      
  }, [])
  );

  const handleCreateProjectIdea = async () => {
    navigation.navigate("CreateIdea");
  };

  return (
      <View style={{flex:1}}>
              <ScrollView style={{ backgroundColor:'rgba(240,242,245,1)'}}> 
              
              
              <View style={{width:'100%', height:height*0.55}}> 
                <Image style={{resizeMode:'cover', width:width, height:height*0.25, overflow:'hidden'}} source={{uri: `${banner_image ? banner_image : defaultBanner}`}} />
                
                  <View style={{flexDirection:'row', height:height*0.08, width:width*0.9}}> 
                      
                      <View style={{top:-height*0.075, left:width*0.05, flexDirection:'row'}}>
                        <Image style={{borderWidth:7 ,borderColor:'rgba(240,242,245,1)',resizeMode:'cover', width:height*0.15, height:height*0.15,borderRadius:1000}} source={{uri: `${pp_image}`}} />
                      </View>

                      <View style={{left:width*0.02,top:10}}>
                        <Text style={{top:5,textAlign:'center',width:width*0.55,fontSize: RFValue(16, 580),color:'rgba(43,31,71,1)', fontWeight:'600'}}> 
                            {first + " "+ last}
                        </Text>
                      </View>
                      
                      <View>
                      <TouchableOpacity onPress={handleSocialMedia} style={{marginTop:5, left:-10}}>    
                          <AntDesign name="instagram" size={45} color="rgba(229,59,100,1)" />
                      </TouchableOpacity>
                      </View>

                  </View>

                    <View style={{width:width, alignItems:'center', marginBottom:5}}> 
                      <TouchableOpacity onPress={handleCreateProjectIdea} style={{backgroundColor:'rgba(84,70,115,1)',width:width*0.5 ,height:height*0.04, justifyContent:'center', alignItems:'center', borderRadius:5}}>
                          
                            <Text style={{color:'white'}}> Askıda Proje Oluştur</Text>
                          
                      </TouchableOpacity>
                    </View>
                    <View style={{backgroundColor:'white',top:5,shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2, elevation: 5, height:height*0.15, borderRadius:10, width:'96%', alignSelf:'center'}}>
                      <Text numberOfLines={3}  style={{marginHorizontal:'5%',
                                                        marginTop:'1%',
                                                        color:'rgba(51,51,51,1)', 
                                                        fontSize:RFValue(13, 580),
                                                        fontWeight:'300',
                                                        lineHeight:height*0.027,
                                                        height:height*0.1, width:'85%'}}>{profileInfo}</Text>
                    </View>
              
              </View>
              
              <ProjectIdeas id={IDTest} />
              
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