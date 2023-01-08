import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, Dimensions, StyleSheet } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionic from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation,useFocusEffect } from '@react-navigation/native'
import { set } from "react-native-reanimated";

// get dimensions of the screen
const { width, height } = Dimensions.get("window");

const Post = (props) => {
  
  const ownID = useSelector((store) => store.userID.userID);
  const url1 = useSelector((store) => store.url.url);
  const [userObj, setUserObj] = useState(null);
  const defaultPP = useSelector((store) => store.userID.userProfileImage);
  const userRole = useSelector((store) => store.userID.userRole);
  const [bookmarked, setBookmarked] = useState(false);
  const [liked, setLiked] = useState(false);

  useFocusEffect(
  React.useCallback(() => {
    console.log("==================================111");
    console.log("props.id: "+props.id);
    console.log("==================================111");
    
    if(props.id =="-1"){
      fetch(url1 +'/api/cmis/posts', {
          method: 'GET'
          })
            .then((response) => response.json())
            .then((responseJson) => {
              let userStr = JSON.stringify(responseJson);
              setUserObj(JSON.parse(userStr));
              console.log("================================== 32");
              console.log(responseJson);
              console.log("================================== 33");
          })
          .catch((error) => {
            console.error(error);
          });
    }
    else{
      fetch(url1 +'/api/cmis/communities/'+props.id+ '/posts', {
          method: 'GET'
          })
            .then((response) => response.json())
            .then((responseJson) => {
              let userStr = JSON.stringify(responseJson);
              setUserObj(JSON.parse(userStr)); 
          })
          .catch((error) => {
            console.error(error);
          });
    }
 

  }, [])
  );

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
        {/* const [like, setLike] = useState(data.isLiked);
        const [bookmark, setBookmark] = useState(data.isBookmarked);
        const [join, setJoin] = useState(data.isJoined); */}
        
        {userObj && userObj.map((data, index) => {
          
         

          const handleBookmark = async (id) => {
            if(bookmarked==false){
            
            await fetch(url1 +"/api/cmis/students/"+ownID+"/bookmarkedPosts", {
              method: 'POST',
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ id: id }),
              })
              .then((res) => res.json())
              .then((responseJson) => {
                setBookmarked(true);
              })
              .catch((err) => {
                console.log(err.message);
              });
            }
            else{
                await fetch(url1 +"/api/cmis/students/"+ownID+"/bookmarkedPosts/"+id, {
                  method: 'DELETE',
                  headers: {
                  'Content-Type': 'application/json',
                  },})

                setBookmarked(false); 
            }
          };



          const handleLike = async (id) => {
        
              if(liked==true){setLiked(false);}
              else{setLiked(true);}
              
              await fetch(url1 +"/api/cmis/students/"+ownID+"/posts/"+id+"/like", {
                method: 'POST',
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ }),
                })
                .then((res) => res.json())
                .then((responseJson) => {
                })
                .catch((err) => {
                  console.log(err.message);
                });
            };  

        return (
          <View key={index} style={{paddingBottom: 0,borderBottomColor: "gray",borderBottomWidth: 0.1,backgroundColor: "white",marginBottom: 10,}}>
              <View style={{flexDirection: "row",alignItems: "center",justifyContent: "space-between",padding: 7,paddingLeft: 12,}}>
                
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image source={{uri: `${data.community.image ? data.community.image : defaultPP}` }} style={{ width: 40, height: 40, borderRadius: 100 }}/>
                  
                  <View style={{ paddingLeft: 5}}>
                    <Text style={{fontSize: 16,fontWeight: "bold"}}>{data.community.name}</Text>
                    
                    <View style={{height:15, flexDirection:'row'}}>
                        <View style={{backgroundColor:'rgba(208,210,242,1)', height:15, borderRadius:10, alignItems:'center',justifyContent:'center'}}> 
                            {data.community.tags[0] && <Text style={{color:'black', fontSize:10}}> {handleTag(data.community.tags[0].tag)} </Text>}
                        </View>
                        <Text style={{color:'gray', fontSize:12}}> {data.date.day}-{data.date.month}-{data.date.year}</Text>
                    </View>
                  </View>

                </View>

                
              </View>

            <View style={{position: "relative",justifyContent: "center",alignItems: "center",}}>
              <Image style={{width: "100%", height: 300}} source={{uri: `${data.image}`,}}/>
            </View>

            <View style={{ paddingHorizontal: 10 }}>
              <Text style={{ fontWeight: "700", fontSize: 20, paddingVertical: 0 }}> {data.title} </Text>
            </View>

            <View style={{paddingHorizontal: 15,flex: 1,justifyContent: "center",}}>
              
              <Text style={{fontWeight: "700",fontSize: 14,paddingVertical: 2,}}> {data.text} </Text>
              
              
              {data.event[0] && 
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  <View style={{paddingBottom: 5,top:3,flexWrap: "wrap",backgroundColor: "rgba(84,70,115,1)",flexDirection:'row',alignItems:'center',
                          borderRadius:20,padding:5,paddingLeft:10,display: "flex",justifyContent:'center',}}>
                    {<AntDesign name="calendar" size={24} color="white" marginRight={10}/>}
                    <Text style={{color: "white", textAlign: "center"}}>
                      {data.event[0].date.day}.{data.event[0].date.month}.{data.event[0].date.year} - {data.event[0].date.hour}:{data.event[0].date.minute}
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
                <View style={{marginTop:5,flex: 1,height: 1.8,backgroundColor: "rgba(127,127,127,0.5)",}}/>
              </View>
              
              

              <View style={{flexDirection: "row",justifyContent: "flex-start",alignItems: "baseline",}}>
                <View style={{ flexDirection: "row", flex: 1 }}>
                  <Text style={{marginRight: 15,fontWeight: "bold",letterSpacing: 1,paddingTop: 5}}>
                    {data.likeNum} beğeni
                  </Text>
                  
                  {data.event[0]&& 
                  <Text style={{marginRight: 10,fontWeight: "bold",letterSpacing: 1,paddingTop: 5,}}>
                    {data.event[0].attendantsNum} katılım
                  </Text>
                  }
                </View>
                
                <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
                  
                  {userRole =="ROLE_STUDENT" && 
                  <TouchableOpacity onPress={() => handleLike(data.id)}  >
                    <AntDesign
                      name={liked ? "like1" : "like2"}
                      style={{paddingRight: 10,fontSize: 22,color: liked ? "rgba(84,70,115,1)" : "black",paddingTop: 5,}}/>
                  </TouchableOpacity>
                  }
                  
                  {userRole =="ROLE_STUDENT" && 
                  <TouchableOpacity onPress={() => handleBookmark(data.id)} >
                    <MaterialCommunityIcons
                      name={bookmarked ? "bookmark-remove" :"bookmark-plus-outline" }
                      style={{ fontSize: 25, paddingRight: 5, paddingTop: 3 }}
                    />
                  </TouchableOpacity>
                  }

                </View>
              </View>
            </View>

            
          </View>
        );
        })}
      
      
    </View>
  );
};


const styles = StyleSheet.create({
  postContainer: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  text: {
    fontSize: 16,
    marginVertical: 8,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginVertical: 8,
  },
});

export default Post;
