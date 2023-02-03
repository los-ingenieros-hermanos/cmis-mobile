import { View, Text, Touchable, TouchableOpacity, ScrollView,Dimensions} from 'react-native'
import React,{ useEffect } from 'react'
import TopBar from '../../components/TopBar'
import  Ionicons from 'react-native-vector-icons/Ionicons';
import CommunityItem from '../../components/CommunityItem';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetch_get} from '../../fetch';

const { width, height } = Dimensions.get('window');


export default function CommunitiesListScreen({navigation}) {
  
    const url1 = useSelector((store) => store.url.url);
    const [communities, setCommunities] = useState(null);

  const getCommunities = async () => {
    const responseJson = await fetch_get(url1 +'/api/cmis/communities');
    setCommunities(responseJson);
  }

  useEffect(() => {
    getCommunities();
  }, []);

  return (
    <View style={{backgroundColor:'white', flex:1}}>
      <TopBar navigation={navigation}/>
      
      <View style={{backgroundColor:'rgba(240,242,245,1)',flex:1, alignItems:'center'}}> 
        <View style={{backgroundColor:'white', height:height*0.07,flexDirection:'row', alignItems:'center', justifyContent:'center'}}> 
            <TouchableOpacity onPress={() => navigation.goBack() } style={{flex:1, paddingLeft:5}}>
              <Ionicons name="arrow-back-outline" size={45} color="black"/>
            </TouchableOpacity>
            <Text style={{color:'black',fontSize:17, flex:1, position:'absolute'}}>Topluluklar/Takımlar</Text> 
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