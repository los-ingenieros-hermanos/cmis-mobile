import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import TopBar from '../../components/TopBar';
import { ScrollView } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Feather } from '@expo/vector-icons';
import Post from '../../components/Post';
import { Dimensions } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const { width, height } = Dimensions.get('window');

const ImageOptions = {
  title: 'select image', storageOptions: {skipBackup: true, path: 'images'},
  maxWidth: 150, maxHeight: 150, chooseFromLibraryButtonTitle: 'Choose from gallery',
};

export default function UserProfileScreen({navigation}) {
  
  ImageUpload = () => {
    console.log('UPLOADImage====')
    ImagePicker.showImagePicker(ImageOptions, (response) => {
        console.log('Image Response = ', response);
        if (response.didCancel) {
            console.log('User cancelled image picker');
        } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
        } else {
            const source = {filename: response.fileName, type: response.type, uri: response.fileSize};
            const self = this;
            const userId = '';
            console.log('source', source)

            let formData = new FormData();
            formData.append("filename", source);

            
        }
    });
  };
   
  return (
      <View style={{flex:1}}>
              <TopBar navigation={navigation}/>
              <ScrollView style={{ backgroundColor:'rgba(240,242,245,1)'}}> 
              
              
              <View style={{width:'100%', height:height*0.55}}> 
                <Image style={{resizeMode:'cover', width:width, height:height*0.25, overflow:'hidden'}} source={require('../../storage/images/geekday.png')} />

                  <View style={{flexDirection:'row', height:height*0.085, width:width*0.9}}> 
                      
                      <View style={{top:-height*0.075, left:width*0.05, flexDirection:'row'}}>
                        <Image style={{borderWidth:7 ,borderColor:'rgba(240,242,245,1)',resizeMode:'cover', width:height*0.15, height:height*0.15,borderRadius:1000}} source={require('../../storage/images/pp_image.png')} />
                      </View>

                      <View style={{left:width*0.05}}>
                         <Text style={{top:5,textAlign:'center',width:width*0.60,fontSize: RFValue(16, 580),color:'rgba(43,31,71,1)', fontWeight:'600'}}> Ersel Celal Eren</Text>
                      </View>


                      
                      {/* <TouchableOpacity style={{marginRight:10,marginTop:5}}> 
                          <Entypo name="mail-with-circle" size={50} color="rgba(84,70,115,1)" />
                      </TouchableOpacity> */}
                  </View>

                  <View style={{backgroundColor:'rgba(240,242,245,1)',height:height*0.04, flexDirection:'row', justifyContent:'space-evenly', marginHorizontal:5}}>
                      <TouchableOpacity onPress={() => navigation.navigate("Applications")} style={{justifyContent:'center', alignItems:'center',marginHorizontal:5,backgroundColor:'rgba(84,70,115,1)', borderRadius:5, width:'30%'}}>
                        <Text style={{color:'white',fontSize: RFValue(13, 580)}}>Başvurular</Text>
                      </TouchableOpacity>
                      
                      <TouchableOpacity onPress={() => navigation.navigate("UserList")} style={{justifyContent:'center', alignItems:'center',marginHorizontal:5,backgroundColor:'rgba(84,70,115,1)', borderRadius:5, width:'20%'}}>
                        <Text style={{color:'white',fontSize: RFValue(13, 580)}}>Üyeler</Text>
                      </TouchableOpacity>
                      
                      <TouchableOpacity style={{justifyContent:'center', alignItems:'center',marginHorizontal:5,backgroundColor:'rgba(84,70,115,1)', borderRadius:5, width:'30%'}}>
                        <Text style={{color:'white',fontSize: RFValue(13, 580)}}>Etkinlikler</Text>
                      </TouchableOpacity>
                      
                      <TouchableOpacity onPress={ImageUpload} style={{justifyContent:'center', alignItems:'center',marginHorizontal:5,backgroundColor:'rgba(84,70,115,1)', borderRadius:5, width:'10%'}}>
                      <Feather name="edit" size={RFValue(13, 580)} color="white" />
                      </TouchableOpacity>
                  </View>
              
                    <View style={{backgroundColor:'white',top:5,shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2, elevation: 5, height:height*0.15, borderRadius:10, width:'96%', alignSelf:'center'}}>
                      <Text numberOfLines={3}  style={{marginHorizontal:'5%',
                                                        marginTop:'1%',
                                                        color:'rgba(51,51,51,1)', 
                                                        fontSize:RFValue(13, 580),
                                                        fontWeight:'300',
                                                        lineHeight:height*0.027,
                                                        height:height*0.1, width:'85%'}}> Kulüp açıklaması. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in egestas erat, in aliquet metus. Praesent porta quis nunc eu elerisque. Sed id nulla venenatis tortor euismod imperdiet ac sed augue.</Text>
                    </View>
              
              </View>
              
              

              
                  <Post />
                  
                
              </ScrollView>
        </View>
     
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(217,217,217,1)",
  },
  scrollView: {
    backgroundColor: "rgba(217,217,217,1)",
  },
  text: {
    fontSize: 42,
  },
});