import * as React from 'react';
import { Text, View } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import SearchItem from '../../components/SearchItem';
import SearchBar from '../../components/SearchBar';

export default function SearchScreen({route}) {
  const { handleSearch } = route.params;
  return (
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <SearchBar handleSearch={handleSearch}/>
        

        <ScrollView>
          <SearchItem name={'name1'}/>
          <SearchItem name={'name2'}/>
          <SearchItem name={'name3'}/>
          <SearchItem name={'name4'}/>
        </ScrollView>

    </View>
   
  );
}

