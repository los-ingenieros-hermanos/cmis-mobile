import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, Dimensions, StyleSheet } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector, useDispatch } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native'

const ProjectIdeas = (props) => {
  
  const ownID = useSelector((store) => store.userID.userID);
  const url1 = useSelector((store) => store.url.url);
  const [userObj, setUserObj] = useState(null);
  const defaultPP = useSelector((store) => store.userID.userProfileImage);
  const userRole = useSelector((store) => store.userID.userRole);
  const [bookmarked, setBookmarked] = useState(false);
  const [liked, setLiked] = useState(false);

  useFocusEffect(
  React.useCallback(() => {

    console.log("||||||||||||||||||||||||||||||||||||||||||||  3 "+props.id+ "  "+"||||||||||||||||||||||||||||||||||||||||||||  4");

    if(props.id =="-1"){
      fetch(url1 +'/api/cmis/projectidea', {
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
    else{
      fetch(url1 +'/api/cmis/students/'+props.id+ '/projectidea', {
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
        {userObj && userObj.map((data, index) => {
          
          const handleBookmark = async (id) => {
            if(bookmarked==false){
            
            await fetch(url1 +"/api/cmis/students/"+ownID+"/bookMarkedProjectIdeas", {
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
              
              await fetch(url1 +"/api/cmis/students/"+ownID+"/projectidea/"+data.id+"/like", {
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
          <View key={index} style={{paddingBottom: 3,borderBottomColor: "rgba(208,210,242,0.2)",borderBottomWidth: 0,backgroundColor: "white",marginBottom: 15,}}>
              <View style={{flexDirection: "row",alignItems: "center",justifyContent: "space-between",padding: 7,paddingLeft: 12,}}>
                
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image source={{uri: `${data.student.image ? data.student.image : defaultPP}` }} style={{ width: 40, height: 40, borderRadius: 100 }}/>
                  
                  <View style={{ paddingLeft: 5}}>
                    <Text style={{fontSize: 16,fontWeight: "bold",color:'black'}}>{data.student.firstName} {data.student.lastName}</Text>
                  </View>

                </View>    
              </View>

            <View style={{position: "relative",justifyContent: "center",alignItems: "center",}}>
              <Image style={{width: "100%", height: 300}} source={{uri: `${data.image}`,}}/>
            </View>

            <View style={{ paddingHorizontal: 10 }}>
              <Text style={{ fontWeight: "700", fontSize: 20, paddingVertical: 0,color:'black'}}> {data.title} </Text>
            </View>

            <View style={{paddingHorizontal: 15,flex: 1,justifyContent: "center",}}>
              
              <Text style={{fontWeight: "700",fontSize: 14,paddingVertical: 2,color:'black'}}> {data.text} </Text>
              
              
              

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={{marginTop:5,flex: 1,height: 1.8,backgroundColor: "rgba(127,127,127,0.5)",}}/>
              </View>
              
              

              <View style={{flexDirection: "row",justifyContent: "flex-start",alignItems: "baseline",}}>
                <View style={{ flexDirection: "row", flex: 1 }}>
                  <Text style={{marginRight: 15,fontWeight: "bold",letterSpacing: 1,paddingTop: 3,color:'black'}}>
                    {data.likeNum} beğeni
                  </Text>
                  
                  
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
                      style={{ fontSize: 25, paddingRight: 5, paddingTop: 3, color: bookmarked ? "rgba(84,70,115,1)" : "black" }}
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

export default ProjectIdeas;
