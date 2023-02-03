import { StyleSheet, Dimensions } from "react-native";
const {width, height} = Dimensions.get('window');

const LoginScreenStyles = StyleSheet.create(
{   
    atsignLogin:{
        width: 24, 
        height: 25,
        position:'absolute',
        top:43,
        left:18,
        
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
        left:2,
    },

    CommunityImageStyle:{
        height: height*0.08, 
        alignSelf:'center',
        aspectRatio:1,
        resizeMode:'center',
        top: -height*0.02,
    },
    CommText:{
        left:0,
        top:-height*0.03,
    },
    StudentText:{
       top: 5,
       left: 2,
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
        left: 2,
    },
    communitySelectionLine:{
        height:3,
        borderRadius:20,
        top: -height*0.025,  
    },
    StudentAndCommSelectionLine:{
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        marginHorizontal: 50,
    },
    StudentAndComm:{
        flexDirection:'row',
        justifyContent: 'center',
        paddingTop: 10,
    },
    empty1:{
        flex:1,
    },
    textinput:{
        flex:20,
        alignContent:'center',
        height: '100%',
        width: '90%',
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderWidth: 2,
        borderColor: 'rgba(165,165,165,1)',
        marginVertical:10,
        borderRadius: 5,
        paddingTop: 10,
        top: 10,
        color: 'black',
        paddingLeft:30,
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
        fontWeight: '600',
        fontSize: 33,
        letterSpacing: 7.5,
        marginTop: '20%',
        alignSelf: 'center',
        

        //top: 65,
    },
    upperRectangle:{
        backgroundColor:'rgba(84,70,115,1)',
        height: '30%',
        width: '100%',
    },
    container: {
        
    },
    LoginButton:{
        alignSelf:'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: 'rgba(84,70,115,1)',
        width: '90%',
        top: '25%',
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
        right:'5%',
        alignSelf:'flex-end',
        top: '20%',
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
        width: '55%',
        borderRadius: 5,
        marginHorizontal: 30,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'white',
        alignSelf:'center',
        justifyContent:'center',
        top:'35%'
    },
}
);

export default LoginScreenStyles