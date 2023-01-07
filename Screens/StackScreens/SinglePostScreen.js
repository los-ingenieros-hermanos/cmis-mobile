import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, Dimensions, BackHandler } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useEffect } from "react";
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
// get dimensions of the screen
const { width, height } = Dimensions.get("window");

const SinglePostScreen = (props) => {
  const [postData, setPostData] = useState(props.route.params.data);
  const navigation = props.navigation;
  const tr = props.route.params.tr;      
  const [like, setLike] = useState(false);
  const userID = useSelector((store) => store.userID.userID);
  const [join, setJoin] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const url1 = useSelector((store) => store.url.url);
  const [showView, setShowView] = useState(true);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
    };
    BackHandler.removeEventListener(
      'hardwareBackPress',
      handleBackButtonClick,
    );

    return () => backHandler.remove();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      setLikeCount(postData.likeCount);
  }, [])
  );

  const handleLike = async () => {
    console.log("Like clicked");
    
    fetch(url1 +'/api/cmis/students/'+userID+"/posts/"+postData.id+"/like", {
      method: 'POST'
      })
      .then((response) => response.json())
      .then((responseJson) => {
        if(like==true){
          postData.likeNum = postData.likeNum - 1;
        }
        else{
          postData.likeNum = postData.likeNum + 1;
        }

        setLikeCount(responseJson.likeNum);    
    })
    .catch((error) => {
      console.error(error);
    });
    setLike(!like);
  };

  const handleBackButtonClick = () => {
      console.log("Back button is pressed");
      tr("SINGLEPOST BACK BUTTON");
      navigation.goBack();
  };

  function handleTag(tag){
    // TAG_ART, TAG_BIOLOGY, TAG_DRONE, TAG_CHEMISTRY, TAG_COMPUTER, TAG_ENGINEERING, TAG_ENTERTAINMENT, TAG_FOOD, TAG_GAMING, TAG_LITERATURE, TAG_MATH, TAG_MUSIC, TAG_PHILOSOPHY
    // TAG_PHYSICS, TAG_ROBOT, TAG_SCIENCE, TAG_SOCIAL, TAG_SPORT, TAG_TEAM
    if(tag=="TAG_ART"){
      return "Art";
    }
    else if(tag=="TAG_BIOLOGY"){
      return "Biology";
    }
    else if(tag=="TAG_DRONE"){
      return "Drone";
    }
    else if(tag=="TAG_CHEMISTRY"){
      return "Chemistry";
    }
    else if(tag=="TAG_COMPUTER"){
      return "Computer";
    }
    else if(tag=="TAG_ENGINEERING"){
      return "Engineering";
    }
    else if(tag=="TAG_ENTERTAINMENT"){
      return "Entertainment";
    }
    else if(tag=="TAG_FOOD"){
      return "Food";
    }
    else if(tag=="TAG_GAMING"){
      return "Gaming";
    }
    else if(tag=="TAG_LITERATURE"){
      return "Literature";
    }
    else if(tag=="TAG_MATH"){
      return "Math";
    }
    else if(tag=="TAG_MUSIC"){
      return "Music";
    }
    else if(tag=="TAG_PHILOSOPHY"){
      return "Philosophy";
    }
    else if(tag=="TAG_PHYSICS"){
      return "Physics";
    }
    else if(tag=="TAG_ROBOT"){
      return "Robot";
    }
    else if(tag=="TAG_SCIENCE"){
      return "Science";
    }
    else if(tag=="TAG_SOCIAL"){
      return "Social";
    }
    else if(tag=="TAG_SPORT"){
      return "Sport";
    }
    else if(tag=="TAG_TEAM"){
      return "Team";
    }

  }

  return (
    
    <View style={{ paddingBottom:65}}>
      <View style={{backgroundColor:'white', height:height*0.08, justifyContent:'flex-end', borderBottomWidth:2, borderBottomColor:'rgba(84,70,115,1)'}}> 
        <TouchableOpacity onPress={() => navigation.goBack()} style={{left:10,top:5}}>
          <Ionicons name="arrow-back" size={45} color="black" />
        </TouchableOpacity>
      </View>
      

          <View style={{borderBottomColor: "rgba(84,70,115,1)", borderBottomWidth: 2, backgroundColor: "white",marginBottom: 10}}>
            <View style={{flexDirection: "row",alignItems: "center",justifyContent: "space-between",padding: 7,paddingLeft: 12,}}>
              
              <View style={{flexDirection: "row", alignItems: "center" }}>
                <Image source={{uri: `${postData.community.image}`}} style={{ width: 40, height: 40, borderRadius: 100 }}/>
                

                <View style={{ paddingLeft: 5}}>
                    <Text style={{fontSize: 16,fontWeight: "bold"}}>{postData.community.user.firstName}</Text>
                    
                    <View style={{height:15, flexDirection:'row'}}>
                        <View style={{backgroundColor:'rgba(208,210,242,1)', height:15, borderRadius:10, alignItems:'center',justifyContent:'center'}}> 
                            <Text style={{color:'black', fontSize:10}}> {handleTag(postData.community.tags[0].tag)} </Text>
                        </View>
                        <Text style={{color:'gray', fontSize:12}}> {postData.date.day}-{postData.date.month}-{postData.date.year}</Text>
                    </View>
                  </View>
              </View>
            
            </View>

            <View // Post Image
              style={{position: "relative",justifyContent: "center",alignItems: "center",}}>
              <Image source={{uri: `${postData.image}`}} style={{ width: '100%', height: 300}}/>
            </View>

            <View style={{paddingHorizontal: 10 }}>
              <Text
                style={{ fontWeight: "700", fontSize: 20, paddingVertical: 0 }}
              >
                {postData.title}
                
              </Text>
            </View>

            <View style={{paddingHorizontal: 15, justifyContent: "center"}}>
              <Text style={{fontWeight: "700",fontSize: 14,paddingVertical: 2}}>
                {postData.text}
              </Text>
              
              {postData.event[0] && 
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  <View style={{paddingBottom: 5,top:3,flexWrap: "wrap",backgroundColor: "rgba(84,70,115,1)",flexDirection:'row',alignItems:'center',
                          borderRadius:20,padding:5,paddingLeft:10,display: "flex",justifyContent:'center',}}>
                    {<AntDesign name="calendar" size={24} color="white" marginRight={10}/>}
                    <Text style={{color: "white", textAlign: "center"}}>
                      {postData.event[0].date.day}.{postData.event[0].date.month}.{postData.event[0].date.year} - {postData.event[0].date.hour}:{postData.event[0].date.minute}
                    </Text>
                    
                  </View>
                  <View style={{ alignItems:'center', flexDirection:'row', display: "flex"}}>
                    
                    <TouchableOpacity onPress={() => setJoin(!join)} style={{flexDirection:'row'}}>
                    <Text style={{fontWeight:'500'}}><AntDesign name={"plus"} size={24} color="black"/></Text>
                      
                      <Text style={{ fontWeight:'500', letterSpacing:1, fontSize:16}}>
                      Katıl
                      </Text>
                    </TouchableOpacity>

                    </View>
                </View>
              }
            
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={{marginTop:5,flex: 1,height: 1.8,backgroundColor: "rgba(127,127,127,0.5)"}}/>
              </View>

              <View style={{flexDirection: "row",justifyContent: "flex-start",alignItems: "baseline"}}>
                <View style={{ flexDirection: "row", flex: 1 }}>
                  
                  <Text style={{marginRight: 15,fontWeight: "bold",letterSpacing: 1,paddingTop: 5}}>
                    {/* {like ? data.likes + 1 : data.likes} beğeni */}
                    {postData.likeNum} beğeni
                  </Text>
                  
                  {postData.event[0] &&
                  <Text style={{marginRight: 10,fontWeight: "bold",letterSpacing: 1,paddingTop: 5,}}>
                    37 katılım
                  </Text>
                  }
                
                </View>

                <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
                  <TouchableOpacity onPress={handleLike}>
                    <AntDesign  name={like ? "like1":"like2"} 
                                style={{fontSize: 22,
                                color: like ? "rgba(84,70,115,1)" : "black" , paddingTop: 5}}/>
                  </TouchableOpacity>
                                   
                </View>

              </View>
            </View>

            
          </View>
        
     
    </View>
  );
};

export default SinglePostScreen;
