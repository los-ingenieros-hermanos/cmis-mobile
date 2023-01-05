import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, Dimensions, StyleSheet } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionic from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';





// get dimensions of the screen
const { width, height } = Dimensions.get("window");

const Post = () => {
  
  const id = useSelector((store) => store.userID.userID);
  const url1 = useSelector((store) => store.url.url);
  const [userObj, setUserObj] = useState(null);
  
  var testvalue;
  useEffect(() => {
  
    console.log("--------------------");
    fetch(url1 +'/api/cmis/posts/', {
        method: 'GET'
        })
          .then((response) => response.json())
          .then((responseJson) => {
            console.log(responseJson);
            let userStr = JSON.stringify(responseJson);
            setUserObj(JSON.parse(userStr));
            testvalue = JSON.parse(userStr);
            console.log("==================================6");
            console.log(testvalue[0].title);
            console.log(testvalue[1].title);
            console.log("==================================7");
            console.log(testvalue);
            console.log("==================================8");
            console.log(testvalue[0].community.image);
            console.log("==================================9");

        })
        .catch((error) => {
          console.error(error);
        });
  }, []);


 
  const postInfo = [
    {
      postTitle: "Ersel Eren",
      postPersonImage: require("../storage/images/profile1.jpg"),
      postImage: require("../storage/images/post1.jpg"),
      likes: 765,
      isLiked: false,
      isBookmarked: false,
      isEvent: true,
      isJoined: false,
    },
    {
      postTitle: "Celal Eren",
      postPersonImage: require("../storage/images/profile1.jpg"),
      postImage: require("../storage/images/post1.jpg"),
      likes: 765,
      isLiked: false,
      isBookmarked: false,
      isEvent: false,
      isJoined: false,
    },
    {
      postTitle: "Celal Eren",
      postPersonImage: require("../storage/images/profile1.jpg"),
      postImage: require("../storage/images/post1.jpg"),
      likes: 765,
      isLiked: false,
      isBookmarked: true,
      isEvent: false,
      isJoined: false,
    },
  ];

  return (
    <View style={{ paddingBottom:65, backgroundColor:'red'}}>
     
        {userObj && userObj.map((data, index) => {
        {/* const [like, setLike] = useState(data.isLiked);
        const [bookmark, setBookmark] = useState(data.isBookmarked);
        const [join, setJoin] = useState(data.isJoined); */}
        return (
          <View key={index} style={{paddingBottom: 0,borderBottomColor: "gray",borderBottomWidth: 0.1,backgroundColor: "white",marginBottom: 10,}}>
            <View style={{flexDirection: "row",alignItems: "center",justifyContent: "space-between",padding: 7,paddingLeft: 12,}}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image source={{uri: `${data.community.image}` }} style={{ width: 40, height: 40, borderRadius: 100 }}/>
                <View style={{ paddingLeft: 5 }}>
                  <Text style={{fontSize: 15,fontWeight: "bold",paddingBottom: 15,}}>{data.community.user.firstName}</Text>
                </View>
              </View>
              <Feather name="more-vertical" style={{ fontSize: 20 }} />
            </View>

            <View style={{position: "relative",justifyContent: "center",alignItems: "center",}}>
              
              <Image style={{width: "100%", height: 300}} source={{uri: `${data.image}`,}}/>
            </View>

            <View style={{ paddingHorizontal: 10 }}>
              <Text style={{ fontWeight: "700", fontSize: 20, paddingVertical: 0 }}> {data.title} </Text>
            </View>

            <View style={{paddingHorizontal: 15,flex: 1,justifyContent: "center",}}>
              
              <Text style={{fontWeight: "700",fontSize: 14,paddingVertical: 2,}}> {data.text} </Text>
              
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <View style={{paddingBottom: 5,flexWrap: "wrap",width: width * 0.6,backgroundColor: "rgba(84,70,115,1)",flexDirection:'row', alignItems:'center',
                            borderRadius:20,padding:5,paddingLeft:10,display: data.isEvent ? "flex" : "none",justifyContent:'center'}}>
                {<AntDesign name="calendar" size={24} color="white" marginRight={10}/>}
                <Text style={{color: "white", textAlign: "center"}}> 17 Kasım 2022 - 14.00-16.00{" "}</Text>

              </View>

                
              <View style={{ alignItems:'center', flexDirection:'row', display: data.isEvent ? "flex" : "none",}}>
                <TouchableOpacity /*onPress={() => setJoin(!join)}*/ style={{flexDirection:'row'}}>
                <Text style={{fontWeight:'500'}}><AntDesign name={/*join? "check" : "plus"*/ "plus"} size={24} color="black"/></Text>
                  
                  <Text style={{ fontWeight:'500', letterSpacing:1, fontSize:16}}>
                     {/*join ? "Katıldın" : "Katıl"*/ "Katıl"}
                  </Text>
                </TouchableOpacity>
              </View>
              </View>
            
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    marginTop:5,
                    flex: 1,
                    height: 1.8,
                    backgroundColor: "rgba(127,127,127,0.5)",
                  }}
                />
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "baseline",
                }}
              >
                <View style={{ flexDirection: "row", flex: 1 }}>
                  <Text
                    style={{
                      marginRight: 15,
                      fontWeight: "bold",
                      letterSpacing: 1,
                      paddingTop: 5,
                    }}
                  >
                  {/*like ? data.likes + 1 : data.likes*/} 27 beğeni
                  </Text>
                  <Text
                    style={{
                      marginRight: 10,
                      fontWeight: "bold",
                      letterSpacing: 1,
                      paddingTop: 5,
                    }}
                  >
                    37 katılım
                  </Text>
                </View>
                <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
                  <TouchableOpacity /*onPress={() => setLike(!like)} */ >
                    <AntDesign
                      name={/*like ? "like1" : "like2"*/ "like2"}
                      style={{
                        paddingRight: 10,
                        fontSize: 22,
                        color: /*like ? "rgba(84,70,115,1)" : "black",*/ "black",
                        paddingTop: 5,
                      }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity /*onPress={() => setBookmark(!bookmark)}*/ >
                    <MaterialCommunityIcons
                      name={/*bookmark ? "bookmark-remove" :"bookmark-plus-outline"*/ "bookmark-plus-outline"}
                      style={{ fontSize: 25, paddingRight: 5, paddingTop: 3 }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <MaterialCommunityIcons
                      name="share-outline"
                      style={{ fontSize: 30 }}
                    />
                  </TouchableOpacity>
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
