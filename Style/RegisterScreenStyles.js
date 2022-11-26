import { StyleSheet, Dimensions } from "react-native";
const {width, height} = Dimensions.get('window');
import { useFonts } from 'expo-font';


const LoginScreenStyles = StyleSheet.create(
{   
    atsignLogin:{
        width: 24, 
        height: 20,
        top:40,
        left:17,
    },
    setColorGray:{
        color: "rgba(101,103,107,1)",
    },
    setColorPurple:{
        color:"rgba(84,70,115,1)",
    },
    StudentImageStyle:{
        width: 27, 
        height: 30,
        left:15,
        top:2, 
    },

    CommunityImageStyle:{
        width: 60, 
        height: 30, 
        left: 15,
    },
    CommText:{
        left:0,
        top:5,
    },
    StudentText:{
       top: 5,
       left: 2,
    },
    CommunityButton:{
        width:120,
        borderRadius:20,
        alignItems:'center',
        left:-40,
        height:70,
        paddingTop:10,
        paddingBottom:10,
    },

    StudentButton:{
        width:120,
        borderRadius:20,
        alignItems:'center',
        paddingTop:10,
        paddingBottom:10,
    },
    verticleLine:{
        height: '75%',
        width: 1.5,
        backgroundColor: '#909090',
        left:-20,
    },
    studentSelectionLine:{
        height:3,
        width:100,
        left:77,
        borderRadius:20,
    },
    communitySelectionLine:{
        height:3,
        width:100,
        left:239,
        top:-3,
        borderRadius:20,
    },
    StudentAndComm:{
        flexDirection:'row',
        justifyContent: 'space-evenly',
        left: 20,
        paddingTop: 10,
    },
    textinput:{
        height: 50,
        width: 370,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderWidth: 2,
        borderColor: 'rgba(165,165,165,1)',
        marginVertical:10,
        borderRadius: 5,
        paddingLeft: 25,
        paddingTop: 10,
        top: 10,
        left: -5,
        color: 'black',
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
        /* fontFamily: 'Aldrich', */
        fontWeight: '600',
        fontSize: 33,
        letterSpacing: 7.5,
        left: 150,
        top: 65,
    },
    upperRectangle:{
        backgroundColor:'rgba(84,70,115,1)',
        height: 180,
        width: width,
    },
    container: {
        justifyContent: 'flex-end',
    },
    LoginButton:{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: 'rgba(84,70,115,1)',
        width: 370,
        left:20,
        top: 30,
        height: 50,
    },
    text:{
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 1,
        color: 'white',
    },
    LoginButtonText: {
        textAlign: 'center',
        color: 'white',
        letterSpacing: 1.5,
    },
    forgotPassword:{
        width: 150,
        left: 240,
        top: 10,
    },
    forgotPasswordText:{
        letterSpacing: 1.5,
        color : 'rgba(84,70,115,1)',
        fontWeight: 'bold',
    },

    LoginInnerText:{
        color: 'rgba(84,70,115,1)',
        fontSize: 17,
        textAlign:'center',
    },
    LoginOuterText:{
        color: 'white',
        alignSelf: 'center',
        fontSize: 15,
        textAlign:'center',
    },
    RegisterInnerText:{
        color: 'rgba(84,70,115,1)',
        fontSize: 17,
        textAlign:'center',
    },
    RegisterOuterText:{
        color: 'white',
        alignSelf: 'center',
        fontSize: 15,
    },
    RegisterButton: {
        backgroundColor:'rgba(126,204,113,1)',
        height: 40,
        width: 200,
        borderRadius: 5,
        marginHorizontal: 30,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'white',
        top: 50,
        left: 75,
        justifyContent:'center',
        
    },
}
);

export default LoginScreenStyles