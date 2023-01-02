import { View, Text, TextInput, Dimensions, Button, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const { width, height } = Dimensions.get('window');

export default function CreatePostScreen({navigation}) {
    const [imageUri, setImageUri] = useState(null);
    

    return (
    <View>
        <View style={{backgroundColor:'white', height:30}}>
         
        </View>

        <View style={{backgroundColor:'rgba(84,70,115,1)', height:50, alignItems:'center', flexDirection:'row'}}>
            
            <View style={{width:width*0.10, position:'absolute'}}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{marginLeft:10}}>
                    <Ionicons name="arrow-back-outline" size={45} color="white" />
                </TouchableOpacity>
            </View>
            <View style={{width:width, alignItems:'center'}}>
                <Text style={{color:'white',fontSize: RFValue(15, 580) }}> Gönderi Oluştur </Text>
            </View>
        </View>
        
        <View style={{backgroundColor:'white', height:height*0.08, alignItems:'center', justifyContent:'center'}}>    
            <TextInput placeholder='Gönderi Başlığını Girin' style={{borderTopWidth:0,borderLeftWidth:0,fontSize: RFValue(13,580), 
                                                            borderRightWidth:0,borderWidth:2,borderColor:'rgba(84,70,115,1)', 
                                                            height:30, width:width*0.90}}></TextInput>
        </View>

        <View style={{backgroundColor:'white', height:height*0.08, alignItems:'center', justifyContent:'center'}}> 
            <TextInput multiline numberOfLines={null} placeholder='Gönderi Açıklamasını Girin' style={{borderTopWidth:0,borderLeftWidth:0, 
                                                             borderRightWidth:0,borderWidth:2,
                                                             borderColor:'rgba(84,70,115,1)', 
                                                             width:width*0.90, fontSize: RFValue(13,580), backgroundColor:'white'}}>
            </TextInput>
        </View>
        
        
        
        <View style={{alignItems: 'center', justifyContent: 'center' }}>
      
        <Button onPress={() =>
                        ImagePicker.launchImageLibrary(
                          {
                            mediaType: 'photo',
                            includeBase64: false,
                            maxHeight: 200,
                            maxWidth: 200,
                          },
                          (response) => {
                            console.log(response);
                            this.setState({resourcePath: response});
                          },
                        )
                      }
                title="Select Image"/>
      
        </View>

      
    </View>
  )
}