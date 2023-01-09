import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, Dimensions, StyleSheet, ScrollView } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionic from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation,useFocusEffect } from '@react-navigation/native'
import { set } from "react-native-reanimated";
import PostFollowing from "../../components/PostFollowing";

// get dimensions of the screen
const { width, height } = Dimensions.get("window");

const FollowedPost = () => {
  
  const ownID = useSelector((store) => store.userID.userID);
  const url1 = useSelector((store) => store.url.url);
  const [userObj, setUserObj] = useState(null);
  const [idArray, setIDArray] = useState([]);
 
  
  useEffect(() => {  
      fetch(url1 +'/api/cmis/students/'+ownID+"/followingCommunities", {
        method: 'GET'
        })
          .then((response) => response.json())
          .then((responseJson) => {
            let temp = JSON.stringify(responseJson);
            setUserObj(JSON.parse(temp));
            responseJson.forEach(item => idArray.push(item.id));
            console.log(idArray);
        })
        .catch((error) => {
          console.error(error);
        });

    }, [])
  


  return (
    <View style={{ paddingBottom:65}}>
        {/* const [like, setLike] = useState(data.isLiked);
        const [bookmark, setBookmark] = useState(data.isBookmarked);
        const [join, setJoin] = useState(data.isJoined); */}
        {idArray.length>0 && 
        <PostFollowing idArray={idArray}/>
        }
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

export default FollowedPost;
