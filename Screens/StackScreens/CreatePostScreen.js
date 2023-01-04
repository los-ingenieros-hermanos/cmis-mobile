import { View, Text, TextInput, Dimensions, Button, Touchable, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useSelector, useDispatch } from 'react-redux';

const { width, height } = Dimensions.get('window');

const base64string = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAkSURBVDhPY3jhY/ufGnjUIMJ41CDCeNQgwnjUIMJ42Bpk+x8AsVZtrnFMDcMAAAAASUVORK5CYII="


const ImageOptions = {
  title: 'select image', storageOptions: {skipBackup: true, path: 'images'},
  maxWidth: 150, maxHeight: 150, chooseFromLibraryButtonTitle: 'Choose from gallery',
};

export default function CreatePostScreen({navigation}) {
    const [imageUri, setImageUri] = useState(null);
    const [image, setImage] = useState(null);
    const [postTitle, setPostTitle] = useState("");
    const [postContent, setPostContent] = useState("");
    const [postImage, setPostImage] = useState("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAkSURBVDhPY3jhY/ufGnjUIMJ41CDCeNQgwnjUIMJ42Bpk+x8AsVZtrnFMDcMAAAAASUVORK5CYII=");
    const url1 = useSelector((store) => store.url.url);
    const id = useSelector((store) => store.userID.userID);
    //console.log("______________________1");
    //console.log(url1 +"/api/cmis/communities/" + id + "/posts");
    //console.log("______________________2");

    const createPost = () => {
    fetch(url1 +"/api/cmis/communities/" + id + "/posts", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: postTitle, text: postContent, image: base64string, visibility: "PUBLIC" }),
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
    };

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
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
        
        
        
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity onPress={createPost} style={{borderWidth:2,borderColor:'rgba(84,70,115,1)',height:height*0.075, backgroundColor:'white', justifyContent:'center', borderRadius:5, top:10}}>
         <View style={{width:width*0.3, alignItems:'center'}}> 
              <Text style={{fontSize: RFValue(13,580), color:'rgba(84,70,115,1)'}}> Görüntü Ekle</Text>
          </View>
        </TouchableOpacity>
        
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, top:20 }} />}

      <Image
        style={{width: 200, height: 200, top:20}}
        source={{
          uri: `data:${base64string}`,
        }}
      />
        </View>

      
    </View>
  )
}