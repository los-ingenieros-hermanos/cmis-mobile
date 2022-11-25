import { StatusBar } from 'expo-status-bar';
import LoginScreenStyles from '../Style/LoginScreenStyles';
import Svg, {Image} from 'react-native-svg';
import { StyleSheet, Text, View, Dimensions, TextInput } from 'react-native';

export default function LoginScreen() {
    const {height, width} = Dimensions.get('window');
    
    return (
      <View style={LoginScreenStyles.container}>
       
       <View style={StyleSheet.absoluteFill}>
       
          <View style={LoginScreenStyles.upperRectangle}>
                <Text style={LoginScreenStyles.AppName}> cmis </Text>
          </View>
      
          <View style={LoginScreenStyles.StudentAndComm}>
                <View>
                    <Svg height={40} width={45} >
                      <Image 
                        href={require('../assets/Sample_User_Icon.png')} 
                        width={35} 
                        height={35}
                        preserveAspectRatio="xMidYMid slice"
                        />
                    </Svg>
                    <Text style={LoginScreenStyles.StudentText}>Öğrenci</Text>
                </View>
      
                <View >
                    <Svg height={40} width={45} >
                      <Image 
                        href={require('../assets/com_icon.png')} 
                        width={40} 
                        height={35}
                      />
                    </Svg>
                    <Text style={LoginScreenStyles.CommText}>Topluluk/Takım</Text>
                </View>    
          </View>
                
          <View>
              <TextInput placeholder='E-posta' placeholderTextColor='rgba(165,165,165,1)' style={LoginScreenStyles.textinput} />
              <TextInput placeholder='Şifre' placeholderTextColor='rgba(165,165,165,1)' style={LoginScreenStyles.textinput} />
          </View>
  
  
       </View>

       
        <View style={LoginScreenStyles.bottomContainer}>
          <View style={LoginScreenStyles.LoginButton}>
              <Text style={LoginScreenStyles.LoginButtonText}> LOG IN</Text>
          </View>
        </View>
  
      </View>
    );
  }