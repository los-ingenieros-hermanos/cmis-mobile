import { View, Text, TextInput, Dimensions,TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector} from 'react-redux';
import { CheckBox } from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { fetch_post } from '../../fetch';

const { width, height } = Dimensions.get('window');

export default function CreatePostScreen({navigation}) {
    
    const [image, setImage] = useState(null);  
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

    const createPost = async () => {
       
      if(isEvent == true){
        const data = {
          date:{day: currentDay, month: currentMonth, year: currentYear, hour: currentHour, minute: currentMinute},
          image: imageUri,
          title: postTitle,
          text: postContent,
          visibility: 'public',
          event:[{date: {year: inputYear, month: inputMonth,day: inputDay,hour: inputHour,minute: inputMinute,},},],
        }
        const body = JSON.stringify(data);
        await fetch_post(url1 +"/api/cmis/communities/" + id + "/posts", body);
      }

      // if it is post
      if(isEvent == false){
        const data  = {
          date:{day: currentDay, month: currentMonth, year: currentYear, hour: currentHour, minute: currentMinute},
          image: imageUri,
          title: postTitle,
          text: postContent,
          visibility: 'public',
        }
        const body = JSON.stringify(data);
        await fetch_post(url1 +"/api/cmis/communities/" + id + "/posts", body);
      }
      
      navigation.goBack();
      
    };

    const handleCheckBox = () => {
      setIsEvent(!isEvent);
    }

    const pickImage = async () => {
       ImagePicker.openPicker({
        cropping: true,
        includeBase64 : true,
        compressImageQuality: 0.2,
      }).then(image => {
        setImageUri("data:image/png;base64,"+image.data);
      });
    };

    return (
    <View>

        <View style={{backgroundColor:'rgba(84,70,115,1)', height:50, alignItems:'center', flexDirection:'row'}}>
            
            
                <TouchableHighlight underlayColor={'rgba(84, 70, 115, 1)'} onPress={() => navigation.goBack()} style={{marginLeft:10,height:'100%'}}>
                    <View style={{height:'100%'}}> 
                      <Ionicons name="arrow-back-outline" size={45} color="white" /> 
                    </View>
                </TouchableHighlight>
            
            <View style={{width:width, alignItems:'center', position:'absolute'}}>
                <Text style={{color:'white',fontSize: RFValue(15, 580) }}> Gönderi Oluştur </Text>
            </View>
        </View>
        
        <View style={{backgroundColor:'white', height:height*0.08, alignItems:'center', justifyContent:'center'}}>    
            <TextInput value={postTitle} onChangeText={text => setPostTitle(text)} placeholder='Gönderi Başlığını Girin' placeholderTextColor={"gray"} style={{borderTopWidth:0,borderLeftWidth:0,fontSize: RFValue(13,580), 
                                                            borderRightWidth:0,borderWidth:2,borderColor:'rgba(84,70,115,1)', 
                                                            width:width*0.90,backgroundColor:'white',color:'black'}}></TextInput>
        </View>

        <View style={{backgroundColor:'white', height:height*0.08, alignItems:'center', justifyContent:'center'}}> 
            <TextInput value={postContent} onChangeText={text => setPostContent(text)} multiline={true} numberOfLines={null} placeholder='Gönderi Açıklamasını Girin' placeholderTextColor={"gray"} style={{borderTopWidth:0,borderLeftWidth:0, 
                                                             borderRightWidth:0,borderWidth:2,
                                                             borderColor:'rgba(84,70,115,1)',
                                                             width:width*0.90, fontSize: RFValue(13,580), backgroundColor:'white',color:'black'}}>
            </TextInput>
        </View>
        
        
        <CheckBox title="Etkinlik" checked={isEvent} onPress={handleCheckBox} containerStyle={{width:width*0.95}}/>    
        
        {isEvent && 
        <View style={{height:120, backgroundColor:'white', width:width*0.9, marginHorizontal:width*0.05, borderWidth:0, borderBottomWidth:0, borderBottomLeftRadius:0, borderBottomRightRadius:0, borderRadius:5, borderColor:'rgba(84,70,115,1)'}}> 
            <Text style={{fontSize: RFValue(13,580),color:'rgba(84,70,115,1)', textAlign:'center'}}>Etkinlik Tarih ve Saati (sadece sayı ile)</Text>
              
            <View style={{flexDirection:'row', marginTop:10, justifyContent:'center',height:'30%'}}>   
              <TextInput placeholderTextColor={"gray"} value={inputMonth.toString()} onChangeText={text => setInputMonth(text)} placeholder='Ay' style={{color:'black',borderWidth:0.2, width:'31%', textAlign:'center', borderRadius:5, marginRight:width*0.01, height:'100%'}}>
              </TextInput>
              
              <TextInput placeholderTextColor={"gray"} value={inputDay.toString()} onChangeText={text => setInputDay(text)} placeholder='Gün' style={{color:'black',borderWidth:0.2, width:'31%', textAlign:'center', borderRadius:5, marginHorizontal:width*0.01}}>
              </TextInput>

              <TextInput placeholderTextColor={"gray"} value={inputYear.toString()} onChangeText={text => setInputYear(text)} placeholder='Yıl' style={{color:'black',borderWidth:0.2, width:'31%', textAlign:'center', borderRadius:5, marginHorizontal:width*0.01}}>
              </TextInput>
            </View>    
            
            <View style={{flexDirection:'row', marginTop:10, justifyContent:'center',height:'30%'}}> 
              <TextInput placeholderTextColor={"gray"} value={inputHour.toString()} onChangeText={text => setInputHour(text)} placeholder='Saat' style={{color:'black',borderWidth:0.2, width:'20%', textAlign:'center', borderRadius:5, marginHorizontal:width*0.02}}>
              </TextInput>
                <Text style={{fontSize:20,color:'black'}}>:</Text>
              <TextInput placeholderTextColor={"gray"} value={inputMinute.toString()} onChangeText={text => setInputMinute(text)} placeholder='Dakika' style={{color:'black',borderWidth:0.2, width:'20%', textAlign:'center', borderRadius:5, marginHorizontal:width*0.02}}>
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