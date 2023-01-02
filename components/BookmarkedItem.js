import { View, Text, Touchable, TouchableOpacity,Dimensions, Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import ProfilePicture from 'react-native-profile-picture';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import TopBar from './TopBar';
const { width, height } = Dimensions.get('window');
// get screen width
const getWidth = () => Dimensions.get('window').width;


export default function UserSearchItem({name}) {
    const navigation = useNavigation();

    const [selected, setSelected] = useState(false);
    const [backcolor, setBackcolor] = useState('white');

    const handleClicked = () => {
        if(selected === true){
            setSelected(false);
            setBackcolor('white');
        }
        else{
            setSelected(true);
            setBackcolor('rgba(208,210,242,0.2)');
        }
        
    };

    const handleGoToPost = () => {
        navigation.navigate('SinglePostScreen');
    };



  
    return (
    <View>
            <TouchableOpacity onPress={() => handleClicked()} style={{flexDirection:'column'}}> 

            <View style={{backgroundColor: selected ? 'rgba(168,152,203,1)' : 'white', height:height*0.11, width:(width*0.95), flexDirection:'row', 
                marginVertical:5, paddingLeft:10, paddingRight:10,
                alignItems:'center',borderRadius:6, alignSelf:'flex-start',
                borderColor:'rgba(208,210,242,0.2)',
                borderTopWidth:0, borderLeftWidth:0, borderRightWidth:0,
                borderBottomWidth:3
                }}>
                
                <View style={{ flexDirection:'row', width:width*0.90}}>
                    
                    <View style={{}}>
                        <Image source={require('../storage/images/post1.jpg')} style={{width:70, height:70, borderRadius:10}}/>
                    </View>
                    
                    <View>
                        <Text style={{paddingLeft:10, fontSize:15, fontWeight:'500', letterSpacing:0.5, color: selected ? 'white' : 'black',}}>Post Title</Text>
                            
                            <Text numberOfLines={3}  style={{color:'rgba(51,51,51,1)', color: selected ? 'white' : 'black',
                                                            fontSize:RFValue(10, 580),fontWeight:'300',
                                                            width:width*0.75, paddingLeft:10}}> 
                                 Kulüp açıklaması. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                 Cras in egestas erat, in aliquet metus. Praesent porta quis nunc eu elerisque. 
                                 Sed id nulla venenatis tortor euismod imperdiet ac sed augue.
                            </Text>
                    </View>  

                </View>  
            </View>

            
            </TouchableOpacity>
                                                            
            {selected === true && (
                <View style={{position:'relative',height:30, flexDirection:'row', justifyContent:'center'}}> 
                    
                    <TouchableOpacity onPress={() => handleGoToPost()} style={{backgroundColor:'rgba(150,150,241,1)', marginHorizontal:'3%' ,width:width*0.4,borderRadius:5, justifyContent:'center'}}>
                        <View > 
                            <Text style={{color:'white', textAlign:'center'}}> Gönderiyi Görüntüle </Text>
                        </View>                    
                    </TouchableOpacity>
                    
                    
                            
                    <TouchableOpacity onPress={() => handleFollowButton()} style={{backgroundColor:'rgba(73,72,95,1)', marginHorizontal:'3%' ,width:width*0.4,borderRadius:5, justifyContent:'center'}}>
                        <View > 
                            <Text style={{color:'white', textAlign:'center'}}> Kaydedilenlerden Çıkar</Text>
                        </View>                    
                    </TouchableOpacity>
                    
                   
                </View>
            )}
            
    </View>
  )
}