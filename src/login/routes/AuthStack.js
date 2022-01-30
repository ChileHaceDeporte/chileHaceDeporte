// import {createStackNavigator} from '@react-navigation/stack'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {SignInScreen} from '../screens/SignInScreen'
import {ResetScreen} from '../screens/ResetScreen'
import {SignUpScreen} from '../screens/SignUpScreen'

const Stack = createNativeStackNavigator();

export default function AuthStack(){
 
  return <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="SignIn Screen" component={SignInScreen} />
    <Stack.Screen name="Reset Screen" component={ResetScreen} />
    <Stack.Screen name="SignUp Screen" component={SignUpScreen} />
  </Stack.Navigator>

}
