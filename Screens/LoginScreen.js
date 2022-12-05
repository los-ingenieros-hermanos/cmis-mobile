import { StatusBar } from 'expo-status-bar';
import LoginScreenStyles from '../Style/LoginScreenStyles';
import { StyleSheet, Text, Button, View, Dimensions, Pressable, TextInput, TouchableNativeFeedback, Alert, ImageBackground, TouchableHighlight, TouchableOpacity} from 'react-native';
import React, { Component, useState, useEffect } from 'react';
import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import axios from 'axios';

import MainPage from './MainPage';

_onForgotPasswordButton =() => {
  alert('You pressed forgot my password button')
} 

const baseUrl = 'localhost:8070';





export default function LoginScreen({ navigation }){
    const [studentSelection, setstudentSelection] = useState("rgba(84,70,115,1)");
    const [communitySelection, setcommunitySelection] = useState('transparent');
    const [studentIcon, setStudentIcon] = useState(require("../assets/icons/student_selected.png"));
    const [communityIcon, setCommunityIcon] = useState(require("../assets/icons/community_notselected.png"));
    
    const [StudentTextColor, setStudentTextColor] = useState(LoginScreenStyles.setColorGray);
    const [CommunityTextColor, setCommunityTextColor] = useState(LoginScreenStyles.setColorGray);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    _onStudentButton= () => {
      setStudentIcon(require("../assets/icons/student_selected.png"));
      setCommunityIcon(require("../assets/icons/community_notselected.png"));
      setcommunitySelection("transparent");
      setstudentSelection("rgba(84,70,115,1)");
      setStudentTextColor(LoginScreenStyles.setColorPurple);
      setCommunityTextColor(LoginScreenStyles.setColorGray);
    }

    _onCommunityButton= () => {
      setCommunityIcon(require("../assets/icons/community_selected.png"));
      setStudentIcon(require("../assets/icons/student_notselected.png"));
      setstudentSelection("transparent");
      setcommunitySelection("rgba(84,70,115,1)");
      setCommunityTextColor(LoginScreenStyles.setColorPurple);
      setStudentTextColor(LoginScreenStyles.setColorGray);
    }


    _onLoginButton= async () => {
      
      const res = await fetch('http://192.168.1.35:8070/api/auth/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({"email": email,"password": password,}),
        });
        if (res.ok) {
          alert('Giriş Başarılı');
          const data = await res.json();
          navigation.push('Main')
        }
        else{
          alert('Giriş Yapılamadı');
        }
      
    }  

      return (
      <View style={LoginScreenStyles.container}>
       
          <View style={LoginScreenStyles.upperRectangle}>
                <Text style={LoginScreenStyles.AppName}> cmis </Text>
          </View>

        
          <View style={LoginScreenStyles.StudentAndComm}>
                <TouchableHighlight style={LoginScreenStyles.StudentButton} activeOpacity={1} underlayColor={'white'} onPress={()=>_onStudentButton()}>
                  <View>
                        <Image 
                          style = {LoginScreenStyles.StudentImageStyle}
                          source ={studentIcon} 
                          height={20}
                          width={20} 
                          />
                          <Text style={[LoginScreenStyles.StudentText, StudentTextColor]} > Öğrenci </Text>    
                          <View style={LoginScreenStyles.studentSelectionLine} backgroundColor={studentSelection} ></View>  
                  </View>
                  
                </TouchableHighlight>
                
                 
                <View style={LoginScreenStyles.verticleLine}></View>

                <TouchableHighlight style={LoginScreenStyles.CommunityButton} activeOpacity={1} underlayColor={'white'} onPress={()=>_onCommunityButton()}>
                <View >
                      <Image 
                        style = {LoginScreenStyles.CommunityImageStyle}
                        source={communityIcon} 
                        height={60}
                        width={100} 
                      />
                    <Text style={[LoginScreenStyles.CommText, CommunityTextColor]} >Topluluk/Takım</Text>
                    <View style={LoginScreenStyles.communitySelectionLine} backgroundColor={communitySelection} ></View>
                </View>  
                </TouchableHighlight>
                 
          </View>
          
          <View style={{}} >
                
                <View style={{flexDirection:'row'}}>
                
                    <View style={LoginScreenStyles.empty1}></View>
                    <Image source={require("../assets/icons/at-sign.png")} 
                      height={20}
                      width={20} 
                      style={LoginScreenStyles.atsignLogin}  
                      />
                    <TextInput 
                               onChangeText={newText => setEmail(newText)}
                               defaultValue={email} 
                               placeholder='E-posta' 
                               placeholderTextColor='rgba(165,165,165,1)' 
                               cursorColor={'rgba(84,70,115,1)'}  
                               style={LoginScreenStyles.textinput} 
                              />
                    <View style={LoginScreenStyles.empty1}></View>
                </View>

                <View style={{flexDirection:'row'}}>
                <Image source={require("../assets/icons/lock.png")} 
                    height={20}
                    width={20} 
                    style={LoginScreenStyles.atsignLogin}  
                    />
                    <View style={LoginScreenStyles.empty1}></View>
                    <TextInput 
                              onChangeText={newText => setPassword(newText)}
                              defaultValue={password} 
                              secureTextEntry={true} 
                              placeholder='Şifre' 
                              placeholderTextColor='rgba(165,165,165,1)' 
                              cursorColor={'rgba(84,70,115,1)'} 
                              style={LoginScreenStyles.textinput} />
                    <View style={LoginScreenStyles.empty1}></View>
                </View>

                
          </View>

          <View> 
          <TouchableNativeFeedback onPress={()=>_onForgotPasswordButton()} underlayColor="white">
                  <View style={LoginScreenStyles.forgotPassword}>
                    <Text style={LoginScreenStyles.forgotPasswordText}>Şifreni mi Unuttun?</Text>
                  </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback onPress={()=>_onLoginButton()} underlayColor="white">
            <View style={LoginScreenStyles.LoginButton}>
              <Text style={LoginScreenStyles.LoginButtonText}>Giriş Yap</Text>
            </View>
          </TouchableNativeFeedback>

          <View style={{flexDirection: 'row', alignSelf: 'center', top: '12%', width:'90%', alignItems:'center' }}>
            <View style={{flex: 1, height: 1, backgroundColor: 'rgba(152,152,152,1)'}} />
            <View>
              <Text style={{width: 50, textAlign: 'center', color: 'rgba(152,152,152,1)'}}>veya</Text>
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: 'rgba(152,152,152,1)'}} />
          </View>

          <TouchableNativeFeedback onPress={()=>navigation.push('Register')}>
            <View style={LoginScreenStyles.RegisterButton}>
            <Text style={LoginScreenStyles.LoginOuterText}>
              Yeni
              <Text style={LoginScreenStyles.LoginInnerText}> cmis </Text>
              Hesabı Oluştur
            </Text>
            </View>
          </TouchableNativeFeedback>

          </View>        
      </View>
      
                      
    );
  }
