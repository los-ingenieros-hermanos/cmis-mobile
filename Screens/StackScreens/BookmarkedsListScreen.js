import { View, Text, Touchable, TouchableOpacity, ScrollView,Dimensions} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import BookmarkedItem from '../../components/BookmarkedItem';
import { useSelector, useDispatch } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import { StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');
const statusBarHeight = StatusBar.currentHeight;

export default function BookmarkedListScreen({navigation}) {
  
    const url1 = useSelector((store) => store.url.url);
    const [bookmarkeds, setBookmarkeds] = useState(null);
    const userID = useSelector((store) => store.userID.userID);
    const [refreshing, setRefreshing] = useState(false);
  
    const testRefresh = async (message) => {
      setRefreshing(true);
      setRefreshing(false);
    }

    useFocusEffect(
      React.useCallback(() => {
      let bookmarkedsJson;
      fetch(url1 +'/api/cmis/students/'+userID+"/bookmarkedPosts", {
      method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
        bookmarkedsJson = JSON.stringify(responseJson);
        setBookmarkeds(JSON.parse(bookmarkedsJson));
    })
    .catch((error) => {
      console.error(error);
    });
    }, [refreshing])
    );

    

  const handleBackButtonClick = async () => {
    setRefreshing(true);
    setRefreshing(false);
    navigation.goBack();
  }


  return (
    <View style={{backgroundColor:'white', flex:1}}>      
      <View style={{backgroundColor:'rgba(240,242,245,1)',flex:1, alignItems:'center', top:statusBarHeight }}> 
        <View style={{backgroundColor:'white', height:height*0.07,flexDirection:'row', alignItems:'center', justifyContent:'center'}}> 
            <TouchableOpacity onPress={() => handleBackButtonClick() } style={{flex:1, paddingLeft:5}}>
              <Ionicons name="arrow-back-outline" size={45} color="black"/>
            </TouchableOpacity>
            <Text style={{fontSize:17, flex:1, position:'absolute'}}>Kaydedilenler</Text> 
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