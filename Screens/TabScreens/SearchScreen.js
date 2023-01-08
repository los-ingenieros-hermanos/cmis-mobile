import * as React from 'react';
import { Text, TouchableOpacity, View, TextInput, Dimensions, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProfilePicture from 'react-native-profile-picture';
import { useNavigation } from '@react-navigation/native';
import {useFocusEffect } from '@react-navigation/native'
import {setDesiredProfileID} from '../../redux/actions/desiredProfileAction';

const {width, height} = Dimensions.get('window');

export default function SearchScreen({route}) {
  const url1 = useSelector((store) => store.url.url);
  const navigation = useNavigation();
  //const { handleSearch,navigation } = route.params;
  const [search, setSearch] = React.useState("");
  const [communities, setCommunities] = React.useState(null);
  const dispatch = useDispatch();
  const ownID = useSelector((store) => store.userID.userID);
  const defaultPP = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAFElEQVQYlWNkuLiJAQkwMaACUvkAdxgBjXva0XwAAAAASUVORK5CYII=";
  const defaultBanner = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAKCAIAAAD3rtNaAAAAFElEQVQYlWPcPuMvAwZgwhQagqIA/fUCYMd5vI0AAAAASUVORK5CYII=";
  const [refreshing, setRefreshing] = React.useState(0);

  const handleButtonPress = (id) => {
    
    dispatch(setDesiredProfileID(id));
    if(id == ownID){
      navigation.navigate("Profile");
    }
    else{
      navigation.navigate("SearchedProfile");
    }
    
    //n
    
    // navigation.navigate('Profile', { screen: 'ProfileStackNavigator' });
    // navigation.navigate('Profile', {
    //   screen: 'Profil',
    //   params: {
    //     screen: 'UserList',
    //   },
    // });
    //console.log(navObj);
  }

  const handleBackArrow = () => {
    navigation.reset({ index: 0, routes: [{ name: 'HomePage' }],})

  }

  // get searchText and pass it to fetch method
  // fetch method will return a list of communities
  // map the list and return SearchItem components

  useEffect(() => {
    
      fetch(url1 +'/api/cmis/communities/search?search='+search, {
        method: 'GET'
        })
          .then((response) => response.json())
          .then((responseJson) => {
            let userStr = JSON.stringify(responseJson);
            setCommunities(JSON.parse(userStr));
            console.log(responseJson[0]);
        })
        .catch((error) => {
          console.error(error);
        });
  }, [search]);

  useFocusEffect(
    React.useCallback(() => {
      setRefreshing(refreshing + 1);
  }, [])
  );
  
  return (
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{flexDirection:'column', width:'100%'}}>

          <View style={{flexDirection:'row', backgroundColor:'white', paddingBottom:10, marginTop:25}}>

              <View style={{ marginLeft:10, borderRadius:10, marginTop:10, flex:1}}>
                  <TouchableOpacity style={{alignSelf:'center'}} onPress={handleBackArrow} >
                      <AntDesign name="arrowleft" size={30} color="black" />
                  </TouchableOpacity>
              </View>
              
              <View style={{flexDirection:'row',backgroundColor:'"rgba(217,217,217,1)"', borderRadius:5, marginTop:10, marginRight:10,flex:10}}>
                  <EvilIcons name="search" size={25} color="black" style={{alignSelf:'center', paddingLeft:5}}/>
                  <TextInput onChangeText={text => setSearch(text)} placeholder= "cmis'te ara" placeholderTextColor={'rgba(167,167,167,1)'} style={{paddingLeft:0, width:'100%'}}></TextInput>
              </View>
              
          </View>

          <View style={{ paddingHorizontal:10, flexDirection:'row', justifyContent:'space-between'}}> 
            <Text style={{fontWeight:'bold'}}> Sonuçlar </Text>
            <TouchableOpacity>
              <Text style={{fontWeight:'bold'}}> </Text>
            </TouchableOpacity>
          </View>

        </View>
          
        <ScrollView>
            {communities && communities.map((data,index) => {
              return (
                    <View key={index}>
                    <TouchableOpacity onPress={() => handleButtonPress(data.id)}> 
                        <View style={{backgroundColor:'white', height:50, width:(width*0.95), flexDirection:'row', 
                                     marginVertical:5, paddingLeft:10, paddingRight:10,alignItems:'center',borderRadius:6, alignSelf:'flex-start' }}>

                    <View style={{ flexDirection:'row', width:'95%', alignItems:'center'}}>
                        <Image style={{width:35, height:35,borderRadius:1000}} source={{uri : `${data.image ? data.image : defaultPP}`}} />
                        <Text style={{paddingLeft:10, fontSize:15}}>{data.name}</Text>
                    </View>
                    
                          </View>
                  </TouchableOpacity>
                  </View>
              )})}
        </ScrollView>

    </View>
   
  );
}

