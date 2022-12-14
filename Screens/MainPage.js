import * as React from 'react';
import {Dimensions, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import DrawerNavigator from '../components/DrawerNavigator';

//get height of device
function getHeight() {
  let height = Dimensions.get("window").height
  return height
}


export default function MainPage({navigation}) {
 
  return (
    <NavigationContainer independent={true}>
        <View style={{flex:1}}>

          <DrawerNavigator/>

        </View>
    </NavigationContainer>
  );
}

function getWidth() {
  let width = Dimensions.get("window").width
  return width
}