import * as React from 'react';
import { Text, View, StyleSheet, Image,TouchableOpacity, Dimensions,Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";
import Post from '../../components/Post';
import { useSelector, useDispatch} from 'react-redux';
import {useFocusEffect } from '@react-navigation/native'
import {setDesiredProfileID} from '../../redux/actions/desiredProfileAction';
import { c_updateImage, c_updateBanner, c_updateInstagram, c_updateInfo } from '../../redux/actions/communityDataAction';

const { width, height } = Dimensions.get('window');


export default function ProfileScreen({navigation}) {
  
  const IDTest = useSelector((store) => store.userID.userID);
  const [followers, setFollowers] = React.useState(useSelector((store) => store.communityData.followerCount));
  const [members, setMembers] = React.useState(useSelector((store) => store.communityData.memberCount));
  const communityName = useSelector((store) => store.communityData.firstname);
  const pp_image = useSelector((store) => store.communityData.image);
  const banner_image = useSelector((store) => store.communityData.banner);
  const profileInfo = useSelector((store) => store.communityData.info);
  const instaLink = useSelector((store) => store.communityData.instagram);
  const [followed, setFollowed] = React.useState(false);
  const [joined, setJoined] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(0);
  const [profileObj, setProfileObj] = React.useState({});
  const url1 = useSelector((store) => store.url.url);

  const dispatch = useDispatch();
  const defaultBanner = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAKCAIAAAD3rtNaAAAAFElEQVQYlWPcPuMvAwZgwhQagqIA/fUCYMd5vI0AAAAASUVORK5CYII=";

  React.useEffect(() => {
    console.log(">>>>>>>>>>>>============ 1");
    console.log("IDTest1: " + IDTest);
    console.log(">>>>>>>>>>>>============ 2");
    dispatch(setDesiredProfileID(IDTest));
  } ,[]);

  const handleFollow = () => {
    if(followed === true){setFollowed(false);}
    else{setFollowed(true);}
  };

  const handleJoin = () => {
    if(joined === true){setJoined(false);}
    else{setJoined(true);}
  };

  useFocusEffect(
    React.useCallback(() => {
      console.log("ppppppppppppppppppppppppppppppppppppppppp");
      setRefreshing(refreshing + 1);
        
      fetch(url1+'/api/cmis/communities/'+IDTest, {
          method: 'GET'
          })
          .then((response) => response.json())
          .then((responseJson) => {
            dispatch(c_updateImage(responseJson.image));
            dispatch(c_updateBanner(responseJson.banner));
            dispatch(c_updateInstagram(responseJson.instagram));
            dispatch(c_updateInfo(responseJson.info));
            setMembers(responseJson.memberCount);
        })
        .catch((error) => {
          console.error(error);
        });
      
      
      
  }, [])
  );

  const handleSocialMedia = () => {
    if(instaLink === null || instaLink === undefined || instaLink === ""){
      alert("Bu topluluk için sosyal medya hesabı bulunmamaktadır.");
    }
    else{
      Linking.openURL(instaLink)
    }
  };

  return (
      <View style={{flex:1}}>
              <ScrollView style={{ backgroundColor:'rgba(240,242,245,1)'}}> 
              <Text>{refreshing}</Text>
              
              <View style={{width:'100%', height:height*0.61}}> 
                
                
                <Image style={{resizeMode:'cover', width:width, height:height*0.25, overflow:'hidden'}} source={{uri : `${banner_image ? banner_image : defaultBanner}`}} />
                
                

                  <View style={{backgroundColor:'rgba(240,242,245,1)',flexDirection:'row',justifyContent:'space-between', height:height*0.15}}> 
                      <View style={{top:'-15%', left:'10%', flexDirection:'column'}}>
                        <Image style={{borderWidth:7 ,borderColor:'rgba(240,242,245,1)',resizeMode:'cover', width:height*0.15, height:height*0.15,borderRadius:1000}} source={{uri: `${pp_image}`}} />
                        <Text style={{textAlign:'center',maxWidth:175,fontSize: RFValue(16, 580),color:'rgba(43,31,71,1)', fontWeight:'600'}}> {communityName}</Text>
                      </View>

                      <View style={{position:'absolute',top:'-2%',marginTop:5, alignItems:'center', paddingLeft:60, left:'50%'}}>
                            <TouchableOpacity onPress={() => navigation.navigate("Followers")} style={{alignItems:'center'}}>
                            <Text style={{ fontSize: RFValue(20, 580), fontWeight:'bold', color:'rgba(84,70,115,1)'}}> {followers} </Text>  
                            <Text style={{ fontSize: RFValue(13, 580), fontWeight:'400',color:'rgba(84,70,115,1)' }}> Takipçi </Text>
                            </TouchableOpacity>
                      </View>

                      <View style={{position:'absolute',top:'-2%',marginTop:5, alignItems:'center', left:'45%'}}>
                            <TouchableOpacity onPress={() => navigation.navigate("UserList")} style={{alignItems:'center'}}>
                            <Text style={{ fontSize: RFValue(20, 580), fontWeight:'bold', color:'rgba(84,70,115,1)'}}> {members} </Text>  
                            <Text style={{ fontSize: RFValue(13, 580), fontWeight:'400',color:'rgba(84,70,115,1)' }}> Üye </Text>
                            </TouchableOpacity>
                      </View>

                      
                      <TouchableOpacity onPress={handleSocialMedia} style={{marginTop:5, left:-10}}>    
                          <AntDesign name="instagram" size={45} color="rgba(229,59,100,1)" />
                      </TouchableOpacity>
                  </View>
                  <View style={{backgroundColor:'rgba(240,242,245,1)',height:height*0.04, flexDirection:'row', justifyContent:'space-evenly', marginHorizontal:5, top:-5}}>
                      
                      <TouchableOpacity onPress={() => navigation.navigate("Applications")} 
                        style={{justifyContent:'center', alignItems:'center',marginHorizontal:5,backgroundColor:'rgba(84,70,115,1)', borderRadius:5, width:'35%'}}>
                        <Text style={{color:'white',fontSize: RFValue(13, 580)}}>Başvurular</Text>
                      </TouchableOpacity>
                      
                     
                      
                      <TouchableOpacity style={{justifyContent:'center', alignItems:'center',marginHorizontal:5,backgroundColor:'rgba(84,70,115,1)', borderRadius:5, width:'35%'}}>
                        <Text style={{color:'white',fontSize: RFValue(13, 580)}}>Etkinlikler</Text>
                      </TouchableOpacity>
                      
                      <TouchableOpacity onPress={() => navigation.navigate("CreatePost")} style={{justifyContent:'center', alignItems:'center',marginHorizontal:5,backgroundColor:'rgba(84,70,115,1)', borderRadius:5, width:'15%'}}>
                        <AntDesign name="plus" size={22} color="white" />
                      </TouchableOpacity>
                  </View>

                    <View style={{backgroundColor:'white',top:5,shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2, elevation: 5, height:height*0.15, borderRadius:10, width:'96%', alignSelf:'center'}}>
                      <Text numberOfLines={3}  style={{marginHorizontal:'5%',marginTop:'1%',color:'rgba(51,51,51,1)', fontSize:RFValue(13, 580),fontWeight:'300' ,lineHeight:height*0.027, height:height*0.1, width:'85%'}}> {profileInfo}</Text>
                    </View>
              
              </View>
              
              

              
                  <Post id={IDTest}/>
                  
                
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