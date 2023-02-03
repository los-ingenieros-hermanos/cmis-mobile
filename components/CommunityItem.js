import { View, Text, TouchableOpacity,Dimensions, Image} from 'react-native'
import React, { useEffect } from 'react'
import { useState } from 'react';
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector, useDispatch } from 'react-redux';
import {setDesiredProfileID} from '../redux/actions/desiredProfileAction';

const { width, height } = Dimensions.get('window');


export default function CommunityItem({data,nav}) {
    const [selected, setSelected] = useState(false);    
    const [followed, setFollowed] = useState("false");
    const [joined, setJoined] = useState("false");
    const [backcolor, setBackcolor] = useState('white');
    const userRole = useSelector((store) => store.userID.userRole);
    const userID = useSelector((store) => store.userID.userID);
    const url1 = useSelector((store) => store.url.url);

    const dispatch = useDispatch();
    const defaultPP = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAFElEQVQYlWNkuLiJAQkwMaACUvkAdxgBjXva0XwAAAAASUVORK5CYII=";

    useEffect(() => {
        if(userRole=="ROLE_STUDENT" && userID>1){
            console.log(url1 +'/api/cmis/students/'+userID+"/isMemberOf/"+data.id);
            
            fetch(url1 +'/api/cmis/students/'+userID+"/isMemberOf/"+data.id,{
                method: 'GET'
                })
                  .then((response) => response.json())
                  .then((responseJson) => {
                    result = JSON.stringify(responseJson);
                    //setCommunities(JSON.parse(communitiesJson));
                    console.log("================================== 06");
                    console.log("result : " + result);
                    setJoined(result);
                    console.log("================================== 07");
                })
                .catch((error) => {
                  console.error(error);
                });

            fetch(url1 +'/api/cmis/students/'+userID+"/isFollowerOf/"+data.id,{
                    method: 'GET'
                    })
                      .then((response) => response.json())
                      .then((responseJson) => {
                        result = JSON.stringify(responseJson);
                        //setCommunities(JSON.parse(communitiesJson));
                        console.log("================================== 08");
                        console.log("result : " + result);
                        setFollowed(result);
                        console.log("================================== 09");
                    })
                    .catch((error) => {
                      console.error(error);
                    });   
        }



    }, []);

    const handleClicked = () => {
        console.log(data.id);
        if(selected === true){
            setSelected(false);
            setBackcolor('white');
        }
        else{
            setSelected(true);
            setBackcolor('rgba(208,210,242,0.2)');
        }
    };

    const handleFollowButton = () => {
        if(followed === "true"){
            fetch(url1 +"/api/cmis/students/"+userID+"/followingCommunities/"+data.id, {
                method: 'DELETE',
                headers: {
                        'Content-Type': 'application/json',
                },
                });
            
                setFollowed("false");
        }
        else{
            fetch(url1 +"/api/cmis/students/"+userID+"/followingCommunities", {
                method: 'POST',
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ id:data.id}),
                })
                .then((res) => res.json())
                .then((responseJson) => {})
                .catch((err) => {console.log(err.message);});
            
                setFollowed("true");
        }
    };

    const handleJoinButton = () => {
        if(joined === "true"){
            // topluluktan çık
            fetch(url1 +"/api/cmis/communities/"+data.id+"/members/"+userID, {
                method: 'DELETE',
                headers: {
                        'Content-Type': 'application/json',
                },
                });
            
            setJoined("false");
        }
        else{
            //topluluğa başvur
            fetch(url1 +"/api/cmis/communities/"+data.id+"/apply/"+userID, {
                method: 'POST',
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ }),
                })
                .then((res) => res.json())
                .then((responseJson) => {})
                .catch((err) => {console.log(err.message);});
            
        }
    };

    const handleGoToProfileButton = () => {
        dispatch(setDesiredProfileID(data.id));
        nav.navigate('CommunityProfileView');
    };


  
    return (

        data.id != userID ? (
        <View>         
            <View>
                <TouchableOpacity onPress={() => handleClicked()} style={{flexDirection:'column'}}> 

                <View style={{backgroundColor: selected ? 'rgba(168,152,203,1)' : 'white', height:height*0.07, width:(width*0.95), flexDirection:'row', 
                    marginVertical:5, paddingLeft:10, paddingRight:10,
                    alignItems:'center',borderRadius:6, alignSelf:'flex-start',
                    borderColor:'rgba(208,210,242,0.2)',
                    borderTopWidth:0, borderLeftWidth:0, borderRightWidth:0,
                    borderBottomWidth:3
                    }}>
                    
                    <View style={{ flexDirection:'row', width:width*0.80, alignItems:'center'}}>
                        <View style={{borderWidth:1, borderRadius:1000, borderColor:'rgba(208,210,242,0.2)'}}>
                            <Image source={{uri: `${data.image ? data.image : defaultPP}` }} style={{ width: 35, height: 35, borderRadius: 100 }}/>
                        </View>
                        <Text style={{paddingLeft:10, fontSize:15, fontWeight:'500', letterSpacing:0.5, color: selected ? 'white' : 'black'}}>{data.name}</Text>
                    </View>     
                    
                    <View style={{flexDirection:'row'}}>
                        {followed === "true" && (<AntDesign name="check" size={24} color="black"/>)}
                        {joined === "true" && (<MaterialCommunityIcons name="bell-check-outline" size={24} color="black" />)}      
                    </View>
                </View>      
            </TouchableOpacity>

            {selected === true && (
                <View style={{position:'relative',height:30, flexDirection:'row', justifyContent:'space-evenly',}}> 
                    <TouchableOpacity onPress={() => handleGoToProfileButton()} style={{backgroundColor:'rgba(208,210,242,1)', marginHorizontal:'0%' ,width:'30%',borderRadius:5, justifyContent:'center'}}>
                        <View >
                            <Text style={{color:'rgba(84,70,115,1)', textAlign:'center'}}> Profili Görüntüle</Text>
                        </View>
                       
                    </TouchableOpacity>

                    {userRole == "ROLE_STUDENT" && (
                        
                        <TouchableOpacity onPress={() => handleFollowButton()} style={{backgroundColor:'rgba(208,210,242,1)', marginHorizontal:'0%' ,width:'25%',borderRadius:5, justifyContent:'center'}}>
                        {followed === "true" && (<View > 
                            <Text style={{color:'rgba(84,70,115,1)', textAlign:'center'}}> Takipten Çık</Text>
                        </View>)}
                        {followed === "false" && (<View > 
                            <Text style={{color:'rgba(84,70,115,1)', textAlign:'center'}}> Takip Et</Text>
                        </View>)}</TouchableOpacity>
                    )}

                    {userRole == "ROLE_STUDENT" && (
                        
                        <TouchableOpacity onPress={() => handleJoinButton()} style={{backgroundColor:joined === 'true' ? 'rgba(187,58,58,1)' : (joined === 'false' ? 'rgba(208,210,242,1)' : 'white'), marginHorizontal:'0%' ,width:'25%',borderRadius:5, justifyContent:'center'}}>
                        {joined === "true" && (<View > 
                            <Text style={{color:'white', textAlign:'center'}}> Ayrıl</Text>
                        </View>)}
                        {joined === "false" && (<View > 
                            <Text style={{color:'rgba(84,70,115,1)', textAlign:'center'}}> Katıl</Text>
                        </View>)}</TouchableOpacity>
                    )}
                    
                    {userRole == "ROLE_COMMUNITY" && (
                        <TouchableOpacity disabled={true} style={{backgroundColor:'rgba(204,204,204,1)', marginHorizontal:'0%' ,width:'25%',borderRadius:5, justifyContent:'center'}}>
                            <View > 
                                <Text style={{color:'white', textAlign:'center'}}> Takip Et</Text>
                            </View>                      
                        </TouchableOpacity>
                    )}

                    
                    {userRole == "ROLE_COMMUNITY" && (
                        <TouchableOpacity disabled={true} style={{backgroundColor:'rgba(204,204,204,1)', marginHorizontal:'0%' ,width:'25%',borderRadius:5, justifyContent:'center'}}>
                            <View > 
                                <Text style={{color:'white', textAlign:'center'}}> Katıl</Text>
                            </View>                      
                        </TouchableOpacity>
                        
                    )}    
                        
                </View>
                )}
            
            </View>                                  
        </View> ) : null          
  );
};