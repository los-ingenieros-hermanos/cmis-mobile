import LoginScreenStyles from "../Style/LoginScreenStyles";
import {Text,View,TextInput,TouchableNativeFeedback,Alert,TouchableHighlight} from "react-native";
import React, {useState} from "react";
import { Image } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { setID, setRole, setProfileImage} from '../redux/actions/userIDAction';
import {s_updateInstagram,s_updateBookmarks,s_updateEmail,s_updateEvents,s_updateID,s_updateImage,s_updateInterests,s_updateRole,s_updateFirstName,s_updateLastName, s_updateBanner, s_updateInfo} from '../redux/actions/studentDataAction';
import {c_updateInstagram,c_updateInfo,c_updateBanner,c_updateEmail,c_updateFirstName,c_updateFollowerCount,c_updateID,c_updateImage,c_updateMemberCount,c_updateRole,c_updateTags,c_updateUsername} from '../redux/actions/communityDataAction';
import {fetch_get, fetch_post} from '../fetch';

_onForgotPasswordButton = () => {
  alert("Bu fonksiyon şuan çalışmamaktadır.");
};

export default function LoginScreen({ navigation }) {
  const dispatch = useDispatch();
  const url1 = useSelector((store) => store.url.url);

  const [studentSelection, setstudentSelection] = useState("rgba(84,70,115,1)");
  const [communitySelection, setcommunitySelection] = useState("transparent");
  const [studentIcon, setStudentIcon] = useState(require("../assets/icons/student_selected.png"));
  const [communityIcon, setCommunityIcon] = useState(require("../assets/icons/community_notselected.png"));
  const [StudentTextColor, setStudentTextColor] = useState(LoginScreenStyles.setColorGray);
  const [CommunityTextColor, setCommunityTextColor] = useState(LoginScreenStyles.setColorGray);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  var id2;
  var role = "ROLE_STUDENT";
  
 
  const _onStudentButton = () => {
    setStudentIcon(require("../assets/icons/student_selected.png"));
    setCommunityIcon(require("../assets/icons/community_notselected.png"));
    setcommunitySelection("transparent");
    setstudentSelection("rgba(84,70,115,1)");
    setStudentTextColor(LoginScreenStyles.setColorPurple);
    setCommunityTextColor(LoginScreenStyles.setColorGray);
  };

  const _onCommunityButton = () => {
    setCommunityIcon(require("../assets/icons/community_selected.png"));
    setStudentIcon(require("../assets/icons/student_notselected.png"));
    setstudentSelection("transparent");
    setcommunitySelection("rgba(84,70,115,1)");
    setCommunityTextColor(LoginScreenStyles.setColorPurple);
    setStudentTextColor(LoginScreenStyles.setColorGray);
  };

  async function getData(){

    if(role=="ROLE_COMMUNITY"){
          const responseJson = await fetch_get(url1+'/api/cmis/communities/'+id2);
          dispatch(c_updateID(responseJson.id));
          dispatch(c_updateFirstName(responseJson.user.firstName));
          dispatch(c_updateEmail(responseJson.user.email));
          dispatch(c_updateRole(responseJson.user.roles[0].name));
          dispatch(c_updateUsername(responseJson.user.username));
          dispatch(c_updateFollowerCount(responseJson.followerCount));
          dispatch(c_updateMemberCount(responseJson.memberCount));
          dispatch(c_updateTags(responseJson.tags[0]));
          if(responseJson.banner!=null){dispatch(c_updateBanner(responseJson.banner));}
          if(responseJson.info!=null){dispatch(c_updateInfo(responseJson.info));}
          if(responseJson.instagram != null){dispatch(c_updateInstagram(responseJson.instagram));}        
          if(responseJson.image!=null){
            dispatch(c_updateImage(responseJson.image));
            dispatch(setProfileImage(responseJson.image));
          }
    }
    else if(role=="ROLE_STUDENT"){
          const responseJson = await fetch_get(url1+'/api/cmis/students/'+id2);
          dispatch(s_updateID(responseJson.user.id));
          dispatch(s_updateFirstName(responseJson.user.firstName));
          dispatch(s_updateLastName(responseJson.user.lastName));
          dispatch(s_updateEmail(responseJson.user.email));
          dispatch(s_updateRole(responseJson.user.roles[0].name));
          dispatch(s_updateBookmarks(responseJson.bookmarkedPosts));
          dispatch(s_updateEvents(responseJson.events));
          dispatch(s_updateInterests(responseJson.interests));
          if(responseJson.banner!=null){dispatch(s_updateBanner(responseJson.banner));}
          if(responseJson.info!=null){dispatch(s_updateInfo(responseJson.info));}
          if(responseJson.instagram != null){dispatch(s_updateInstagram(responseJson.instagram));}
          if(responseJson.image!=null){
            dispatch(s_updateImage(responseJson.image));
            dispatch(setProfileImage(responseJson.image));
          }
    }
  }


  _onLoginButton = async () => {
      const bodyData = { email: "test1@gtu.edu.tr", password: "test123"};
      const body = JSON.stringify(bodyData);
      const response = await fetch_post(url1+"/api/auth/signin",body);
      id2 = response.id;
      role = response.roles[0];
      dispatch(setID(id2));
      dispatch(setRole(response.roles[0]));
      getData();
      navigation.navigate("Main");

  };

  return (
    <>
    
    <View style={LoginScreenStyles.container}>
      <View style={LoginScreenStyles.upperRectangle}>
        <Text style={{color: 'white',fontWeight: '600',fontSize: 33,letterSpacing: 7.5,marginTop: '20%',alignSelf: 'center'}}> cmis </Text>
      </View>

      <View style={LoginScreenStyles.StudentAndComm}>
        <TouchableHighlight
          style={LoginScreenStyles.StudentButton}
          activeOpacity={1}
          underlayColor={"white"}
          onPress={() => _onStudentButton()}
        >
          <View>
            <Image
              style={LoginScreenStyles.StudentImageStyle}
              source={studentIcon}
              height={20}
              width={20}
            />
            <Text style={[LoginScreenStyles.StudentText, StudentTextColor]}>
              {" "}
              Öğrenci{" "}
            </Text>
            <View
              style={LoginScreenStyles.studentSelectionLine}
              backgroundColor={studentSelection}
            ></View>
          </View>
        </TouchableHighlight>

        <View style={LoginScreenStyles.verticleLine}></View>

        <TouchableHighlight
          style={LoginScreenStyles.CommunityButton}
          activeOpacity={1}
          underlayColor={"white"}
          onPress={() => _onCommunityButton()}
        >
          <View>
            <Image
              style={LoginScreenStyles.CommunityImageStyle}
              source={communityIcon}
              height={60}
              width={100}
            />
            <Text style={[LoginScreenStyles.CommText, CommunityTextColor]}>
              Topluluk/Takım
            </Text>
            <View
              style={LoginScreenStyles.communitySelectionLine}
              backgroundColor={communitySelection}
            ></View>
          </View>
        </TouchableHighlight>
      </View>

      <View style={{}}>
        <View style={{ flexDirection: "row" }}>
          <View style={LoginScreenStyles.empty1}></View>
          <Image
            source={require("../assets/icons/at-sign.png")}
            height={20}
            width={20}
            style={LoginScreenStyles.atsignLogin}
          />
          <TextInput
            onChangeText={(newText) => setEmail(newText)}
            defaultValue={email}
            placeholder="E-posta"
            placeholderTextColor="rgba(165,165,165,1)"
            cursorColor={"rgba(84,70,115,1)"}
            style={LoginScreenStyles.textinput}
          />
          <View style={LoginScreenStyles.empty1}></View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../assets/icons/lock.png")}
            height={20}
            width={20}
            style={LoginScreenStyles.atsignLogin}
          />
          <View style={LoginScreenStyles.empty1}></View>
          <TextInput
            onChangeText={(newText) => setPassword(newText)}
            defaultValue={password}
            secureTextEntry={true}
            placeholder="Şifre"
            placeholderTextColor="rgba(165,165,165,1)"
            cursorColor={"rgba(84,70,115,1)"}
            style={LoginScreenStyles.textinput}
          />
          <View style={LoginScreenStyles.empty1}></View>
        </View>
      </View>

      <View>
        <TouchableNativeFeedback
          onPress={() => _onForgotPasswordButton()}
          underlayColor="white"
        >
          <View style={LoginScreenStyles.forgotPassword}>
            <Text style={LoginScreenStyles.forgotPasswordText}>
              Şifreni mi Unuttun?
            </Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback
          onPress={() => _onLoginButton()}
          underlayColor="white"
        >
          <View style={LoginScreenStyles.LoginButton}>
            <Text style={LoginScreenStyles.LoginButtonText}>Giriş Yap</Text>
          </View>
        </TouchableNativeFeedback>

        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            top: "12%",
            width: "90%",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: "rgba(152,152,152,1)",
            }}
          />
          <View>
            <Text
              style={{
                width: 50,
                textAlign: "center",
                color: "rgba(152,152,152,1)",
              }}
            >
              veya
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: "rgba(152,152,152,1)",
            }}
          />
        </View>

        <TouchableNativeFeedback onPress={() => navigation.push("Register")}>
          <View style={LoginScreenStyles.RegisterButton}>
            <Text style={LoginScreenStyles.LoginOuterText}>
              Yeni
              <Text style={LoginScreenStyles.LoginInnerText}> cmis </Text>
              Hesabı Oluştur
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
    </>
  );
}
