import { useState } from 'react'
import { ActivityIndicator, Button, Text, View, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import {styles} from './styles'  
import {useAuth} from '../context/Auth'

import { useForm } from 'react-hook-form'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'


export const ResetScreen = () => {

  const navigation = useNavigation()

  const [loading, isLoading] = useState(false);

  const { control, handleSubmit, reset } = useForm({ mode: 'onBlur', reValidateMode:'onBlur',
    defaultValues: { email: ''} })
  
  const { resetPass } = useAuth();
  const navigateSignIn = () => navigation.navigate('SignIn Screen')

  
  const handleOnPress = ({email}) => {
    isLoading(true)
    resetPass(email, isLoading, navigateSignIn)
    reset()
  };

  return <KeyboardAwareScrollView contentContainerStyle={styles.container}> 
    
    <View style={styles.msgContainer}>
      <Text style={styles.text}>
        Introduce tu dirección de correo electrónico y recibirás un enlace para crear un nueva contraseña.
      </Text>
    </View>

    <CustomInput
      placeholder="Correo"
      name="email" 
      keyboardType="email-address"
      autoCapitalize="none"    
      control={control}
      rules={{
        required: 'Ingresa tu correo',
        pattern: {value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, message: 'Ingresa un correo válido'}
    }}/>

    
    {loading 
      ? <ActivityIndicator style={styles.loading} animating={true} size="small"  color='grey'/> 
      : <CustomButton title='RECUPERA TU CLAVE' onPress={ handleSubmit(handleOnPress) } />}

    <CustomButton title='INICIA SESIÓN' onPress={navigateSignIn}/>
  </KeyboardAwareScrollView>
};
