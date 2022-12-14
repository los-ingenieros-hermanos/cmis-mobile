import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Post from '../components/Post';
import TopBar from '../components/TopBar';

export default function HomePage() {
  return (
    <SafeAreaView style={styles.container}>
      <TopBar/>
      <ScrollView style={styles.scrollView}>
        
        
        <Post />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "rgba(217,217,217,1)",
  },
  text: {
    fontSize: 42,
  },
});