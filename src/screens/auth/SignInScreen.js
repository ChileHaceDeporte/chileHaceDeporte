import { useContext } from 'react';
import { StyleSheet, Alert, Image} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { useForm } from 'react-hook-form';
import CustomInput from '../../components/auth/CustomInput';
import { Button } from 'react-native-elements';

import AuthContext from '../../contexts/AuthContext';
import { auth } from '../../base/firebase';
import { signInWithEmailAndPassword, } from "firebase/auth";


export default function SignInScreen({ navigation }) {


  const navigateSignUp = () => navigation.navigate('SignUpScreen')
  const navigateReset = () => navigation.navigate('ResetScreen')
  
  const { setSignedIn } = useContext(AuthContext)


  const { control, handleSubmit } = useForm({ mode: 'onBlur', reValidateMode:'onBlur',
    defaultValues: {
      email: '',
      password: '',
    }
  })
  

  const handleOnPress = (props) => {
    setSignedIn(null)

    signInWithEmailAndPassword(auth, props.email, props.password)
      .then(({user}) => {
        if(user.emailVerified) setSignedIn(true)
        else {
          setSignedIn(false)
          Alert.alert(null, 'Correo no verificado')
        }
      })
      .catch(err => {
        setSignedIn(false)
        Alert.alert(null, 'Correo o clave incorrecta')
      })

  };
  const handleOnPressGoogle = () => {

  }
  
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}> 
    
      <Image style={styles.image} 
        source={{uri: 'https://chilehacedeporte.cl/wp-content/uploads/2022/02/LOGO-FINAL3-06-550x550.png'}}/>

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
      
      <Button title="¿Olvidaste tu contraseña?" type="clear" titleStyle={{ fontSize: 17 }} containerStyle={{marginBottom: 15}} buttonStyle={{ justifyContent: 'flex-end' }} onPress={navigateReset}/>
      <Button title="Inicia sesión" titleStyle={{ fontSize: 17 }} containerStyle={{marginVertical: 5}} onPress={handleSubmit(handleOnPress)}/>
      <Button title="Crea tu cuenta" type="clear" titleStyle={{ fontSize: 17 }} containerStyle={{marginVertical: 5, marginBottom: 20}} onPress={navigateSignUp}/>
      {/* <Button title="Ingresa con Google" type="clear" titleStyle={{ fontSize: 17 }} containerStyle={{marginVertical: 5, paddingBottom: 20}} onPress={handleOnPressGoogle}/> */}


    </KeyboardAwareScrollView>
  )
}


export const styles = StyleSheet.create({

  container: {

    width: '88%',
    alignSelf: 'center',
    // justifyContent: 'center'

  },
  image: {
    alignSelf: 'center',
    marginBottom: 30,
    marginTop: 60,
    // marginTop: 260,
    height: 'auto',
    width: '75%',
    aspectRatio: 1 /1,
  }
  
})