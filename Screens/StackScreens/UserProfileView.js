import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity,StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from 'react-native';
import { useSelector} from 'react-redux';
import {useFocusEffect } from '@react-navigation/native'
import  Ionicons from 'react-native-vector-icons/Ionicons';
import  AntDesign from 'react-native-vector-icons/AntDesign';

export default function UserProfileView({navigation}) {
  const { width, height } = Dimensions.get('window');
  const userID = useSelector((store) => store.userID.userID);
  const url1 = useSelector((store) => store.url.url);
  const userRole = useSelector((store) => store.userID.userRole);
  const [followed, setFollowed] = React.useState(false);
  const [joined, setJoined] = React.useState(false);
  const [profileObj, setProfileObj] = React.useState("");
  const desiredProfileID = useSelector((store) => store.desiredProfileID.id);
  const [refreshing, setRefreshing] = React.useState(0);
  const defaultPP = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAFElEQVQYlWNkuLiJAQkwMaACUvkAdxgBjXva0XwAAAAASUVORK5CYII=";
  const defaultBanner = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAKCAIAAAD3rtNaAAAAFElEQVQYlWPcPuMvAwZgwhQagqIA/fUCYMd5vI0AAAAASUVORK5CYII=";


  const [banner_image, setBanner] = React.useState(null);

  useFocusEffect(
    React.useCallback(() => {
      let temp;
      let temp2;
      console.log("================================ 1");
      console.log(desiredProfileID);
      console.log("================================ 2");
    
    fetch(url1+'/api/cmis/students/'+desiredProfileID, {
      method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.user.firstName);
        temp = JSON.stringify(responseJson);
        temp2 = JSON.parse(temp);
        setProfileObj(temp2);

    })
    .catch((error) => {
      console.error(error);
    });

  }, [refreshing])
  );

  const handleBackArrow = () => {
    console.log("BACK ARROW CLICKED");
    navigation.goBack();
  }

  const handleSocialMedia = async () => {
    if(profileObj.instagram === null || profileObj.instagram === undefined || profileObj.instagram === ""){
      alert("Bu topluluk için sosyal medya hesabı bulunmamaktadır.");
    }
    else{
      Linking.openURL(profileObj.instagram)
    }
  }

  return (
    profileObj && (
    
    <View style={{flex:1, top:15}}>
            <ScrollView style={{ backgroundColor:'rgba(240,242,245,1)'}}> 
            <View style={{top:5, backgroundColor:'white'}}>
                  <TouchableOpacity onPress={handleBackArrow}>
                  <Ionicons name="arrow-back-outline" size={45} color="black"/>
                  </TouchableOpacity>
                  </View>
            
            <View style={{width:'100%', height:height*0.55}}> 
              <Image style={{resizeMode:'cover', width:width, height:height*0.25, overflow:'hidden'}} source={{uri: `${banner_image ? banner_image : defaultBanner}`}} />
              
                <View style={{flexDirection:'row', height:height*0.08, width:width*0.9}}> 
                    
                    <View style={{top:-height*0.075, left:width*0.05, flexDirection:'row'}}>
                      <Image style={{borderWidth:7 ,borderColor:'rgba(240,242,245,1)',resizeMode:'cover', width:height*0.15, height:height*0.15,borderRadius:1000}} source={{uri : `${profileObj.image ? profileObj.image : defaultPP}`}} />
                    </View>

                    <View style={{left:width*0.02,top:10}}>
                      <Text style={{top:5,textAlign:'center',width:width*0.55,fontSize: RFValue(16, 580),color:'rgba(43,31,71,1)', fontWeight:'600'}}> 
                          {profileObj.user.firstName + " "+ profileObj.user.lastName}
                      </Text>
                    </View>
                    
                    <View>
                    <TouchableOpacity onPress={handleSocialMedia} style={{marginTop:5, left:-10}}>    
                        <AntDesign name="instagram" size={45} color="rgba(229,59,100,1)" />
                    </TouchableOpacity>
                    </View>

                </View>

                  <View style={{width:width, alignItems:'center', marginBottom:5}}> 
                    <TouchableOpacity style={{backgroundColor:'rgba(84,70,115,1)',width:width*0.5 ,height:height*0.04, justifyContent:'center', alignItems:'center', borderRadius:5}}>
                        
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
                                                      height:height*0.1, width:'85%'}}>{profileObj.info}</Text>
                  </View>
            
            </View>
            
            
            </ScrollView>
      </View>)
   
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
