import { StatusBar } from 'expo-status-bar';
import styles from './styles';
import Svg, {Image} from 'react-native-svg';
import { StyleSheet, Text, View, Dimensions, TextInput } from 'react-native';

export default function App() {
  const {height, width} = Dimensions.get('window');
  
  return (
    <View style={styles.container}>
     <View style={StyleSheet.absoluteFill}>
     
     {/* <Svg height={height/2} width={width}>
      <Image 
        href={require('./assets/5087579.png')} 
        width={width} 
        height={height}
        preserveAspectRatio="xMidYMid slice"  
        />
     </Svg> */}

     <View style={styles.upperRectangle}>
          <Text style={styles.AppName}> cmis </Text>
     </View>

     <View style={styles.StudentAndComm}>
          <View>
            <Svg height={40} width={45} >
              <Image 
                href={require('./assets/Sample_User_Icon.png')} 
                width={35} 
                height={35}
                preserveAspectRatio="xMidYMid slice"
                />
            </Svg>
            <Text style={styles.StudentText}>Öğrenci</Text>
          </View>

          <View >
            <Svg height={40} width={45} >
              <Image 
                href={require('./assets/com_icon.png')} 
                width={40} 
                height={35}
              />
            </Svg>
            <Text style={styles.CommText}>Topluluk/Takım</Text>
          </View>    
     </View>
          
     <View>
        <TextInput placeholder='E-posta' placeholderTextColor='rgba(165,165,165,1)' style={styles.textinput} />
        <TextInput placeholder='Şifre' placeholderTextColor='rgba(165,165,165,1)' style={styles.textinput} />
     </View>


     </View>
      <View style={styles.bottomContainer}>
        <View style={styles.LoginButton}>
            <Text style={styles.LoginButtonText}> LOG IN</Text>
        </View>
      </View>

    </View>
  );
}
