import { useState, useContext } from 'react';
import { Text, View, StyleSheet, Alert} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


import { useForm } from 'react-hook-form';
import CustomInput from '../../components/auth/CustomInput';
import { Button } from 'react-native-elements';

import AuthContext from '../../contexts/AuthContext';
import { auth } from '../../base/firebase';
import { sendPasswordResetEmail } from "firebase/auth";


export default function ResetScreen({ navigation }) {

  const navigateSignIn = () => navigation.navigate('SignInScreen')

  const [loading, setLoading] = useState(false)
  const { control, handleSubmit, reset } = useForm({ mode: 'onBlur', reValidateMode:'onBlur',
    defaultValues: {
      email: '',
      password: '',
    }
  })

  const { setSignedIn } = useContext(AuthContext)

  const handleOnPress = (props) => {
    setLoading(true)
    sendPasswordResetEmail(auth, props.email)
      .then(() => {
        Alert.alert(null, 'Te hemos enviado un vínculo para restablecer tu contraseña')
        navigateSignIn()
      })
      .catch(err => {
        Alert.alert(null, 'Dirección de correo no encontrada')
        reset()
      })
      .finally(() => setLoading(false))
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}> 

      <View style={styles.msgContainer}>
        <Text style={styles.txt}>
          Introduce tu dirección de correo electrónico y recibirás un enlace para crear un nueva contraseña.
        </Text>
      </View>
    

      <CustomInput placeholder="Correo" name="email" keyboardType="email-address" autoCapitalize="none" control={control}
        rules={{
          required: 'Ingresa tu correo',
          pattern: {value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, message: 'Ingresa un correo válido'}
        }}/>

      <Button title="Recupera tu clave" titleStyle={{ fontSize: 16 }} containerStyle={{marginTop: 15, marginBottom: 5}} onPress={handleSubmit(handleOnPress)} loading={loading}/>
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
  }
})