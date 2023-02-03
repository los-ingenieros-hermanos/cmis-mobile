import { View, Text, TouchableOpacity,Dimensions,Image} from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setDesiredProfileID } from '../redux/actions/desiredProfileAction';

const { width, height } = Dimensions.get('window');
const getWidth = () => Dimensions.get('window').width;


export default function UserSearchItem({data,testrefresh}) {
    const [selected, setSelected] = useState(false);
    const navigation = useNavigation();
    const url1 = useSelector((store) => store.url.url);
    const userID = useSelector((store) => store.userID.userID);
    const defaultPP = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAFElEQVQYlWNkuLiJAQkwMaACUvkAdxgBjXva0XwAAAAASUVORK5CYII=";
    
    const dispatch = useDispatch();


    useFocusEffect(
        React.useCallback(() => {
            setSelected(false);
      }, [])
      );


    const handleClicked = () => {
        if(selected === true){setSelected(false);}
        else{setSelected(true);}
    };

    const handleGiveAuth = () => {
        console.log("give auth");
    };

    const handleRemoveAuth = () => {
        console.log("remove auth");
    };

    const handleGoToProfile = async () => {
        console.log("Profile Git clicked");
        dispatch(setDesiredProfileID(data.id));
        navigation.navigate("UserProfileView");
    };

    const handleRemove = async () => {
        console.log("remove");
        await fetch(url1 +'/api/cmis/communities/'+userID+"/members/"+data.student.id, {
                method: 'DELETE',
                headers: {
                'Content-Type': 'application/json',
        },})

        testrefresh();
    };
  
    return (
    <View>
            <TouchableOpacity onPress={() => handleClicked()} style={{flexDirection:'column'}}> 

            <View style={{backgroundColor: selected ? 'rgba(195,183,223,1)' : 'white', height:height*0.07, width:(getWidth()*0.95), flexDirection:'row', 
                          marginVertical:5, paddingLeft:10, paddingRight:10,alignItems:'center',borderRadius:6, alignSelf:'flex-start',
                          borderColor:'rgba(208,210,242,0.2)',borderTopWidth:0, borderLeftWidth:0, borderRightWidth:0,borderBottomWidth:3}}>
                
                <View style={{ flexDirection:'row', width:'95%', alignItems:'center'}}>
                    <Image source={{uri: `${data.student.image ? data.student.image  : defaultPP}` }} style={{ width: 35, height: 35, borderRadius: 100 }}/>
                    <Text style={{paddingLeft:10, fontSize:15, fontWeight:'500', letterSpacing:0.5, color:selected ? 'white' : 'black'}}>{data.student.user.firstName} {data.student.user.lastName}</Text>
                </View>     
            </View>

            
            </TouchableOpacity>

            {selected === true && (
                <View style={{position:'relative',height:30, flexDirection:'row', justifyContent:'center'}}> 
                    <TouchableOpacity onPress={handleGoToProfile} style={{backgroundColor:'rgba(208,210,242,1)', marginHorizontal:'3%' ,width:'25%',borderRadius:5, justifyContent:'center'}}>
                        <View > 
                            <Text style={{color:'rgba(84,70,115,1)', textAlign:'center'}}> Profile Git</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleGiveAuth} style={{backgroundColor:'rgba(208,210,242,1)', marginHorizontal:'3%' ,width:'25%',borderRadius:5, justifyContent:'center'}}>
                        <View > 
                            <Text style={{color:'rgba(84,70,115,1)', textAlign:'center'}}> Yetki Ver</Text>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={handleRemove} style={{backgroundColor:'rgba(187,58,58,1)',marginHorizontal:'3%', width:'25%',borderRadius:5, justifyContent:'center'}}>
                        <View > 
                            <Text style={{color:'white', textAlign:'center'}}> Kulüpten Çıkar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                )}
    </View>
  )
}