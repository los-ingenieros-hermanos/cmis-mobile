import { StyleSheet, Dimensions } from "react-native";
const {width, height} = Dimensions.get('window');
import { useFonts } from 'expo-font';

/* const [loaded] = useFonts({
    Aldrich: require('./assets/fonts/Aldrich-Regular.ttf'),
  }); */
  
const LoginScreenStyles = StyleSheet.create(
{   
    StudentText:{
       top: 5,
       left: -10,
    },
    CommText:{
        right: 15,
        top:-15,
    },

    verticleLine:{
        height: '75%',
        width: 1.5,
        backgroundColor: '#909090',
    },

    StudentAndComm:{
        flexDirection:'row',
        justifyContent: 'space-evenly',
        left: 20,
        paddingTop: 10,
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
        borderColor: 'white',
        justifyContent: 'center',
        bottom: 100,
        
    },
    bottomContainer:{
        justifyContent:'center',
        height:height/3,
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
        
        color: 'white'
    },
    forgotPassword:{
        
        width: 150,
        left: 250,
        top: 10,
    },
    forgotPasswordText:{
        letterSpacing: 1.5,
        color : 'rgba(84,70,115,1)',
        fontWeight: 'bold',
    },

    InnerText:{
        color: 'rgba(84,70,115,1)',
        fontSize: 17,
    },
    OuterText:{
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