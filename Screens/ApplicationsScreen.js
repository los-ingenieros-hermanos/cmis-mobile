import {View, Text,TouchableOpacity,BackHandler ,ScrollView, Dimensions} from 'react-native'
import React from 'react'
import {useFocusEffect } from '@react-navigation/native'
import  Ionicons from 'react-native-vector-icons/Ionicons';
import UserApplicationItem from '../components/UserApplicationItem';
import {useState, useEffect} from 'react';
import { useSelector} from 'react-redux';
import { fetch_get } from '../fetch';

const { width, height } = Dimensions.get('window');
export default function UserListScreen({navigation}) {
  
  const url1 = useSelector((store) => store.url.url);
  const [users, setUsers] = useState(null);
  const userID = useSelector((store) => store.userID.userID);
  const [refreshing, setRefreshing] = useState(0);

  const testRefresh = async (message) => {
    setRefreshing(refreshing + 1);
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
    };
    BackHandler.removeEventListener(
      'hardwareBackPress',
      handleBackButtonClick,
    );

    return () => backHandler.remove();
  }, []);

  const handleBackButtonClick = () => {
    console.log("BACK BUTTON CLICKED");
  };

  const GetApplications = async () => {
      const response = await fetch_get(url1 +'/api/cmis/communities/'+userID+"/memberApplications");
      setUsers(response);
  }

  useFocusEffect(
    React.useCallback(() => {
        GetApplications();
    },[refreshing])
  );

  return (
    <View style={{backgroundColor:'white', flex:1}}>
      
      <View style={{backgroundColor:'rgba(240,242,245,1)',flex:1, alignItems:'center'}}> 
        <View style={{backgroundColor:'white', height:height*0.07,flexDirection:'row', alignItems:'center', justifyContent:'center'}}> 
            <TouchableOpacity onPress={() => navigation.goBack() } style={{flex:1, paddingLeft:5}}>
              <Ionicons name="arrow-back-outline" size={45} color="black"/>
            </TouchableOpacity>
            <Text style={{fontSize:17, flex:1, position:'absolute', color:'black'}}>Başvurular</Text> 
        </View>

        <ScrollView style={{backgroundColor:'rgba(240,242,245,1)'}}>
          {users && users.map((data, index) => { return(
            <View key={index}>
              <UserApplicationItem data={data} testRefresh={testRefresh}/>
            </View>
          );})} 
        </ScrollView>

      </View>

    </View>
  )
}