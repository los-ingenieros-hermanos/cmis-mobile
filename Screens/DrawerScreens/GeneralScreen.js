import { View, Text, Button } from 'react-native'
import React from 'react'
import { useEffect } from 'react';
import { BackHandler } from 'react-native';

export default function GeneralScreen({navigation}) {
  
  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View>
      <Text>GeneralScreen</Text>
      <Button
            title="Go to Back"
            onPress={() => navigation.goBack()}
          />
    </View>
  )
}