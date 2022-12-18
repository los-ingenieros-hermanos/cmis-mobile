import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Post from '../../components/Post';
import TopBar from '../../components/TopBar';

export default function HomePage({navigation}) {
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