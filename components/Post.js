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
import PostItem from "./PostItem";

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
  const dummyImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88OjpfwAI+QOoF8YQhgAAAABJRU5ErkJggg==";
  const [join, setJoin] = useState(false);
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

  function handleMonth(month){
    if(month=="1"){return "Ocak";}
    else if(month=="2"){return "Şubat";}
    else if(month=="3"){return "Mart";}
    else if(month=="4"){return "Nisan";}
    else if(month=="5"){return "Mayıs";}
    else if(month=="6"){return "Haziran";}
    else if(month=="7"){return "Temmuz";}
    else if(month=="8"){return "Ağustos";}
    else if(month=="9"){return "Eylül";}
    else if(month=="10"){return "Ekim";}
    else if(month=="11"){return "Kasım";}
    else if(month=="12"){return "Aralık";}
  }


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
          return(
            <View key={index}>
              <PostItem id={data.id}/>
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
