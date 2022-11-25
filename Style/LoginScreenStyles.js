import { StyleSheet, Dimensions } from "react-native";
const {width, height} = Dimensions.get('window');
import { useFonts } from 'expo-font';

/* const [loaded] = useFonts({
    Aldrich: require('./assets/fonts/Aldrich-Regular.ttf'),
  }); */
  
const LoginScreenStyles = StyleSheet.create(
{   
    StudentText:{
       marginHorizontal: -5,
    },
    CommText:{
        marginHorizontal: -30,
    },

    StudentAndComm:{
        flexDirection:'row',
        marginHorizontal: 10,
        justifyContent: 'space-around',
        paddingStart: 20,
        paddingTop: 10,
    },
    StudentAndCommIcon:{
        flexDirection:'row',
        marginHorizontal: 10,
        justifyContent: 'space-around',
        paddingStart: 20,
    },
    textinput:{
        height: 50,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderWidth: 2,
        borderColor: 'rgba(165,165,165,1)',
        marginHorizontal: 20,
        marginVertical:10,
        borderRadius: 5,
        paddingLeft: 10,
        paddingTop: 10,
        position: 'relative',
        top: 10,
        color: 'rgba(165,165,165,1)',
    },

    UserIcon:{
        position:'absolute',
        marginLeft:115,
    },
    CommunityIcon:{
        position:'relative',
        marginLeft:270,
        tintColor:'red',
    },
    SelectionStudent:{
        color: 'rgba(84,70,115,1)',
        marginLeft: 105,
        marginTop: 35,
        flexDirection: 'row',
        position: 'absolute',
    },
    SelectionCommunity:{
        color: 'rgba(84,70,115,1)',
        marginLeft: 240,
        marginTop: 35,
        position: 'absolute',
    },
    AppName:{
        
        color: 'white',
        marginStart: 140,
        marginTop: 65,
        /* fontFamily: 'Aldrich', */
        fontWeight: '600',
        fontSize: 33,
        letterSpacing: 7.5
    },
    upperRectangle:{
        backgroundColor:'rgba(84,70,115,1)',
        height: 180,
        width: width,
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    LoginButton: {
        backgroundColor:'rgba(84,70,115,1)',
        height: 55,
        width: 350,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginHorizontal: 30,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'white'
    },

    LoginButtonText:{
        fontSize: 15,
        fontWeight: '600',
        color: 'white',
        letterSpacing: 0.5

    },
    bottomContainer:{
        justifyContent:'center',
        height:height/3,
    }
}
);

export default LoginScreenStyles