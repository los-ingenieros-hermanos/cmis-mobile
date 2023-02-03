import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useSelector } from 'react-redux';
import {useFocusEffect } from '@react-navigation/native'
import PostItem from "./PostItem";
import {fetch_get} from '../fetch';

const Post = ({id}) => {
  
  const url1 = useSelector((store) => store.url.url);
  const [userObj, setUserObj] = useState(null);
  
  const fetchData1 = async () => {
    const responseJson = await fetch_get(url1 +'/api/cmis/posts');
    setUserObj(responseJson);
  }
  
  const fetchData2 = async () => {
    const responseJson = await fetch_get(url1 +'/api/cmis/communities/'+id+'/posts');
    setUserObj(responseJson);
  }

  useFocusEffect(
    React.useCallback(() => {
    
      if(id =="-1") 
        fetchData1();
      else 
        fetchData2();
      
    }, [])
  );

  return (
    <View style={{ paddingBottom:65}}>
        {userObj && userObj.map((data, index) => {
          return(
            <View key={index} style={{marginBottom:5, marginTop:5}}>
              <PostItem postid={data.id}/>
            </View>
            
          );})}

    </View>
  );
};

export default Post;
