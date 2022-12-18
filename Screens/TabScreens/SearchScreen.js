import * as React from 'react';
import { Text, View } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import SearchItem from '../../components/SearchItem';
import SearchBar from '../../components/SearchBar';

export default function SearchScreen() {

  return (
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <SearchBar />
        <ScrollView>
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
        </ScrollView>

    </View>
   
  );
}

