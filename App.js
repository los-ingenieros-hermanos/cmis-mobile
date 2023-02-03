import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import TabNavigator from './components/NavigatorComponents/TabNavigator';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App({navigation}) {
  const Stack = createStackNavigator();
  
  return (
    <Provider store={store}>
     <NavigationContainer>
       <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
         <Stack.Screen name="Login" component={LoginScreen}/>
         <Stack.Screen name="Register" component={RegisterScreen} />
         <Stack.Screen name="Main" component={TabNavigator} initialParams={{navigation}}/>
       </Stack.Navigator>

     </NavigationContainer>
    </Provider>

  );
}

export default App;