import {StatusBar, View, Text,TouchableOpacity,BackHandler ,ScrollView, Dimensions} from 'react-native'
import React from 'react'
import { useNavigation,useFocusEffect } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import UserApplicationItem from '../components/UserApplicationItem';
import {useState, useEffect, useRef} from 'react';
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

  useFocusEffect(
        React.useCallback(() => {
          let usersJson;
          fetch(url1 +'/api/cmis/communities/'+userID+"/memberApplications", {
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
            <TouchableOpacity onPress={() => navigation.goBack() } style={{flex:1, paddingLeft:5}}>
              <Ionicons name="arrow-back-outline" size={45} color="black"/>
            </TouchableOpacity>
            <Text style={{fontSize:17, flex:1, position:'absolute'}}>Başvurular</Text> 
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