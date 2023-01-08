import { StatusBar } from 'expo-status-bar';
import RegisterScreenStyles from '../Style/RegisterScreenStyles';
import {StyleSheet, Text, Button, View, Dimensions, Pressable, TextInput, TouchableNativeFeedback, Alert, ImageBackground, TouchableHighlight, ScrollView} from 'react-native';
import React, { Component, useState, useEffect } from 'react';
import { Image } from 'react-native'
import { useFonts } from 'expo-font';

const {width, height} = Dimensions.get('window');

_onForgotPasswordButton = () => {
  alert("You pressed forgot my password button");
};


export default function RegisterScreen({ navigation }){
    //style states
    const [studentSelection, setstudentSelection] = useState("rgba(84,70,115,1)");
    const [communitySelection, setcommunitySelection] = useState('transparent');
    const [studentIcon, setStudentIcon] = useState(require("../assets/icons/student_selected.png"));
    const [communityIcon, setCommunityIcon] = useState(require("../assets/icons/community_notselected.png"));
    const [StudentTextColor, setStudentTextColor] = useState(RegisterScreenStyles.setColorGray);
    const [CommunityTextColor, setCommunityTextColor] = useState(RegisterScreenStyles.setColorGray);
    const [placeholder1Text, setPlaceholder1Text] = useState('Adı');
    const [placeholder2Text, setPlaceholder2Text] = useState('Soyadı');
    const [disableView, setDisableView] = useState({flexDirection:'row'});
    
    //user variable states
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [role,setRole] = useState('student');

    const [fontsLoaded] = useFonts({
      'Aldrich-Regular': require('../assets/fonts/Aldrich-Regular.ttf'),
    });
   
    if (!fontsLoaded) {
      return null;
    };

    _onStudentButton= () => {
      setStudentIcon(require("../assets/icons/student_selected.png"));
      setCommunityIcon(require("../assets/icons/community_notselected.png"));
      setcommunitySelection("transparent");
      setstudentSelection("rgba(84,70,115,1)");
      setStudentTextColor(RegisterScreenStyles.setColorPurple);
      setCommunityTextColor(RegisterScreenStyles.setColorGray);
      setPlaceholder1Text('Adı');
      setPlaceholder2Text('Soyadı');
      setDisableView({flexDirection:'row'});
      setRole("student");
    }

    _onCommunityButton= () => {
      setCommunityIcon(require("../assets/icons/community_selected.png"));
      setStudentIcon(require("../assets/icons/student_notselected.png"));
      setstudentSelection("transparent");
      setcommunitySelection("rgba(84,70,115,1)");
      setCommunityTextColor(RegisterScreenStyles.setColorPurple);
      setStudentTextColor(RegisterScreenStyles.setColorGray);
      setPlaceholder1Text('Topluluk Adı');
      setDisableView({display: 'none'});
      setRole("community");
    }

    

    _onRegisterButton= async () => {
      //Topluluk ise firstName olarak gönder,
      //Öğrenci ise fistName LastName böl 
      console.log("Role :" + role);
      console.log("FirstName :" + firstName);
      console.log("LastName : "+ lastName);
      console.log("Email : " + email);
      console.log("PW1 : "+password1);
      console.log("PW2 : "+password2);
      
      if(password1!=password2){
          alert("Girdiğiniz şifreler farklı");
          return;
      }
      else{

          if(role=="student"){
            const res = await fetch('https://cmis.azurewebsites.net/api/auth/signup', {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({"firstName": firstName,
                                    "lastName" : lastName,
                                    "email": email,
                                    "password": password1,
                                    "role": ["student"] }),
            });
              if (res.ok) {
                alert('Kayıt Olundu');
                const data = await res.json();
                console.log(data);
                return data;
              }
              else{
                alert('Kayıt Başarısız');
              }
              console.log(res);  
          } 
          else if(role=="community"){
            setRole("community");
            const res = await fetch('https://cmis.azurewebsites.net/api/auth/signup', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ "firstName": firstName,
              "email": email,
              "password": password1,
              "role": ["community"] }),
            });
            if (res.ok) {
              alert('Kayıt Olundu');
              const data = await res.json();
              console.log(data);
              return data;
            }
            else{
              alert('Kayıt Başarısız');
            }
            
          }
      }

      // try {
      //   let res = await fetch('http://localhost:8070/api/auth/signup', {
      //     method: 'POST',
      //     headers: {
      //       Accept: 'application/json',
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify({
      //       "firstName": "Elma",
      //       "lastName" : "Tekne",
      //       "email": "asdjhfklasd@gtu.edu.tr",
      //       "password": "elmatekne1234",
      //       "role": ["student"],
      //     }),
      //   });
      //   res = await res.json();
      //   console.log(res)
      //   Alert.alert('onPress', res.json.str);
      // } catch (e) {
      //   console.error(e);
      // }
      
      // const res = await fetch('http://192.168.1.35:8070/api/auth/signup', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify({ "firstName": "Elma", "lastName" : "Tekne", "email": "asdffgh@gtu.edu.tr", "password": "elmatekne1234", "role": ["student"]}),
      //   });
      //   if (res.ok) {
      //     const data = await res.json();
      //     //setIsLoggedIn(true);
      //     //setUserData(data);
      //     return data;
      //   }

      // axios.post('http://192.168.1.35:8070/api/auth/signup', {
      //   "firstName": "Ersel",
      //   "lastName" : "Celal",
      //   "email": "dsafasdf@gtu.edu.tr",
      //   "password": "elmatekne1234",
      //   "role": ["student"]
      // })
      // .then(function (response) {
      //   console.log(response);
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
    }  

  
      return (
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1,}} contentContainerStyle={{flexGrow: 1,}}> 
      <View style={RegisterScreenStyles.container}>
       
          <View style={RegisterScreenStyles.upperRectangle}>
                <Text style={{color: 'white',fontWeight: '600',fontSize: height*0.05,letterSpacing: 7.5,marginTop: height * 0.1,alignSelf: 'center',}}> cmis </Text>
          </View>

        
          <View style={RegisterScreenStyles.StudentAndComm}>
                <TouchableHighlight style={RegisterScreenStyles.StudentButton} activeOpacity={1} underlayColor={'white'} onPress={()=>_onStudentButton()}>
                  <View>
                        <Image 
                          style = {RegisterScreenStyles.StudentImageStyle}
                          source ={studentIcon} 
                          height={20}
                          width={20} 
                          />
                          <Text style={[RegisterScreenStyles.StudentText, StudentTextColor]} > Öğrenci </Text>      
                          <View style={RegisterScreenStyles.studentSelectionLine} backgroundColor={studentSelection} ></View>
                  </View>
                </TouchableHighlight>
                
                 
                <View style={RegisterScreenStyles.verticleLine}></View>

                <TouchableHighlight style={RegisterScreenStyles.CommunityButton} activeOpacity={1} underlayColor={'white'} onPress={()=>_onCommunityButton()}>
                <View >
                    
                      <Image 
                        style = {RegisterScreenStyles.CommunityImageStyle}
                        source={communityIcon} 
                        height={30}
                        width={50} 
                      />
                    <Text style={[RegisterScreenStyles.CommText, CommunityTextColor]} >Topluluk/Takım</Text>
                    <View style={RegisterScreenStyles.communitySelectionLine} backgroundColor={communitySelection} ></View>
                </View>  
                </TouchableHighlight>
                 
          </View>

          
          

          <View style={{flexDirection:'row'}}>
              <Image source={require("../assets/icons/at-sign.png")} 
              height={20}
              width={20} 
              style={RegisterScreenStyles.atsignLogin}  
              />
              <TextInput onChangeText={newText => setEmail(newText)} placeholder='E-posta' placeholderTextColor='rgba(165,165,165,1)' cursorColor={'rgba(84,70,115,1)'}  style={RegisterScreenStyles.textinput} />
              
          </View>

          <View style={{flexDirection:'row'}}>
              <Image source={require("../assets/icons/user.png")} 
              height={20}
              width={20} 
              style={RegisterScreenStyles.atsignLogin}  
              />
              <TextInput onChangeText={newText => setFirstName(newText)} placeholder={placeholder1Text} placeholderTextColor='rgba(165,165,165,1)' cursorColor={'rgba(84,70,115,1)'} style={RegisterScreenStyles.textinput} />              
          </View>
          
          <View style={disableView}>
              <Image source={require("../assets/icons/user.png")} 
              height={20}
              width={20} 
              style={RegisterScreenStyles.atsignLogin}  
              />
              <TextInput onChangeText={newText => setLastName(newText)} placeholder={placeholder2Text} placeholderTextColor='rgba(165,165,165,1)' cursorColor={'rgba(84,70,115,1)'} style={RegisterScreenStyles.textinput} />              
          </View>

          <View style={{flexDirection:'row'}}>
              <Image source={require("../assets/icons/lock.png")} 
              height={20}
              width={20} 
              style={RegisterScreenStyles.atsignLogin}  
              />
              <TextInput onChangeText={newText => setPassword1(newText)} secureTextEntry={true} placeholder='Şifre' placeholderTextColor='rgba(165,165,165,1)' cursorColor={'rgba(84,70,115,1)'} style={RegisterScreenStyles.textinput} />
              
          </View>

          <View style={{flexDirection:'row'}}>
              <Image source={require("../assets/icons/lock.png")} 
              height={20}
              width={20} 
              style={RegisterScreenStyles.atsignLogin}  
              />
              <TextInput onChangeText={newText => setPassword2(newText)} secureTextEntry={true} placeholder='Şifre Tekrar' placeholderTextColor='rgba(165,165,165,1)' cursorColor={'rgba(84,70,115,1)'} style={RegisterScreenStyles.textinput} />
              
          </View>

          <TouchableNativeFeedback onPress={()=>_onForgotPasswordButton()} underlayColor="white">
          <View style={RegisterScreenStyles.forgotPassword}>
            <Text style={RegisterScreenStyles.forgotPasswordText}>Şifreni mi Unuttun?</Text>
          </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback onPress={()=>_onRegisterButton()} underlayColor="white">
            <View style={RegisterScreenStyles.LoginButton}>
              <Text style={RegisterScreenStyles.LoginButtonText}>Kayıt Ol</Text>
            </View>
          </TouchableNativeFeedback>

          <View style={{flexDirection: 'row', alignSelf: 'center', top: 50, width:Dimensions.get('window').width * 0.9, }}>
            <View style={{flex: 1, height: 1, backgroundColor: 'rgba(152,152,152,1)'}} />
            <View>
              <Text style={{top:-10,width: 50, textAlign: 'center', color: 'rgba(152,152,152,1)'}}>veya</Text>
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: 'rgba(152,152,152,1)'}} />
          </View>

          <TouchableNativeFeedback onPress={()=>navigation.reset({ index: 0, routes: [{ name: 'Login' }],})}>
            <View style={RegisterScreenStyles.RegisterButton}>
            <Text style={RegisterScreenStyles.RegisterInnerText}>
              cmis
              <Text style={RegisterScreenStyles.RegisterOuterText}> Hesabın İle Giriş Yap </Text>
            </Text>
            </View>
          </TouchableNativeFeedback>

          
      </View>
      </ScrollView>
    );
  }

