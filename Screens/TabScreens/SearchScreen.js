import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import SearchItem from '../../components/SearchItem';
import SearchBar from '../../components/SearchBar';

export default function SearchScreen({route,navigation}) {
  const { handleSearch } = route.params;
  
  const handleButtonPress = () => {
    navigation.navigate("SearchedProfile");
  }
  
  return (
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <SearchBar handleSearch={handleSearch}/>
        
        <ScrollView>
          <SearchItem handleButtonPress={handleButtonPress} name={'name1'}/>
          <SearchItem handleButtonPress={handleButtonPress} name={'name2'}/>
          <SearchItem handleButtonPress={handleButtonPress} name={'name3'}/>
          <SearchItem handleButtonPress={handleButtonPress} name={'name4'}/>
        </ScrollView>

    </View>
   
  );
}

