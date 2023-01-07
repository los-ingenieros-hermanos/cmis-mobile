import { View, Text, Touchable, TouchableOpacity,Dimensions, Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';

// get screen width
const getWidth = () => Dimensions.get('window').width;
const getHeight = () => Dimensions.get('window').height;

export default function UserApplicationItem({data}) {
    
    const defaultPP = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAFElEQVQYlWNkuLiJAQkwMaACUvkAdxgBjXva0XwAAAAASUVORK5CYII=";
    const [selected, setSelected] = useState(false);
    const navigation = useNavigation();
    const url1 = useSelector((store) => store.url.url);
    const userID = useSelector((store) => store.userID.userID);
    const [refreshing, setRefreshing] = useState(false);


    useFocusEffect(
        React.useCallback(() => {
            setSelected(false);
      }, [])
      );

    const testRefresh = async (message) => {
        setRefreshing(true);
        setRefreshing(false);
      }

    const handleClicked = () => {
        if(selected === true){setSelected(false);}
        else{setSelected(true);}
    };
    
    const handleGoToProfile = async () => {
        console.log("Profile Git clicked");
        navigation.navigate("UserProfileView");
    };

    const handleAccept = async () => {
        console.log("Kabul Et clicked");
        fetch(url1 +"/api/cmis/communities/"+userID+"/memberApplications/"+data.student.id+"/accept" , {
            method: 'PUT',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(["NONE"]),
            })
            .then((res) => res.json())
            .then((result) => {
                console.log("(((((((((((((((((((((((((((((( 2");
                console.log(result);
                console.log("(((((((((((((((((((((((((((((( 3");
            })
            .catch((err) => {
              console.log(err.message);
            });
    };

    const handleDecline = async () => {
        console.log("Reddet clicked");
        console.log("Kabul Et clicked");
        fetch(url1 +"/api/cmis/communities/"+userID+"/memberApplications/"+data.student.id+"/reject" , {
            method: 'PUT',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(["NONE"]),
            })
            .then((res) => res.json())
            .then((result) => {
                console.log("(((((((((((((((((((((((((((((( 2");
                console.log(result);
                console.log("(((((((((((((((((((((((((((((( 3");
            })
            .catch((err) => {
              console.log(err.message);
            });
    };

    return (
    <View>
            <TouchableOpacity onPress={() => handleClicked()} style={{flexDirection:'column'}}> 

            <View style={{backgroundColor: selected ? 'rgba(195,183,223,1)' : 'white', height:getHeight()*0.07, width:(getWidth()*0.95), flexDirection:'row', 
                marginVertical:5, paddingLeft:10, paddingRight:10,
                alignItems:'center',borderRadius:6, alignSelf:'flex-start',borderColor:'rgba(208,210,242,0.2)',
                borderTopWidth:0, borderLeftWidth:0, borderRightWidth:0,
                borderBottomWidth:3 }}>
                
                <View style={{ flexDirection:'row', width:'95%', alignItems:'center'}}>
                    <Image source={{uri: `${data.student.image ? data.student.image  : defaultPP}` }} style={{ width: 35, height: 35, borderRadius: 100 }}/>
                    <Text style={{paddingLeft:10, fontSize:15, fontWeight:'500', letterSpacing:0.5, color:selected ? 'white' : 'black',}}>{data.student.user.firstName} {data.student.user.lastName}</Text>
                </View>     
            </View>

            
            </TouchableOpacity>

            {selected === true && (
                <View style={{position:'relative',height:30, flexDirection:'row', justifyContent:'center'}}> 
                    <TouchableOpacity onPress={handleGoToProfile} style={{backgroundColor:'rgba(150,150,241,1)', marginHorizontal:'2%' ,width:'28%',borderRadius:5, justifyContent:'center'}}>
                        <View > 
                            <Text style={{color:'white', textAlign:'center'}}> Profile Git</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleAccept} style={{backgroundColor:'rgba(148,222,151,1)', marginHorizontal:'2%' ,width:'28%',borderRadius:5, justifyContent:'center'}}>
                        <View > 
                            <Text style={{color:'white', textAlign:'center'}}> Kabul Et</Text>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={handleDecline} style={{backgroundColor:'rgba(187,58,58,1)',marginHorizontal:'2%', width:'28%',borderRadius:5, justifyContent:'center'}}>
                        <View > 
                            <Text style={{color:'white', textAlign:'center'}}> Reddet</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                )}
    </View>
  )
}