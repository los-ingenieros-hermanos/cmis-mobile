import { StyleSheet, Dimensions } from "react-native";
const {width, height} = Dimensions.get('window');
import { useFonts } from 'expo-font';


const RegisterScreenStyles = StyleSheet.create(
{   
    atsignLogin:{
        width: width*0.05, 
        height: width*0.05,
        top: height*0.025,
        left:width*0.045,
        alignSelf:'center',
        resizeMode:'center',
    },
    setColorGray:{
        color: "rgba(101,103,107,1)",
    },
    setColorPurple:{
        color:"rgba(84,70,115,1)",
    },
    StudentImageStyle:{
        width: width*0.03, 
        height: height*0.04,
        alignSelf:'center',
        top:2, 
        aspectRatio:1,
        resizeMode:'center',
    },
    CommunityImageStyle:{
        height: height*0.08, 
        alignSelf:'center',
        aspectRatio:1,
        resizeMode:'center',
        top: -height*0.02,
    },
    CommText:{
        top:-height*0.035,
        textAlign:'center',
        fontSize:height*0.02,
    },
    StudentText:{
       top: 5,
       fontSize:height*0.02,
       textAlign:'center',
       left:-1,
    },
    CommunityButton:{
        flex: 1,
        alignItems:'center',
        height:70,
        paddingTop:10,
        paddingBottom:10,
    },

    StudentButton:{
        flex:1,
        alignItems:'center',
        paddingTop:10,
        paddingBottom:10,
        justifyContent:'center',
    },
    verticleLine:{
        height: '100%',
        width: 1.5,
        backgroundColor: '#909090',
    },
    studentSelectionLine:{
        height:3,
        borderRadius:20,
        top:10,
    },
    communitySelectionLine:{
        height:3,
        borderRadius:20,
        top: -height*0.025,  
    },
    StudentAndComm:{
        flexDirection:'row',
        justifyContent: 'center',
        paddingTop: 10,
    },
    textinput:{
        height: height*0.06,
        width: width*0.9,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderWidth: 2,
        borderColor: 'rgba(165,165,165,1)',
        marginVertical: height*0.005,
        borderRadius: 5,
        paddingLeft: 20,
        paddingTop: height*0.015,
        top: height*0.017,
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
    AppName:{
        color: 'white',
        fontWeight: '600',
        fontSize: height*0.05,
        letterSpacing: 7.5,
        marginTop: height * 0.1,
        alignSelf: 'center',
    },
    upperRectangle:{
        backgroundColor:'rgba(84,70,115,1)',
        height: height*0.25,
        width: '100%',
    },
    container: {
        
    },
    LoginButton:{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: 'rgba(84,70,115,1)',
        width: width*0.9,
        alignSelf:'center',
        top: height*0.03,
        height: height*0.06,
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
        alignSelf:'flex-end',
        top: height*0.02,
        right:width*0.05,
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
        height: height*0.05,
        width: width*0.6,
        borderRadius: 5,
        top: height*0.045,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'white',
        
        alignSelf:'center',
        justifyContent:'center',
        
    },
}
);

export default RegisterScreenStyles