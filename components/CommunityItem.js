import { View, Text, Touchable, TouchableOpacity,Dimensions} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import ProfilePicture from 'react-native-profile-picture';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const { width, height } = Dimensions.get('window');
// get screen width
const getWidth = () => Dimensions.get('window').width;


export default function UserSearchItem({name}) {
    const [selected, setSelected] = useState(false);
    const navigation = useNavigation();
    
    const [followed, setFollowed] = useState(false);
    const [joined, setJoined] = useState(false);

    const handleClicked = () => {
        if(selected === true){setSelected(false);}
        else{setSelected(true);}
    };

    const handleFollowButton = () => {
        if(followed === true){setFollowed(false);}
        else{setFollowed(true);}
    };

    const handleJoinButton = () => {
        if(joined === true){setJoined(false);}
        else{setJoined(true);}
    };


  
    return (
    <View>
            <TouchableOpacity onPress={() => handleClicked()} style={{flexDirection:'column'}}> 

            <View style={{backgroundColor:'white', height:height*0.07, width:(width*0.95), flexDirection:'row', 
                marginVertical:5, paddingLeft:10, paddingRight:10,
                alignItems:'center',borderRadius:6, alignSelf:'flex-start',
                borderColor:'rgba(208,210,242,0.2)',
                borderTopWidth:0, borderLeftWidth:0, borderRightWidth:0,
                borderBottomWidth:3
                }}>
                
                <View style={{ flexDirection:'row', width:width*0.80, alignItems:'center'}}>
                    <View style={{borderWidth:1, borderRadius:1000, borderColor:'rgba(208,210,242,0.2)'}}>
                        <ProfilePicture isPicture={true} requirePicture={require('../storage/topluluk.png')} shape='circle' width={35} height={35}/>
                    </View>
                    <Text style={{paddingLeft:10, fontSize:15, fontWeight:'500', letterSpacing:0.5}}>GTÜ Topluluk Takım 1</Text>
                </View>     
                
                <View style={{flexDirection:'row'}}>
                    {followed === true && (<AntDesign name="check" size={24} color="black"/>)}
                    {joined === true && (<MaterialCommunityIcons name="bell-check-outline" size={24} color="black" />)}      
                </View>
            </View>

            
            </TouchableOpacity>

            {selected === true && (
                <View style={{position:'relative',height:30, flexDirection:'row', justifyContent:'center'}}> 
                    
                    <TouchableOpacity onPress={() => handleFollowButton()} style={{backgroundColor:'rgba(208,210,242,1)', marginHorizontal:'3%' ,width:'30%',borderRadius:5, justifyContent:'center'}}>
                        {followed === true && (<View > 
                            <Text style={{color:'rgba(84,70,115,1)', textAlign:'center'}}> Takipten Çık</Text>
                        </View>)}
                        {followed === false && (<View > 
                            <Text style={{color:'rgba(84,70,115,1)', textAlign:'center'}}> Takip Et</Text>
                        </View>)}                       
                    </TouchableOpacity>
                    
                    {joined === false && (<TouchableOpacity onPress={() => handleJoinButton()} style={{backgroundColor:'rgba(84,70,115,1)',marginHorizontal:'3%', width:'30%',borderRadius:5, justifyContent:'center'}}>
                            
                            <View > 
                                <Text style={{color:'white', textAlign:'center'}}> Katıl</Text>
                            </View> 
                    </TouchableOpacity>)}
                    {joined === true && (<TouchableOpacity onPress={() => handleJoinButton()} style={{backgroundColor:'rgba(187,58,58,1)',marginHorizontal:'3%', width:'30%',borderRadius:5, justifyContent:'center'}}>

                            <View >
                                <Text style={{color:'white', textAlign:'center'}}> Ayrıl</Text>
                            </View> 
                    </TouchableOpacity>)}
                </View>
                )}
    </View>
  )
}