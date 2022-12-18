import { View, Text } from 'react-native'
import React from 'react'

import TopBar from '../../components/TopBar'

export default function IdeasScreen({navigation}) {
  return (
    <View>
      <TopBar navigation={navigation}/>
      <Text>IdeasScreen</Text>
    </View>
  )
}