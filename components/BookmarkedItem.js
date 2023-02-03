import { View, Text,TouchableOpacity,Dimensions, Image} from 'react-native'
import React from 'react'
import { useState } from 'react';
import { RFValue } from "react-native-responsive-fontsize";
import { useSelector} from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import { fetch_delete } from '../fetch';

const { width, height } = Dimensions.get('window');

export default function UserSearchItem({data,nav,tr}) {

    const [selected, setSelected] = useState(false);
    const url1 = useSelector((store) => store.url.url);
    const userID = useSelector((store) => store.userID.userID);
    const dummyImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88OjpfwAI+QOoF8YQhgAAAABJRU5ErkJggg==";
    
    const handleClicked = () => {
        if(selected === true){setSelected(false);}
        else{setSelected(true);}  
    };

    const handleGoToPost = () => {
        nav.navigate('SinglePostScreen', {data});
    };

    const handleBookmark = async () => {
        await fetch_delete(url1 +'/api/cmis/students/'+userID+"/bookmarkedPosts/"+data.id);   
        setSelected(false);
        tr("");
    };

    useFocusEffect(
        React.useCallback(() => {
            setSelected(false);
        }, [])
    );


  
    return (
    <View>
            <TouchableOpacity onPress={() => handleClicked()} style={{flexDirection:'column'}}> 
            <View style={{backgroundColor: selected ? 'rgba(168,152,203,1)' : 'white', height:height*0.11, width:(width*0.95), flexDirection:'row', 
                        marginVertical:5, paddingLeft:10, paddingRight:10,alignItems:'center',borderRadius:6, alignSelf:'flex-start',
                        borderColor:'rgba(208,210,242,0.2)',borderTopWidth:0, borderLeftWidth:0, borderRightWidth:0,borderBottomWidth:3
                        }}>
                
                <View style={{ flexDirection:'row', width:width*0.90}}>
                    
                    <View style={{}}>
                        <Image source={{uri: `${data.image ? data.image : dummyImage}`}} style={{ width: 70, height: 70, borderRadius: 10 }}/>
                    </View>
                    
                    <View>
                        <Text style={{paddingLeft:10, fontSize:RFValue(13, 580), fontWeight:'500', letterSpacing:0.5, color: selected ? 'white' : 'black',}}>{data.title}</Text>
                            
                            <Text numberOfLines={3}  style={{color:'rgba(51,51,51,1)', color: selected ? 'white' : 'black',
                                                            fontSize:RFValue(10, 580),fontWeight:'300',
                                                            width:width*0.75, paddingLeft:10}}> 
                                 {data.text}
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
                    
                    
                            
                    <TouchableOpacity onPress={() => handleBookmark()} style={{backgroundColor:'rgba(73,72,95,1)', marginHorizontal:'3%' ,width:width*0.4,borderRadius:5, justifyContent:'center'}}>
                        <View > 
                            <Text style={{color:'white', textAlign:'center'}}> Kaydedilenlerden Çıkar</Text>
                        </View>                    
                    </TouchableOpacity>
                    
                   
                </View>
            )}
            
    </View>
  )
}