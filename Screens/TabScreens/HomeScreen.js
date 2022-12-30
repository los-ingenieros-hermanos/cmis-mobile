import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import Post from '../../components/Post';
import TopBar from '../../components/TopBar';
import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { changeTab } from '../../redux/actions/currentTabAction';


export default function HomePage({navigation}) {
   
  const name1 = useSelector((store) => store.tabName.tabName);
 

  const test = () => {
    console.log("TESTESTEST : " + name1);
  };

  // Call the handleChange function inside the componentDidMount lifecycle method
  useEffect(() => {
    test();
  }, [name1]);
  
  return (
    
      <SafeAreaView style={styles.container}>
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