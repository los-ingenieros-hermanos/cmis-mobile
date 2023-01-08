import { View, Text, Touchable, TouchableOpacity, ScrollView,Dimensions, StatusBar} from 'react-native'
import React from 'react'
import { useNavigation,useFocusEffect } from '@react-navigation/native'
import TopBar from '../components/TopBar'
import { Ionicons } from '@expo/vector-icons';
import UserSearchItem from '../components/UserSearchItem';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const statusBarHeight = StatusBar.currentHeight;
const { width, height } = Dimensions.get('window');

export default function UserListScreen({navigation}) {
    const url1 = useSelector((store) => store.url.url);
    const [users, setUsers] = useState(null);
    const userID = useSelector((store) => store.userID.userID);
    const [refreshing, setRefreshing] = useState(0);
  
    const testRefresh = async (message) => {
      setRefreshing(refreshing + 1);
    }

  useFocusEffect(
    React.useCallback(() => {
    let usersJson;
    fetch(url1 +'/api/cmis/communities/'+userID+"/members", {
    method: 'GET'
    })
    .then((response) => response.json())
    .then((responseJson) => {
      usersJson = JSON.stringify(responseJson);
      setUsers(JSON.parse(usersJson));
  })
  .catch((error) => {
    console.error(error);
  });
  }, [refreshing])
  );
  

  return (
    <View style={{backgroundColor:'white', flex:1}}>   
      <View style={{backgroundColor:'rgba(240,242,245,1)',flex:1, alignItems:'center', top:statusBarHeight}}> 
        <View style={{backgroundColor:'white', height:height*0.07,flexDirection:'row', alignItems:'center', justifyContent:'center'}}> 
            <TouchableOpacity onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Profile' }],}) } style={{flex:1, paddingLeft:5}}>
              <Ionicons name="arrow-back-outline" size={45} color="black"/>
            </TouchableOpacity>
            <Text style={{fontSize:17, flex:1, position:'absolute'}}>Üyeler</Text> 
        </View>

        <ScrollView  style={{backgroundColor:'rgba(240,242,245,1)'}}>
        {users && users.map((data, index) => { return(
          <View key={index}>
            <UserSearchItem data={data} testrefresh={testRefresh}/>
          </View>
        );})} 
        </ScrollView>

      </View>

    </View>
  )
}