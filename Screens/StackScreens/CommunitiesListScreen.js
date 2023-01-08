import { View, Text, Touchable, TouchableOpacity, ScrollView,Dimensions} from 'react-native'
import React,{ useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import TopBar from '../../components/TopBar'
import { Ionicons } from '@expo/vector-icons';
import CommunityItem from '../../components/CommunityItem';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const { width, height } = Dimensions.get('window');


export default function CommunitiesListScreen({navigation}) {
  
    const defaultPP = useSelector((store) => store.userID.userProfileImage);
    const url1 = useSelector((store) => store.url.url);
    const [communities, setCommunities] = useState(null);

  useEffect(() => {
    let communitiesJson;
    fetch(url1 +'/api/cmis/communities', {
      method: 'GET'
      })
        .then((response) => response.json())
        .then((responseJson) => {
          communitiesJson = JSON.stringify(responseJson);
          setCommunities(JSON.parse(communitiesJson));
      })
      .catch((error) => {
        console.error(error);
      });

  }, []);

  return (
    <View style={{backgroundColor:'white', flex:1}}>
      <TopBar navigation={navigation}/>
      
      <View style={{backgroundColor:'rgba(240,242,245,1)',flex:1, alignItems:'center'}}> 
        <View style={{backgroundColor:'white', height:height*0.07,flexDirection:'row', alignItems:'center', justifyContent:'center'}}> 
            <TouchableOpacity onPress={() => navigation.reset({ index: 0, routes: [{ name: 'HomePage' }],}) } style={{flex:1, paddingLeft:5}}>
              <Ionicons name="arrow-back-outline" size={45} color="black"/>
            </TouchableOpacity>
            <Text style={{fontSize:17, flex:1, position:'absolute'}}>Takımlar</Text> 
        </View>

        <ScrollView  style={{backgroundColor:'rgba(240,242,245,1)'}}>
        {communities && communities.map((data, index) => { return(
          <View key={index}>
            <CommunityItem data={data} nav={navigation}/>
          </View>
        );})} 
        </ScrollView>

      </View>

    </View>
  )
}