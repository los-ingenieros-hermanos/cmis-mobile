import { View, Text, Touchable, TouchableOpacity,Dimensions} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import ProfilePicture from 'react-native-profile-picture';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

// get screen width
const getWidth = () => Dimensions.get('window').width;


export default function UserSearchItem(props) {
    const [selected, setSelected] = useState(false);
    const navigation = useNavigation();
    
    handleClicked = () => {
        if(selected === true){setSelected(false);}
        else{setSelected(true);}
        console.log(props.name);
    };
  
    return (
    <View>
            <TouchableOpacity onPress={() => handleClicked()} style={{flexDirection:'column'}}> 

            <View style={{backgroundColor:'white', height:50, width:(getWidth()*0.95), flexDirection:'row', 
                marginVertical:5, paddingLeft:10, paddingRight:10,
                alignItems:'center',borderRadius:6, alignSelf:'flex-start' }}>

                <View style={{ flexDirection:'row', width:'95%', alignItems:'center'}}>
                <ProfilePicture isPicture={true} requirePicture={require('../storage/images/pp_image.png')} shape='circle' width={35} height={35}/>
                <Text style={{paddingLeft:10, fontSize:15, fontWeight:'500', letterSpacing:0.5}}>Ersel Celal Eren</Text>
                </View>
                <View style={{}}>
                <Ionicons name="close" size={24} color="black" style={{}}/>
                </View>

                
            </View>

            
            </TouchableOpacity>

            {selected === true && (
                <View style={{position:'relative',height:30, flexDirection:'row', justifyContent:'space-around'}}> 
                    
                    <TouchableOpacity style={{backgroundColor:'rgba(208,210,242,1)', width:'30%', borderRadius:5, justifyContent:'center'}}>
                        <View style={{}}> 
                            <Text style={{color:'rgba(84,70,115,1)', textAlign:'center'}}> Görev Ver</Text>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={{backgroundColor:'rgba(208,210,242,1)', width:'30%',borderRadius:5, justifyContent:'center'}}>
                        <View > 
                            <Text style={{color:'rgba(84,70,115,1)', textAlign:'center'}}> Yetki Ver</Text>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={{backgroundColor:'rgba(187,58,58,1)', width:'30%',borderRadius:5, justifyContent:'center'}}>
                        <View > 
                            <Text style={{color:'white', textAlign:'center'}}> Kulüpten Çıkar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                )}
    </View>
  )
}