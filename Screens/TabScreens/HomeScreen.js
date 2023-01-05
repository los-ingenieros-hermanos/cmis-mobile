import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import Post from '../../components/Post';
import TopBar from '../../components/TopBar';
import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';


export default function HomeScreen({navigation}) {
   
  const name1 = useSelector((store) => store.tabName.tabName);
  const IDTest = useSelector((store) => store.userID.userID);

  return (
    
      <SafeAreaView style={styles.container}>
          <StatusBar barStyle="dark-content" backgroundColor="white"/>
          <TopBar navigation={navigation}/>
          <ScrollView style={styles.scrollView}>  
            <Post />
          </ScrollView>
          
      </SafeAreaView>
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: "rgba(217,217,217,1)",
  },
  text: {
    fontSize: 42,
  },
});