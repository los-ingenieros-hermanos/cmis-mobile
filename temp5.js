import {Dimensions, View, Text, TouchableOpacity,Modal, TextInput } from 'react-native'
import React, {useState} from 'react'
import {StatusBar} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function SettingScreen({navigation}) {
  
  const [modalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  
  
  return (
    <View>
      
      <View style={{backgroundColor:'white', height:StatusBar.currentHeight}}> 
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      </View>

      <View style={{backgroundColor:'white', height:height*0.06, alignItems:'center', flexDirection:'row'}}>
            
            <View style={{width:width*0.10, position:'absolute'}}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{marginLeft:10}}>
                    <Ionicons name="arrow-back-outline" size={45} color="rgba(84,70,115,1)" />
                </TouchableOpacity>
            </View>
            <View style={{width:width, alignItems:'center'}}>
                <Text style={{color:'rgba(84,70,115,1)',fontSize: RFValue(15, 580) }}> Ayarlar </Text>
            </View>
      </View>

      <View style={{height:height, backgroundColor:'white'}}>
          <View style={{width:width*0.95,height:height*0.05, backgroundColor:'white', justifyContent:'center', marginLeft:width*0.025, marginVertical:5, borderBottomWidth:1, borderBottomColor:'rgba(84,70,115,1)'}}>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={{flexDirection:'row'}}>
            <MaterialIcons name="lock" size={27} color="rgba(84,70,115,1)" />
              <Text style={{color:'rgba(84,70,115,1)', fontSize: RFValue(13,580)}}>Şifre Değiştir</Text>
            </TouchableOpacity>
          </View>
          
          <View>
          <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={{marginTop: 22}}>
          <View>
            <TextInput
              placeholder="Enter some text"
              onChangeText={text => setInputValue(text)}
              onSubmitEditing={() => {
                // Do something with the input value here
                console.log(inputValue);
              }}
            />
            <Button
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
              title="Close"
            />
          </View>
        </View>
      </Modal>
          </View>
          <View style={{width:width*0.95,height:height*0.05, backgroundColor:'white', justifyContent:'center', marginLeft:width*0.025, marginVertical:5, borderBottomWidth:1, borderBottomColor:'rgba(84,70,115,1)'}}>
            <TouchableOpacity style={{flexDirection:'row'}}>
            <Ionicons name="person-circle" size={27} color="rgba(84,70,115,1)"/>
              <Text style={{color:'rgba(84,70,115,1)', fontSize: RFValue(13,580)}}>Profil Fotoğrafını Değiştir</Text>
            </TouchableOpacity>
          </View>

          <View style={{width:width*0.95,height:height*0.05, backgroundColor:'white', justifyContent:'center', marginLeft:width*0.025, marginVertical:5, borderBottomWidth:1, borderBottomColor:'rgba(84,70,115,1)'}}>
            <TouchableOpacity style={{flexDirection:'row'}}>
            <MaterialIcons name="image" size={27} color="rgba(84,70,115,1)" />
              <Text style={{color:'rgba(84,70,115,1)', fontSize: RFValue(13,580)}}>Kapak Fotoğrafını Değiştir</Text>
            </TouchableOpacity>
          </View>

          <View style={{width:width*0.95,height:height*0.05, backgroundColor:'white', justifyContent:'center', marginLeft:width*0.025, marginVertical:5, borderBottomWidth:1, borderBottomColor:'rgba(84,70,115,1)'}}>
            <TouchableOpacity style={{flexDirection:'row'}}>
            <MaterialIcons name="info" size={27} color="rgba(84,70,115,1)" />
              <Text style={{color:'rgba(84,70,115,1)', fontSize: RFValue(13,580)}}>Profil Açıklamasını Değiştir</Text>
            </TouchableOpacity>
          </View>

          <View style={{width:width*0.95,height:height*0.05, backgroundColor:'white', justifyContent:'center', marginLeft:width*0.025, marginVertical:5}}>
            <TouchableOpacity style={{flexDirection:'row'}}>
            <MaterialIcons name="logout" size={27} color='rgba(187,58,58,1)' />
              <Text style={{color:'rgba(187,58,58,1)', fontSize: RFValue(13,580)}}>Çıkış Yap</Text>
            </TouchableOpacity>
          </View>
      </View>

      
    </View>
  )
}