import { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


import SignInScreen from '../screens/auth/SignInScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import ResetScreen from '../screens/auth/ResetScreen';
import Loading from '../components/Loading';

import AppRouter from './AppRouter';
import AuthContext from '../contexts/AuthContext';

import { auth } from '../base/firebase';
import { onAuthStateChanged } from "firebase/auth";



const Stack = createNativeStackNavigator();

export default function AuthRouter() {
  
  const [signedIn , setSignedIn] = useState(null);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user)
        user.emailVerified ? setSignedIn(true) : setSignedIn(false)
      else setSignedIn(false)
    })

    return unsubscribe;

  }, [])


  if(signedIn === null) return <Loading />


  return (
    <NavigationContainer>
      <AuthContext.Provider value={{ setSignedIn }}>
      <Stack.Navigator screenOptions={{headerShown: false }}>

        { 
          signedIn ? <Stack.Screen name="AppRouter" component={AppRouter}/> :

          ( <>
              <Stack.Screen name="SignInScreen" component={SignInScreen}/>
              <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
              <Stack.Screen name="ResetScreen" component={ResetScreen} />
            </>)
        }

      </Stack.Navigator>
      </AuthContext.Provider>
    </NavigationContainer>
  )

}