import { View, Text, TextInput, Dimensions, Button, Touchable, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useSelector, useDispatch } from 'react-redux';
import { CheckBox } from 'react-native-elements';
import ImgToBase64 from 'react-native-image-base64';
import * as FileSystem from 'expo-file-system';


const { width, height } = Dimensions.get('window');

const base64string = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAkSURBVDhPY3jhY/ufGnjUIMJ41CDCeNQgwnjUIMJ42Bpk+x8AsVZtrnFMDcMAAAAASUVORK5CYII="


const ImageOptions = {
  title: 'select image', storageOptions: {skipBackup: true, path: 'images'},
  maxWidth: 150, maxHeight: 150, chooseFromLibraryButtonTitle: 'Choose from gallery',
};

export default function CreatePostScreen({navigation}) {
    const [imageUri, setImageUri] = useState(null);
    const [postTitle, setPostTitle] = useState("");
    const [postContent, setPostContent] = useState("");
    const [postImage, setPostImage] = useState("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAIAAAC6O5sJAAAAFElEQVQYlWP0nPCIARtgwio60BIAME0ByTXOoJcAAAAASUVORK5CYII=");
    const [isEvent, setIsEvent] = useState(false);
    const url1 = useSelector((store) => store.url.url);
    const id = useSelector((store) => store.userID.userID);

    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();

    const [inputDay, setInputDay] = useState(currentDay);
    const [inputMonth, setInputMonth] = useState(currentMonth);
    const [inputYear, setInputYear] = useState(currentYear);
    const [inputHour, setInputHour] = useState(currentHour);
    const [inputMinute, setInputMinute] = useState(currentMinute);

    const [uri, setUri] = useState("");

    async function getBase64String(uri) {
      const file = await FileSystem.readAsStringAsync(uri, { encoding: FileSystem.EncodingType.Base64 }); 
      return file;
    }

    const createPost = () => {
       

      if(isEvent == true){
        fetch(url1 +"/api/cmis/communities/" + id + "/posts", {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({date:{day: currentDay, month: currentMonth, year: currentYear, hour: currentHour, minute: currentMinute},
                                image: imageUri,title: postTitle,text: postContent, visibility: 'public', 
                                event:[{date: {year: inputYear, month: inputMonth,day: inputDay,hour: inputHour,minute: inputMinute,},},],}),})
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((err) => {
            console.log(err.message);
          });
      }

      // if it is post
      if(isEvent == false){
        fetch(url1 +"/api/cmis/communities/" + id + "/posts", {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title: postTitle, text: postContent, image: imageUri, visibility: "public", date:{day: currentDay, month: currentMonth, year: currentYear, hour: currentHour, minute: currentMinute}}),
          })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((err) => {
            console.log(err.message);
          });

         

      }
      navigation.goBack();
      
    };

    const handleCheckBox = () => {
      setIsEvent(!isEvent);
    }

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });     
        const base64String = await getBase64String(result.assets[0].uri);
        setImageUri("data:image/png;base64,"+base64String);
    };

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
            <TextInput value={postTitle} onChangeText={text => setPostTitle(text)} placeholder='Gönderi Başlığını Girin' style={{borderTopWidth:0,borderLeftWidth:0,fontSize: RFValue(13,580), 
                                                            borderRightWidth:0,borderWidth:2,borderColor:'rgba(84,70,115,1)', 
                                                            height:30, width:width*0.90}}></TextInput>
        </View>

        <View style={{backgroundColor:'white', height:height*0.08, alignItems:'center', justifyContent:'center'}}> 
            <TextInput value={postContent} onChangeText={text => setPostContent(text)} multiline numberOfLines={null} placeholder='Gönderi Açıklamasını Girin' style={{borderTopWidth:0,borderLeftWidth:0, 
                                                             borderRightWidth:0,borderWidth:2,
                                                             borderColor:'rgba(84,70,115,1)', 
                                                             width:width*0.90, fontSize: RFValue(13,580), backgroundColor:'white'}}>
            </TextInput>
        </View>
        
        
        <CheckBox title="Etkinlik" checked={isEvent} onPress={handleCheckBox} containerStyle={{width:width*0.95}}/>    
        
        {isEvent && <View style={{height:120, backgroundColor:'white', width:width*0.9, marginHorizontal:width*0.05, borderWidth:0, borderBottomWidth:0, borderBottomLeftRadius:0, borderBottomRightRadius:0, borderRadius:5, borderColor:'rgba(84,70,115,1)'}}> 
        <Text style={{fontSize: RFValue(13,580),color:'rgba(84,70,115,1)', textAlign:'center'}}> Etkinlik Tarih ve Saati (sadece sayı ile)</Text>
            
          <View style={{flexDirection:'row', marginTop:10, justifyContent:'center'}}>   
            <TextInput value={inputMonth} onChangeText={text => setInputMonth(text)} placeholder='Ay' style={{borderWidth:0.2, width:'31%', textAlign:'center', borderRadius:5, marginRight:width*0.01}}>

            </TextInput>
            
            <TextInput value={inputDay} onChangeText={text => setInputDay(text)} placeholder='Gün' style={{borderWidth:0.2, width:'31%', textAlign:'center', borderRadius:5, marginHorizontal:width*0.01}}>

            </TextInput>

            <TextInput value={inputYear} onChangeText={text => setInputYear(text)} placeholder='Yıl' style={{borderWidth:0.2, width:'31%', textAlign:'center', borderRadius:5, marginHorizontal:width*0.01}}>

            </TextInput>
          </View>    
          
          <View style={{flexDirection:'row', marginTop:10, justifyContent:'center'}}> 
            <TextInput value={inputHour} onChangeText={text => setInputHour(text)} placeholder='Saat' style={{borderWidth:0.2, width:'20%', textAlign:'center', borderRadius:5, marginHorizontal:width*0.05}}>
            </TextInput>
            <Text style={{fontSize:20}}>:</Text>
            <TextInput value={inputMinute} onChangeText={text => setInputMinute(text)} placeholder='Dakika' style={{borderWidth:0.2, width:'20%', textAlign:'center', borderRadius:5, marginHorizontal:width*0.05}}>
            </TextInput>
          </View>
        
        </View> }

        <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity onPress={pickImage} style={{borderWidth:2,borderColor:'rgba(84,70,115,1)',height:height*0.04, backgroundColor:'white', justifyContent:'center', borderRadius:5, marginVertical:10}}>
         <View style={{width:width*0.3, alignItems:'center'}}> 
              <Text style={{fontSize: RFValue(13,580), color:'rgba(84,70,115,1)'}}> Görüntü Ekle</Text>
          </View>
        </TouchableOpacity>
        
      {imageUri && <Image source={{ uri:imageUri}} style={{ width: width, height: 300}} />}

        <TouchableOpacity onPress={createPost} style={{borderWidth:2,borderColor:'rgba(84,70,115,1)',height:height*0.05, backgroundColor:'white', justifyContent:'center', borderRadius:5, marginVertical:10}}>
         <View style={{width:width*0.4, alignItems:'center'}}> 
              <Text style={{fontSize: RFValue(13,580), color:'rgba(84,70,115,1)'}}> Gönderiyi Oluştur </Text>
          </View>
        </TouchableOpacity> 
        </View>

           
    </View>
  )
}