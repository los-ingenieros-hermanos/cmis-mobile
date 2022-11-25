import { StatusBar } from 'expo-status-bar';
import LoginScreenStyles from '../Style/LoginScreenStyles';
import { StyleSheet, Text, Button, View, Dimensions, Pressable, TextInput, TouchableNativeFeedback, Alert, ImageBackground, TouchableHighlight} from 'react-native';
import React, { Component, useState, useEffect } from 'react';
import { Image } from 'react-native'
/*
const {height, width} = Dimensions.get('window');
const [clickedStudent, setClickedStudent] = useState(false);
const [clickedCommunity, setClickedCommunity] = useState(false);
*/




_onForgotPasswordButton =() => {
  alert('You pressed forgot my password button')
} 




export default function LoginScreen(){
    const [studentSelection, setstudentSelection] = useState('transparent');
    const [communitySelection, setcommunitySelection] = useState('transparent');
    
    _onCommunityButton= () => {
      setstudentSelection("transparent")
      setcommunitySelection('rgba(84,70,115,1)')
    }  
    
    _onStudentButton= () => {
      setcommunitySelection("transparent")
      setstudentSelection('rgba(84,70,115,1)')
    }  

    _onLoginButton= () => {
      alert('LOGIN BUTTON')
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
                          source ={require("../assets/icons/student_selected.png")} 
                          height={30}
                          width={30} 
                          />
                          <Text style={LoginScreenStyles.StudentText}> Öğrenci </Text>      
                  </View>
                </TouchableHighlight>
                
                 
                <View style={LoginScreenStyles.verticleLine}></View>

                <TouchableHighlight style={LoginScreenStyles.CommunityButton} activeOpacity={1} underlayColor={'white'} onPress={()=>_onCommunityButton()}>
                <View >
                    
                      <Image 
                        style = {LoginScreenStyles.CommunityImageStyle}
                        source={require("../assets/icons/community_selected.png")} 
                        height={60}
                        width={100} 
                      />
                    <Text style={LoginScreenStyles.CommText}>Topluluk/Takım</Text>
                </View>  
                </TouchableHighlight>
                 
          </View>

          <View style={LoginScreenStyles.studentSelectionLine} backgroundColor={studentSelection} ></View>
          <View style={LoginScreenStyles.communitySelectionLine} backgroundColor={communitySelection} ></View>
        
          <View>
              <TextInput placeholder='E-posta' placeholderTextColor='rgba(165,165,165,1)' cursorColor={'rgba(84,70,115,1)'}  style={LoginScreenStyles.textinput} />
              <TextInput placeholder='Şifre' placeholderTextColor='rgba(165,165,165,1)' cursorColor={'rgba(84,70,115,1)'} style={LoginScreenStyles.textinput} />
          </View>
  
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

          <View style={{flexDirection: 'row', alignItems: 'center', top: 50, width:370, left:20, }}>
            <View style={{flex: 1, height: 1, backgroundColor: 'rgba(152,152,152,1)'}} />
            <View>
              <Text style={{width: 50, textAlign: 'center', color: 'rgba(152,152,152,1)'}}>veya</Text>
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: 'rgba(152,152,152,1)'}} />
          </View>

          <TouchableNativeFeedback onPress={()=>Alert.alert('Cannot press this one')}>
            <View style={LoginScreenStyles.RegisterButton}>
            <Text style={LoginScreenStyles.OuterText}>
              Yeni
              <Text style={LoginScreenStyles.InnerText}> cmis </Text>
              Hesabı Oluştur
            </Text>
            </View>
          </TouchableNativeFeedback>

          
      </View>
      
    );
  }
