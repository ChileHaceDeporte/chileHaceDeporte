import {NavigationContainer} from '@react-navigation/native'

import AppStack from '../../app/routes/AppStack'
import AuthStack from './AuthStack'

import {useAuth} from '../context/Auth'
import {Loading} from '../../components/Loading'

export const Router = () => {
  const {authData, loading} = useAuth()
  
  
  if (loading) return <Loading />
  
  return <NavigationContainer>
    { authData ? <AppStack /> : <AuthStack />}
  </NavigationContainer>  

}
