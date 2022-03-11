import { Text, StyleSheet, Image, View, ScrollView, TouchableOpacity } from 'react-native';

import { useContext,} from 'react';

import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';

import { signOut } from "firebase/auth";
import { auth } from '../base/firebase';
import AuthContext from '../contexts/AuthContext';

export default function HomeScreen() {
  
  const { setSignedIn } = useContext(AuthContext)

  const handleLogOut = () => {
    signOut(auth).then(() => setSignedIn(false))
  }


  return (
    <ScrollView contentContainerStyle={{flex:1, justifyContent: 'center', backgroundColor: 'white'}}>
      
      <TouchableOpacity onPress={handleLogOut} style={styles.logOut}>
        <Feather name="log-out" size={24} color="gainsboro"/>
      </TouchableOpacity>

      <Image style={styles.image} 
        source={{uri: 'https://chilehacedeporte.cl/wp-content/uploads/2022/02/LOGO-FINAL600x700.png'}}/>
  
      <View style={styles.card}>
        <Text style={styles.text}>
          {'Bienvenido a la APP Chile Hace Deporte, podrás conocer los distintos lugares para practicar deporte y su comunidad.\n Te invitamos 😄'}
        </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  logOut:{
    position: 'absolute',
    top: Constants.statusBarHeight +5,
    right: 0,
    marginRight:17,
  },
  image: {
    marginTop:50,
    width: '75%',
    alignSelf: 'center',
    aspectRatio: 244 /300,
  },
  card: {
    marginVertical: 20,
    backgroundColor: 'whitesmoke',
    marginHorizontal: 17,
    paddingHorizontal: 22,
    paddingVertical: 26,
    borderRadius: 20,
  },
  text: {
    fontSize: 17,
    textAlign: 'center',
    lineHeight: 24,
    // color:'#434343'
    
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 15,
    textAlign: 'center',
  },


})