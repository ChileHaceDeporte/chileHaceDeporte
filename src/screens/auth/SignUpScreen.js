import { useState } from 'react';
import { Text, View, StyleSheet, Alert} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


import { useForm } from 'react-hook-form';
import CustomInput from '../../components/auth/CustomInput';
import { Button } from 'react-native-elements';

import { auth } from '../../base/firebase';
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile, } from "firebase/auth";

export default function SignUpScreen({ navigation }) {

  const navigateSignIn = () => navigation.navigate('SignInScreen')
  

  const [loading, setLoading] = useState(false)
  const { control, handleSubmit, watch, reset } = useForm({ mode: 'onBlur', reValidateMode:'onBlur',
    defaultValues: {
      // name: '',
      email: '',
      password: '',
      repeatPassword: ''
    }
  })
  


  const handleOnPress = ({ email, password}) => {
    setLoading(true);
    

    createUserWithEmailAndPassword(auth, email, password)
      .then(res => {
        // updateProfile(res.user, { displayName: name })
        //   .catch(err => console.log(err))
        sendEmailVerification(res.user)
          .catch(err => console.log(err))
      })
      .then(() => {
        Alert.alert(null, 'Te hemos enviado un vínculo para verificar tu dirección de correo electrónico. Luego podrás iniciar sesión.')
        navigateSignIn()
      })
      .catch(err => {
        Alert.alert(null, 'Dirección de correo ya se encuentra en uso')
        reset()
      })
      .finally(() => setLoading(false))


  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}> 

      <View style={styles.msgContainer}>
        <Text style={styles.txt}>
          Crea tu cuenta y te enviaremos un vínculo para verificar tu dirección de correo electrónico.
        </Text>
      </View>
      

      <CustomInput placeholder="Correo" name="email" keyboardType="email-address" autoCapitalize="none" control={control}
        rules={{
          required: 'Ingresa tu correo',
          pattern: {value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, message: 'Ingresa un correo válido'}
        }}/>

      <CustomInput placeholder="Contraseña" name="password" control={control} secureTextEntry={true}
        rules={{
          required: 'Ingresa tu contraseña',
          minLength: {value: 6, message: 'La contraseña debe tener almenos 6 caracteres'}
        }}/>
    
      <CustomInput placeholder="Repite tu contraseña" name="repeatPassword" control={control} secureTextEntry={true}
        rules={{
          validate: value => value === watch('password') || 'Las contraseñas no coinciden'
        }}/>
    
      <Button title="Crea tu cuenta" titleStyle={{ fontSize: 17 }} containerStyle={{marginTop: 15, marginBottom: 5}} onPress={handleSubmit(handleOnPress)} loading={loading}/>
      <Button title="Inicia sesión" type="clear" titleStyle={{ fontSize: 17 }} containerStyle={{marginVertical: 5,}} onPress={navigateSignIn}/>


    </KeyboardAwareScrollView>
  )
}


export const styles = StyleSheet.create({

  container: {
    flex: 1,
    width: '88%',
    alignSelf: 'center',
    justifyContent: 'center'    
  },
  msgContainer: {
    marginVertical: 5,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 4,
    marginBottom: 15
  },
  txt: {
    fontSize: 17
  },
})
// <CustomInput placeholder="Nombre" name="name" keyboardType="default" autoCapitalize="words" control={control}
//   rules={{
//     required: 'Ingresa tu nombre',
//     pattern: {value: /^[a-z ñA-Z]+$/, message: 'Tu nombre solo debe contener letras'}
//   }}/> 