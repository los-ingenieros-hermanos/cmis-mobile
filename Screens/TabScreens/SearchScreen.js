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
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
        </ScrollView>

    </View>
   
  );
}

