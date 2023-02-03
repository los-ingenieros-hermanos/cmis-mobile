import { View, Text,TouchableOpacity, ScrollView,Dimensions} from 'react-native'
import React from 'react'
import  Ionicons from 'react-native-vector-icons/Ionicons';
import { useState} from 'react';
import BookmarkedItem from '../../components/BookmarkedItem';
import { useSelector} from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import { fetch_get } from '../../fetch';

const { width, height } = Dimensions.get('window');

export default function BookmarkedListScreen({navigation}) {
  
    const url1 = useSelector((store) => store.url.url);
    const [bookmarkeds, setBookmarkeds] = useState(null);
    const userID = useSelector((store) => store.userID.userID);
    const [refreshing, setRefreshing] = useState(false);

    useFocusEffect(
      React.useCallback(() => {
        getBookmarkeds();
      }, [refreshing])
    );
    
    const getBookmarkeds = async () => {
      const response = await fetch_get(url1 +'/api/cmis/students/'+userID+"/bookmarkedPosts")
      setBookmarkeds(response);
    }

    const testRefresh = async (message) => {
      setRefreshing(true);
      setRefreshing(false);
    }  

    const handleBackButtonClick = async () => {
      setRefreshing(true);
      setRefreshing(false);
      navigation.goBack();
    }


  return (
    <View style={{backgroundColor:'white', flex:1}}>      
      <View style={{backgroundColor:'rgba(240,242,245,1)',flex:1, alignItems:'center'}}> 
        <View style={{backgroundColor:'white', height:height*0.07,flexDirection:'row', alignItems:'center', justifyContent:'center'}}> 
            <TouchableOpacity onPress={() => handleBackButtonClick() } style={{flex:1, paddingLeft:5}}>
              <Ionicons name="arrow-back-outline" size={45} color="black"/>
            </TouchableOpacity>
            <Text style={{fontSize:17, flex:1, position:'absolute', color:'black'}}>Kaydedilenler</Text> 
        </View>

        <ScrollView  style={{backgroundColor:'rgba(240,242,245,1)'}}>
        {bookmarkeds && bookmarkeds.map((data, index) => { return(
          <View key={index}>
            <BookmarkedItem data={data} nav={navigation} tr={testRefresh}/>
          </View>
        );})} 
        </ScrollView>

      </View>

    </View>
  )
}