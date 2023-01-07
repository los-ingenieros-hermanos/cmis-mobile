import { View, Text, Touchable, TouchableOpacity,Dimensions, Image} from 'react-native'
import React from 'react'
import { useState } from 'react';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';


const { width, height } = Dimensions.get('window');
// get screen width
const getWidth = () => Dimensions.get('window').width;


export default function UserSearchItem({data,nav,tr}) {

    const [selected, setSelected] = useState(false);
    const [backcolor, setBackcolor] = useState('white');
    const url1 = useSelector((store) => store.url.url);
    const userID = useSelector((store) => store.userID.userID);
    const [refreshing, setRefreshing] = useState(false);

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
        nav.navigate('SinglePostScreen', {data,tr});
    };

    const handleBookmark = async () => {
        console.log("Bookmark clicked");
        await fetch(url1 +'/api/cmis/students/'+userID+"/bookmarkedPosts/"+data.id, {
                method: 'DELETE',
                headers: {
                'Content-Type': 'application/json',
        },})
        
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
                marginVertical:5, paddingLeft:10, paddingRight:10,
                alignItems:'center',borderRadius:6, alignSelf:'flex-start',
                borderColor:'rgba(208,210,242,0.2)',
                borderTopWidth:0, borderLeftWidth:0, borderRightWidth:0,
                borderBottomWidth:3
                }}>
                
                <View style={{ flexDirection:'row', width:width*0.90}}>
                    
                    <View style={{}}>
                        <Image source={{uri: `${data.image}`}} style={{ width: 70, height: 70, borderRadius: 10 }}/>
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