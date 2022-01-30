import { useState} from 'react'
import { ActivityIndicator, Button, Text, View, TouchableOpacity, Alert} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import {styles} from './styles'  
import {useAuth} from '../context/Auth'

import { useForm } from 'react-hook-form'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

export const SignInScreen = () => {
  
  const navigation = useNavigation()
  
  const [loading, isLoading] = useState(false);
  const { control, handleSubmit, reset } = useForm({ mode: 'onBlur', reValidateMode:'onBlur',
    defaultValues: {
      email: '',
      password: '',
    }
  })
  const { signIn } = useAuth();
  


  const handleOnPress = ({email, password}) => {

    isLoading(true)
    signIn(email, password, isLoading)
    reset()
  };
  return <KeyboardAwareScrollView contentContainerStyle={styles.container}> 
    
    

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
    

    <TouchableOpacity style={styles.label} onPress={() => navigation.navigate('Reset Screen')}>
      <Text>¿Olvidaste tu contraseña?</Text>
    </TouchableOpacity>
    
    {loading 
      ? <ActivityIndicator style={styles.loading} animating={true} size="small" color='grey'/> 
      : <CustomButton title='INICIA SESIÓN' onPress={ handleSubmit(handleOnPress) } />}
    
    <CustomButton title='CREA TU CUENTA' onPress={() => navigation.navigate('SignUp Screen')}/>

  </KeyboardAwareScrollView>

}

    // {loading ? <ActivityIndicator animating={true} size="small" /> : <Button title="Sign In" onPress={signIn} />}