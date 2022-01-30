import {useState} from 'react'
import { ActivityIndicator, Button, Text, View, Alert} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import {styles} from './styles'
import {useAuth} from '../context/Auth'

import { useForm } from 'react-hook-form'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

export const SignUpScreen = () => {
  
  const navigation = useNavigation()
  
  const [loading, isLoading] = useState(false);
  const { control, handleSubmit, watch, reset } = useForm({ mode: 'onBlur', reValidateMode:'onBlur',
    defaultValues: {
      email: '',
      password: '',
      repeatPassword: ''
    }
  })
  const { signUp } = useAuth();
  const navigateSignIn = () => navigation.navigate('SignIn Screen')

  const handleOnPress = ({email, password}) => {
    isLoading(true)    
    signUp(email, password, isLoading, navigateSignIn)
    reset()
  }


  return <KeyboardAwareScrollView contentContainerStyle={styles.container}> 
    
    
    <View style={styles.msgContainer}>
      <Text style={styles.text}>
        Crea tu cuenta y te enviaremos un vínculo para verificar tu dirección de correo electrónico.
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

    <CustomInput
      placeholder="Contraseña"
      name="password" 
      control={control}
      secureTextEntry={true}
      rules={{
        required: 'Ingresa tu contraseña',
        minLength: {value: 6, message: 'La contraseña debe tener almenos 6 caracteres'}
      }}/>
    
    <CustomInput
      placeholder="Repite tu contraseña"
      name="repeatPassword" 
      control={control}
      secureTextEntry={true}
      rules={{
        validate: value => value === watch('password') || 'Las contraseñas no coinciden'
      }}/>

    
    {loading 
      ? <ActivityIndicator style={styles.loading} animating={true} size="small" color='grey'/> 
      : <CustomButton title='CREAR CUENTA' onPress={ handleSubmit(handleOnPress) } />}

    <CustomButton title='INICIA SESIÓN' onPress={navigateSignIn}/>

  </KeyboardAwareScrollView>

}