import * as React from 'react';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import TopBar from '../../components/TopBar';
import ProjectIdeas from '../../components/ProjectIdeas';


export default function HomeScreen({navigation}) {
   
  return (
    
      <SafeAreaView style={styles.container}>
          <TopBar navigation={navigation}/>
          <ScrollView style={styles.scrollView}>  
            <ProjectIdeas id="-1"/>
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