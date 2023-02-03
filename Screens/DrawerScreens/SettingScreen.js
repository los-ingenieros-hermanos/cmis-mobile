import {Dimensions, View, Text, TouchableOpacity,Modal, TextInput,ScrollView,Alert } from 'react-native'
import React, {useState} from 'react'
import {RFValue} from "react-native-responsive-fontsize";
import { useSelector} from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';
import  Ionicons from 'react-native-vector-icons/Ionicons';
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableHighlight } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

export default function SettingScreen({navigation}) {
  const url1 = useSelector((store) => store.url.url);
  const [selectedPW, setSelectedPW] = useState(false);
  const [selectedPP, setSelectedPP] = useState(false);
  const [selectedBanner, setSelectedBanner] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState(false);
  const [selectedSocialMedia, setSelectedSocialMedia] = useState(false);
  const ownID = useSelector((store) => store.userID.userID);
  const [oldPW, setOldPW] = useState('');
  const [newPW1, setNewPW1] = useState('');
  const [newPW2, setNewPW2] = useState('');
  const [refresh, setRefresh] = useState(false);
  const [imageUri, setImageUri] = useState(null);
  const [socialLink, setSocialLink] = useState("");
  const [info, setInfo] = useState("");

  const userRole = useSelector((store) => store.userID.userRole);
  const bannerComm = useSelector((store) => store.communityData.banner);
  const bannerStu = useSelector((store) => store.studentData.banner);
  const ppComm  = useSelector((store) => store.communityData.image);
  const ppStu = useSelector((store) => store.studentData.image);


  const handleClicked = async () => {
    if(selected === true){setSelected(false);}
    else{setSelected(true);}
  };

  const handlePWClicked = async () => {
    if(selectedPW === true){setSelectedPW(false);}
    else{setSelectedPW(true);}
  };

  const handlePPClicked = async () => {
    if(selectedPP === true){setSelectedPP(false);}
    else{setSelectedPP(true);}
  };

  const handleBannerClicked = async  () => {
    if(selectedBanner === true){setSelectedBanner(false);}
    else{setSelectedBanner(true);}
  };

  const handleInfoClicked = async () => {
    if(selectedInfo === true){setSelectedInfo(false);}
    else{setSelectedInfo(true);}
  };

  const handleSocialMediaClicked = async () => {
    if(selectedSocialMedia === true){setSelectedSocialMedia(false);}
    else{setSelectedSocialMedia(true);}
  };

  const handleLogout = async () => {
    console.log("logout");
  };


  const handleChangePassword = async () => {
    if(newPW1 == '' || newPW2 == '' || oldPW == ''){
      Alert.alert("Hata", "Şifre boş bırakılamaz!");
      setRefresh(!refresh);
    }

    if(newPW1 === newPW2 && newPW1 != '' && newPW2 != '' && oldPW != ''){
      fetch(url1 +"/api/cmis/users/" + ownID + "/password", {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({"oldPassword":oldPW,"newPassword": newPW1}),})
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          Alert.alert("Başarılı", "Şifre değiştirildi");
          setRefresh(!refresh);
          navigation.goBack();
        })
        .catch((err) => {
          console.log(err.message);
          Alert.alert("Hata", "Şifre değiştirilemedi");
          setRefresh(!refresh);
          navigation.goBack();
        });
    }
    else{
      Alert.alert("Hata", "Şifreler Eşleşmiyor");
      setRefresh(!refresh);
    }
  };

  const handleChangeProfilePicture = async () => {
      await ImagePicker.openPicker({
        cropping: true,
        includeBase64 : true,
      }).then(image => {
        finaluri = "data:image/png;base64,"+image.data;
      });
      

    if(userRole=="ROLE_STUDENT"){
      await fetch(url1 +"/api/cmis/students/"+ownID, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({image:finaluri, banner:bannerStu}),})
        .then((res) => res.json())
        .then((data) => {
          Alert.alert("Başarılı", "Profil fotoğrafı değiştirildi");
          setRefresh(!refresh);
          navigation.goBack();
        })
        .catch((err) => {
          console.log(err.message);
          Alert.alert("Hata", "Profil fotoğrafı değiştirilemedi");
          setRefresh(!refresh);
          navigation.goBack();
        });
    }
    else if(userRole=="ROLE_COMMUNITY"){
      await fetch(url1 +"/api/cmis/communities/"+ownID, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({image:finaluri, banner:bannerComm}),})
        .then((res) => res.json())
        .then((data) => {
          Alert.alert("Başarılı", "Profil fotoğrafı değiştirildi");
          setRefresh(!refresh);
          navigation.goBack();
        })
        .catch((err) => {
          console.log(err.message);
          Alert.alert("Hata", "Profil fotoğrafı değiştirilemedi");
          setRefresh(!refresh);
          navigation.goBack();
        });
    }

  };

  const handleChangeBanner = async () => {
    await ImagePicker.openPicker({
      cropping: true,
      includeBase64 : true,
    }).then(image => {
      finaluri = "data:image/png;base64,"+image.data;
    });
    
    if(userRole=="ROLE_STUDENT"){
      await fetch(url1 +"/api/cmis/students/"+ownID, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({banner:finaluri, image:ppStu}),})
        .then((res) => res.json())
        .then((data) => {
          console.log("|||||||||||||||||||||||||||||||||           3");
          console.log(data);
          console.log("|||||||||||||||||||||||||||||||||           4");
          Alert.alert("Başarılı", "Kapak fotoğrafı değiştirildi");
          setRefresh(!refresh);
          navigation.goBack();
        })
        .catch((err) => {
          console.log(err.message);
          Alert.alert("Hata", "Kapak fotoğrafı değiştirilemedi");
          setRefresh(!refresh);
          navigation.goBack();
        });
    }
    else if(userRole=="ROLE_COMMUNITY"){
      await fetch(url1 +"/api/cmis/communities/"+ownID, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({banner:finaluri, image:ppComm}),})
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          
          Alert.alert("Başarılı", "Kapak fotoğrafı değiştirildi");
          setRefresh(!refresh);

          navigation.goBack();
        })
        .catch((err) => {
          console.log(err.message);
          Alert.alert("Hata", "Kapak fotoğrafı değiştirilemedi");
          setRefresh(!refresh);
          navigation.goBack();
        });
    }
  };

  const handleChangeInfo = async () => {
    let endpoint = "";
    console.log("INFO : "+ info);
    if(userRole=="ROLE_STUDENT"){
      endpoint = "/api/cmis/students/"+ownID;
      await fetch(url1 + endpoint, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({info:info, image:ppStu, banner:bannerStu}),})
        .then((res) => res.json())
        .then((data) => {
        
          Alert.alert("Başarılı", "Açıklama değiştirildi");
          setRefresh(!refresh);
          navigation.goBack();
        })
        .catch((err) => {
          console.log(err.message);
          Alert.alert("Hata", "Açıklama değiştirilemedi");
          setRefresh(!refresh);
          navigation.goBack();
        });
    }
    else if(userRole=="ROLE_COMMUNITY"){
      endpoint = "/api/cmis/communities/"+ownID;

      await fetch(url1 + endpoint, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({info:info, image:ppComm, banner:bannerComm}),})
        .then((res) => res.json())
        .then((data) => {
        
          Alert.alert("Başarılı", "Açıklama değiştirildi");
          setRefresh(!refresh);
          navigation.goBack();
        })
        .catch((err) => {
          console.log(err.message);
          Alert.alert("Hata", "Açıklama değiştirilemedi");
          setRefresh(!refresh);
          navigation.goBack();
        });
    }
    
    
      
    
  };
  
  const handleBackButton = async () => {
    setSelectedBanner(false);
    setSelectedInfo(false);
    setSelectedPP(false);
    setSelectedPW(false);
    setSelectedSocialMedia(false);
    navigation.goBack();
  };

  const updateLink = async () => {
    let endpoint = "";
    if(userRole=="ROLE_STUDENT"){
      endpoint = "/api/cmis/students/"+ownID;
      
      await fetch(url1 + endpoint, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({instagram:socialLink, banner:bannerStu, image:ppStu}),})
        .then((res) => res.json())
        .then((data) => {
        
          Alert.alert("Başarılı", "Bağlantı değiştirildi");
          setRefresh(!refresh);
          navigation.goBack();
        })
        .catch((err) => {
          console.log(err.message);
          Alert.alert("Hata", "Bağlantı değiştirilemedi");
          setRefresh(!refresh);
          navigation.goBack();
        });
    }
    else if(userRole=="ROLE_COMMUNITY"){
      endpoint = "/api/cmis/communities/"+ownID;
      await fetch(url1 + endpoint, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({instagram:socialLink,banner:bannerComm, image:ppComm}),})
        .then((res) => res.json())
        .then((data) => {
        
          Alert.alert("Başarılı", "Bağlantı değiştirildi");
          setRefresh(!refresh);
          navigation.goBack();
        })
        .catch((err) => {
          console.log(err.message);
          Alert.alert("Hata", "Bağlantı değiştirilemedi");
          setRefresh(!refresh);
          navigation.goBack();
        });
    }
    
    if(socialLink == ''){
      Alert.alert("Hata", "Link boş bırakılamaz!");
      setRefresh(!refresh);
    }
    else{
      
    }
  };
 
     

  
  return (
    <ScrollView style={{flex:1}}>
    
      
      {refresh && <View> 
      <Text style={{color:'white'}}></Text>
      </View>}

      <View style={{backgroundColor:'white', height:height*0.06, alignItems:'center', flexDirection:'row'}}>
            
            <View style={{position:'absolute'}}>
                <TouchableHighlight underlayColor={'white'} onPress={handleBackButton} style={{marginLeft:10}}>
                    <Ionicons name="arrow-back-outline" size={45} color="rgba(84,70,115,1)" />
                </TouchableHighlight>
            </View>
            <View style={{width:width, alignItems:'center'}}>
                <Text style={{color:'rgba(84,70,115,1)',fontSize: RFValue(15, 580) }}> Ayarlar </Text>
            </View>
      </View>

      <View style={{height:height, backgroundColor:'white'}}>
          <View style={{width:width*0.95,height:height*0.05, backgroundColor:'white', justifyContent:'center', marginLeft:width*0.025, marginVertical:5, borderBottomWidth:1, borderBottomColor:'rgba(84,70,115,1)'}}>
            <TouchableOpacity onPress={handlePWClicked} style={{flexDirection:'row'}}>
            <MaterialIcons name="lock" size={27} color="rgba(84,70,115,1)" />
              <Text style={{left:10,color:'rgba(84,70,115,1)', fontSize: RFValue(13,580)}}>Şifre Değiştir</Text>
            </TouchableOpacity>
          </View>
          
          {selectedPW && 
              <View style={{width:width*0.95, alignSelf:'center', backgroundColor:"rgba(240,241,251,1)", alignItems:'center'}}>
                <TextInput placeholderTextColor={'gray'}  onChangeText={text => setOldPW(text)} placeholder="Eski Şifre" style={{width:'90%',paddingLeft:10,borderWidth:0.2, borderColor:'black', borderRadius:10, marginBottom:5, marginTop:10}}/>
                <TextInput placeholderTextColor={'gray'}  onChangeText={text => setNewPW1(text)} placeholder="Yeni Şifre" style={{width:'90%',paddingLeft:10,borderWidth:0.2, borderColor:'black', borderRadius:10,marginBottom:5}}/>
                <TextInput placeholderTextColor={'gray'}  onChangeText={text => setNewPW2(text)} placeholder="Yeni Şifre Tekrar" style={{width:'90%',paddingLeft:10,borderWidth:0.2, borderColor:'black', borderRadius:10,marginBottom:5}}/>
                <TouchableOpacity onPress={handleChangePassword} style={{borderRadius:10, backgroundColor:'rgba(208,219,242,1)', alignSelf:'center', height:30, justifyContent:'center', width:width*0.3, marginBottom:10}}>
                  <Text style={{textAlign:'center', color:'rgba(162,131,231,1)'}}>Şifreyi Değiştir</Text>
                </TouchableOpacity>
              </View>
          }

          <View style={{width:width*0.95,height:height*0.05, backgroundColor:'white', justifyContent:'center', marginLeft:width*0.025, marginVertical:5, borderBottomWidth:1, borderBottomColor:'rgba(84,70,115,1)'}}>
            <TouchableOpacity onPress={handlePPClicked} style={{flexDirection:'row'}}>
            <Ionicons name="person-circle" size={27} color="rgba(84,70,115,1)"/>
              <Text style={{left:10,color:'rgba(84,70,115,1)', fontSize: RFValue(13,580)}}>Profil Fotoğrafını Değiştir</Text>
            </TouchableOpacity>
          </View>

          {selectedPP && 
              <View style={{width:width*0.95, alignSelf:'center', backgroundColor:"rgba(240,241,251,1)", alignItems:'center'}}>
               
                <TouchableOpacity onPress={handleChangeProfilePicture} style={{marginTop:10,borderRadius:10, backgroundColor:'rgba(208,219,242,1)', alignSelf:'center', height:30, justifyContent:'center', width:width*0.3, marginBottom:10}}>
                  <Text style={{textAlign:'center', color:'rgba(162,131,231,1)'}}>Fotoğraf Seç</Text>
                </TouchableOpacity>
              </View>
          }

          <View style={{width:width*0.95,height:height*0.05, backgroundColor:'white', justifyContent:'center', marginLeft:width*0.025, marginVertical:5, borderBottomWidth:1, borderBottomColor:'rgba(84,70,115,1)'}}>
            <TouchableOpacity onPress={handleBannerClicked} style={{flexDirection:'row'}}>
            <MaterialIcons name="image" size={27} color="rgba(84,70,115,1)" />
              <Text style={{left:10,color:'rgba(84,70,115,1)', fontSize: RFValue(13,580)}}>Kapak Fotoğrafını Değiştir</Text>
            </TouchableOpacity>
          </View>

          {selectedBanner && 
              <View style={{width:width*0.95, alignSelf:'center', backgroundColor:"rgba(240,241,251,1)", alignItems:'center'}}>
               
                <TouchableOpacity onPress={handleChangeBanner} style={{marginTop:10,borderRadius:10, backgroundColor:'rgba(208,219,242,1)', alignSelf:'center', height:30, justifyContent:'center', width:width*0.3, marginBottom:10}}>
                  <Text style={{textAlign:'center', color:'rgba(162,131,231,1)'}}>Fotoğraf Seç</Text>
                </TouchableOpacity>
              </View>
          }

          <View style={{width:width*0.95,height:height*0.05, backgroundColor:'white', justifyContent:'center', marginLeft:width*0.025, marginVertical:5, borderBottomWidth:1, borderBottomColor:'rgba(84,70,115,1)'}}>
            <TouchableOpacity onPress={handleInfoClicked} style={{flexDirection:'row'}}>
            <MaterialIcons name="info" size={27} color="rgba(84,70,115,1)" />
              <Text style={{left:10,color:'rgba(84,70,115,1)', fontSize: RFValue(13,580)}}>Profil Açıklamasını Değiştir</Text>
            </TouchableOpacity>
          </View>

          {selectedInfo && 
              <View style={{width:width*0.95, alignSelf:'center', backgroundColor:"rgba(240,241,251,1)", alignItems:'center'}}>
                <TextInput placeholderTextColor={'gray'} onChangeText={text => setInfo(text)} placeholder="Profil Açıklamasını Girin" style={{color:'black',width:'90%',paddingLeft:10,borderWidth:0.2, borderColor:'black', borderRadius:10, marginBottom:5, marginTop:10}}/>
                <TouchableOpacity onPress={handleChangeInfo} style={{borderRadius:10, backgroundColor:'rgba(208,219,242,1)', alignSelf:'center', height:30, justifyContent:'center', width:width*0.3, marginBottom:10}}>
                  <Text style={{textAlign:'center', color:'rgba(162,131,231,1)'}}>Açıklamayı Değiştir</Text>
                </TouchableOpacity>
              </View>
          }
          
          <View style={{width:width*0.95,height:height*0.05, backgroundColor:'white', justifyContent:'center', marginLeft:width*0.025, marginVertical:5, borderBottomWidth:1, borderBottomColor:'rgba(84,70,115,1)'}}>
            <TouchableOpacity onPress={handleSocialMediaClicked} style={{flexDirection:'row'}}>
            <MaterialIcons name="info" size={27} color="rgba(84,70,115,1)" />
              <Text style={{left:10,color:'rgba(84,70,115,1)', fontSize: RFValue(13,580)}}>Sosyal Medya Bağlantını Değiştir</Text>
            </TouchableOpacity>
          </View>

          {selectedSocialMedia && 
              <View style={{width:width*0.95, alignSelf:'center', backgroundColor:"rgba(240,241,251,1)", alignItems:'center'}}>
                <TextInput placeholderTextColor={'gray'} onChangeText={text => setSocialLink(text)} placeholder="Sosyal Medya Linkinizi Girin" style={{width:'90%',paddingLeft:10,borderWidth:0.2, borderColor:'black', borderRadius:10, marginBottom:5, marginTop:10}}/>
                <TouchableOpacity onPress={updateLink} style={{borderRadius:10, backgroundColor:'rgba(208,219,242,1)', alignSelf:'center', height:30, justifyContent:'center', width:width*0.3, marginBottom:10}}>
                  <Text style={{textAlign:'center', color:'rgba(162,131,231,1)'}}>Linki Güncelle</Text>
                </TouchableOpacity>
              </View>
          }

          <View style={{width:width*0.95,height:height*0.05, backgroundColor:'white', justifyContent:'center', marginLeft:width*0.025, marginVertical:5}}>
            <TouchableOpacity onPress={handleLogout} style={{flexDirection:'row'}}>
            <MaterialIcons name="logout" size={27} color='rgba(187,58,58,1)' />
              <Text style={{left:10,color:'rgba(187,58,58,1)', fontSize: RFValue(13,580)}}>Çıkış Yap</Text>
            </TouchableOpacity>
          </View>
      </View>

      
    
    </ScrollView>
  )
}