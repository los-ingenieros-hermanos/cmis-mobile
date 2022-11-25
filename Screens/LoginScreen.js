import { StatusBar } from 'expo-status-bar';
import LoginScreenStyles from '../Style/LoginScreenStyles';
import Svg, {Image} from 'react-native-svg';
import { StyleSheet, Text, Button, View, Dimensions, Pressable, TextInput, TouchableNativeFeedback, Alert} from 'react-native';
import React, { Component } from 'react';


const {height, width} = Dimensions.get('window');
export default class LoginScreen extends Component{
  _onLongPressButton() {
    alert('You long-pressed the button!')
  }
    
    render(){   
    return (
      <View style={LoginScreenStyles.container}>
       
          <View style={LoginScreenStyles.upperRectangle}>
                <Text style={LoginScreenStyles.AppName}> cmis </Text>
          </View>
      
          <View style={LoginScreenStyles.StudentAndComm}>
                <View>
                    <Svg height={40} width={45} >
                      <Image 
                        href={require('../assets/Sample_User_Icon.png')} 
                        width={35} 
                        height={35}
                        preserveAspectRatio="xMidYMid slice"
                        />
                    </Svg>
                    <Text style={LoginScreenStyles.StudentText}>Öğrenci</Text>
                </View>
      
                <View >
                    <Svg height={40} width={45} >
                      <Image 
                        href={require('../assets/com_icon.png')} 
                        width={40} 
                        height={35}
                      />
                    </Svg>
                    <Text style={LoginScreenStyles.CommText}>Topluluk/Takım</Text>
                </View>    
          </View>
                
          <View>
              <TextInput placeholder='E-posta' placeholderTextColor='rgba(165,165,165,1)' style={LoginScreenStyles.textinput} />
              <TextInput placeholder='Şifre' placeholderTextColor='rgba(165,165,165,1)' style={LoginScreenStyles.textinput} />
          </View>
  
          <TouchableNativeFeedback onPress={this._onPressButton} underlayColor="white">
          <View style={LoginScreenStyles.forgotPassword}>
            <Text style={LoginScreenStyles.forgotPasswordText}>Şifreni mi Unuttun?</Text>
          </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback onPress={this._onPressButton} underlayColor="white">
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


          <TouchableNativeFeedback onPress={this._onPressButton}>
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
  }