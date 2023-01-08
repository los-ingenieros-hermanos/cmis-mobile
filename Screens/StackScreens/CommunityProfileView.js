import * as React from 'react';
import { Text, View, StyleSheet, Image,TouchableOpacity, Dimensions, Alert, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign,MaterialIcons, Ionicons } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";
import Post from '../../components/Post';
import { useSelector, useDispatch} from 'react-redux';
import {useFocusEffect } from '@react-navigation/native'


const { width, height } = Dimensions.get('window');

import {setDesiredProfileID} from '../../redux/actions/desiredProfileAction';

export default function CommunityProfileView({navigation}) {
  
  const userID = useSelector((store) => store.userID.userID);
  const url1 = useSelector((store) => store.url.url);
  const userRole = useSelector((store) => store.userID.userRole);
  const [followed, setFollowed] = React.useState(false);
  const [joined, setJoined] = React.useState(false);
  const [profileObj, setProfileObj] = React.useState("");
  const desiredProfileID = useSelector((store) => store.desiredProfileID.id);
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = React.useState(0);
  const defaultPP = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAFElEQVQYlWNkuLiJAQkwMaACUvkAdxgBjXva0XwAAAAASUVORK5CYII=";
  const defaultBanner = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAKCAIAAAD3rtNaAAAAFElEQVQYlWPcPuMvAwZgwhQagqIA/fUCYMd5vI0AAAAASUVORK5CYII=";


  const unfollow = async () => {
    console.log('Option 1 selected')
    fetch(url1 +'/api/cmis/students/'+userID+"/followingCommunities/"+ profileObj.id, {
      method: 'DELETE'
      })
      setFollowed(false);

      setRefreshing(refreshing+1);
  };

  const follow = async () => {
    fetch(url1 +'/api/cmis/students/'+userID+"/followingCommunities", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id:profileObj.id}),
      })
      .then((res) => res.json())
      .then((responseJson) => {
        setFollowed(true);
      })
      .catch((err) => {
        console.log(err.message);
      });

      setRefreshing(refreshing+1);
  };

  const handleFollow = async () => {
    if(followed === true){
      Alert.alert(
        'Takibi Bırakmak İstediğinize Emin Misiniz ?',
        '',
        [
          { text: 'Evet', onPress: () => unfollow()},
          { text: 'İptal', onPress: () => console.log('Option 2 selected') },
        ],
        { cancelable: true },
      );
    }
    else{
      Alert.alert(
        'Bu Topluluğu Takip Etmeye Başladınız !',
        '',
        [
          { text: 'Tamam', onPress: () => follow() },
        ],
        { cancelable: false },
      );
    }
    
  };

  const join = async () => {
    fetch(url1 +'/api/cmis/communities/'+profileObj.id+"/apply/"+userID , {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ }),
      })
      .then((res) => res.json())
      .then((responseJson) => {
        
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleJoin = () => {
    if(joined === true){
      Alert.alert(
        'Topluluktan Çıkmak İstediğinize Emin Misiniz ?',
        '',
        [
          { text: 'Evet', onPress: () => join()},
          { text: 'İptal', onPress: () => console.log('Option 2 selected') },
        ],
        { cancelable: true },
      );
    }
    else{
      Alert.alert(
        'Başvurunuz Alınmıştır !',
        'Topluluğa başvurunuz alınmıştır. Topluluk yöneticisi tarafından onaylandığında topluluğa katılacaksınız.',
        [
          { text: 'Tamam', onPress: () => join() },
          
        ],
        { cancelable: false },
      );
    }
  };

  const handleBackArrow = () => {
        dispatch(setDesiredProfileID("-1"));
        navigation.goBack();  
  };

  useFocusEffect(
    React.useCallback(() => {
      let temp;
    let temp2;
    
    fetch(url1+'/api/cmis/communities/'+desiredProfileID, {
      method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
        temp = JSON.stringify(responseJson);
        temp2 = JSON.parse(temp);
        setProfileObj(temp2);

    })
    .catch((error) => {
      console.error(error);
    });

    if(userRole==="ROLE_STUDENT"){
        
      fetch(url1+'/api/cmis/students/'+userID+"/isMemberOf/"+desiredProfileID, {
          method: 'GET'
          })
          .then((response) => response.json())
          .then((responseJson) => {
            if(responseJson === true){
              setJoined(true);
            }
            if(responseJson === false){
              setJoined(false);
            }
        })
        .catch((error) => {
          console.error(error);
        });

        fetch(url1+'/api/cmis/students/'+userID+"/isFollowerOf/"+desiredProfileID, {
          method: 'GET'
          })
          .then((response) => response.json())
          .then((responseJson) => {
            if(responseJson === true){
              setFollowed(true);
            }
            if(responseJson === false){
              setFollowed(false);
            }
        })
        .catch((error) => {
          console.error(error);
        });

        

    }
    else if(userRole==="ROLE_COMMUNITY"){

    }
    else{
    }
  }, [refreshing])
  );

  
  return (
      //if profileObj is not null then render the page


      profileObj && 
      ( 
            <View style={{flex:1, top:15}}>
                  <ScrollView style={{ backgroundColor:'rgba(240,242,245,1)'}}> 
                  <View style={{top:5, backgroundColor:'white'}}>
                  <TouchableOpacity onPress={handleBackArrow}>
                  <Ionicons name="arrow-back-outline" size={45} color="black"/>
                  </TouchableOpacity>
                  </View>
                  
                  <View style={{width:'100%', height:height*0.61}}> 
                    <Image style={{resizeMode:'cover', width:width, height:height*0.25, overflow:'hidden'}} source={{uri : `${defaultBanner}`}} />
                      <View style={{backgroundColor:'rgba(240,242,245,1)',flexDirection:'row',justifyContent:'space-between', height:height*0.15}}> 
                          <View style={{top:'-15%', left:'10%', flexDirection:'column'}}>
                            <Image style={{borderWidth:7 ,borderColor:'rgba(240,242,245,1)',resizeMode:'cover', width:height*0.15, height:height*0.15,borderRadius:1000}} source={{uri : `${profileObj.image ? profileObj.image : defaultPP}`}} />
                            <Text style={{textAlign:'center',maxWidth:175,fontSize: RFValue(16, 580),color:'rgba(43,31,71,1)', fontWeight:'600'}}> {profileObj.name}</Text>
                          </View>

                          <View style={{position:'absolute',top:'-2%',marginTop:5, alignItems:'center', paddingLeft:60, left:'50%'}}>
                                <Text style={{ fontSize: RFValue(20, 580), fontWeight:'bold', color:'rgba(84,70,115,1)'}}> {profileObj.followerCount} </Text>  
                                <Text style={{ fontSize: RFValue(13, 580), fontWeight:'400',color:'rgba(84,70,115,1)' }}> Takipçi </Text>
                          </View>

                          <View style={{position:'absolute',top:'-2%',marginTop:5, alignItems:'center', left:'45%'}}>
                                <Text style={{ fontSize: RFValue(20, 580), fontWeight:'bold', color:'rgba(84,70,115,1)'}}> {profileObj.memberCount} </Text>  
                                <Text style={{ fontSize: RFValue(13, 580), fontWeight:'400',color:'rgba(84,70,115,1)' }}> Üye </Text>
                          </View>

                          
                          <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/erseleren/')} style={{marginTop:5, left:-10}}>    
                              <AntDesign name="instagram" size={45} color="rgba(229,59,100,1)" />
                          </TouchableOpacity>
                      </View>
                      {userRole === "ROLE_STUDENT" && (<View style={{backgroundColor:'rgba(240,242,245,1)',height:height*0.04, flexDirection:'row', justifyContent:'space-evenly', marginHorizontal:5, top:-5}}>
                          
                          {joined === false && (<TouchableOpacity onPress={()=> handleJoin()} style={{justifyContent:'center', alignItems:'center',marginHorizontal:5,backgroundColor:'rgba(84,70,115,1)', borderRadius:5, width:'30%'}}>
                            <Text style={{color:'white',fontSize: RFValue(13, 580)}}>Başvur</Text>
                          </TouchableOpacity>)}
                          
                          {joined === true && (<TouchableOpacity onPress={()=> handleJoin()} style={{justifyContent:'center', alignItems:'center',marginHorizontal:5,backgroundColor:'white', borderRadius:5, width:'30%', flexDirection:'row'}}>
                            <Text style={{color:'rgba(84,70,115,1)',fontSize: RFValue(13, 580)}}>Katıldın </Text>
                            <MaterialIcons name="check" size={15} color="rgba(84,70,115,1)" />
                          </TouchableOpacity>)}
                          
                          {followed === false && (<TouchableOpacity onPress={()=> handleFollow()} style={{justifyContent:'center', alignItems:'center',marginHorizontal:5,backgroundColor:'rgba(84,70,115,1)', borderRadius:5, width:'30%'}}>
                            <Text style={{color:'white',fontSize: RFValue(13, 580)}}>Takip Et</Text>
                          </TouchableOpacity>)}
                          
                          {followed === true && (<TouchableOpacity onPress={()=> handleFollow()} style={{justifyContent:'center', alignItems:'center',marginHorizontal:5,backgroundColor:'white', borderRadius:5, width:'30%', flexDirection:'row'}}>
                            <Text style={{color:'rgba(84,70,115,1)',fontSize: RFValue(13, 580)}}>Takip</Text>
                            <MaterialIcons name="keyboard-arrow-down" size={22} color="rgba(84,70,115,1)" />
                          </TouchableOpacity>)}

                          <TouchableOpacity style={{justifyContent:'center', alignItems:'center',marginHorizontal:5,backgroundColor:'rgba(84,70,115,1)', borderRadius:5, width:'30%'}}>
                            <Text style={{color:'white',fontSize: RFValue(13, 580)}}>Etkinlikler</Text>
                          </TouchableOpacity>
                          
                          
                      </View>) }

                      {userRole === "ROLE_COMMUNITY" && (<View style={{backgroundColor:'rgba(240,242,245,1)',height:height*0.04, flexDirection:'row', justifyContent:'space-evenly', marginHorizontal:5}}>
                          
                          {joined === false && (<TouchableOpacity disabled={true} onPress={()=> handleJoin()} style={{justifyContent:'center', alignItems:'center',marginHorizontal:5,backgroundColor:'rgba(204,204,204,1)', borderRadius:5, width:'27%'}}>
                            <Text style={{color:'white',fontSize: RFValue(13, 580)}}>Başvur</Text>
                          </TouchableOpacity>)}
                          
                          {joined === true && (<TouchableOpacity disabled={true} onPress={()=> handleJoin()} style={{justifyContent:'center', alignItems:'center',marginHorizontal:5,backgroundColor:'white', borderRadius:5, width:'27%', flexDirection:'row'}}>
                            <Text style={{color:'rgba(84,70,115,1)',fontSize: RFValue(13, 580)}}>Katıldın </Text>
                            <MaterialIcons name="check" size={15} color="rgba(84,70,115,1)" />
                          </TouchableOpacity>)}
                          
                          {followed === false && (<TouchableOpacity disabled={true} onPress={()=> handleFollow()} style={{justifyContent:'center', alignItems:'center',marginHorizontal:5,backgroundColor:'rgba(204,204,204,1)', borderRadius:5, width:'23%'}}>
                            <Text style={{color:'white',fontSize: RFValue(13, 580)}}>Takip Et</Text>
                          </TouchableOpacity>)}
                          
                          {followed === true && (<TouchableOpacity disabled={true} onPress={()=> handleFollow()} style={{justifyContent:'center', alignItems:'center',marginHorizontal:5,backgroundColor:'white', borderRadius:5, width:'23%', flexDirection:'row'}}>
                            <Text style={{color:'rgba(84,70,115,1)',fontSize: RFValue(13, 580)}}>Takip</Text>
                            <MaterialIcons name="keyboard-arrow-down" size={22} color="rgba(84,70,115,1)" />
                          </TouchableOpacity>)}

                          <TouchableOpacity style={{justifyContent:'center', alignItems:'center',marginHorizontal:5,backgroundColor:'rgba(84,70,115,1)', borderRadius:5, width:'30%'}}>
                            <Text style={{color:'white',fontSize: RFValue(13, 580)}}>Etkinlikler</Text>
                          </TouchableOpacity>
                          
                          <TouchableOpacity disabled={true} onPress={() => navigation.navigate("CreatePost")} style={{justifyContent:'center', alignItems:'center',marginHorizontal:5,backgroundColor:'rgba(204,204,204,1)', borderRadius:5, width:'10%'}}>
                            <AntDesign name="plus" size={22} color="white" />
                          </TouchableOpacity>
                      </View>) }

                      
                  
                        <View style={{backgroundColor:'white',top:5,shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2, elevation: 5, height:height*0.15, borderRadius:10, width:'96%', alignSelf:'center'}}>
                          <Text numberOfLines={3}  style={{marginHorizontal:'5%',marginTop:'1%',color:'rgba(51,51,51,1)', fontSize:RFValue(13, 580),fontWeight:'300' ,lineHeight:height*0.027, height:height*0.1, width:'85%'}}> Kulüp açıklaması. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in egestas erat, in aliquet metus. Praesent porta quis nunc eu elerisque. Sed id nulla venenatis tortor euismod imperdiet ac sed augue.</Text>
                        </View>
                  
                  </View>
                  
                    {profileObj ? <Post id={profileObj.id} navigation={navigation} /> : null}
      
                  </ScrollView>
            </View>
      )
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