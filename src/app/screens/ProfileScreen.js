import {Text, View} from 'react-native'


import {useAuth} from '../../login/context/Auth'

import CustomButton from '../../components/CustomButton'
import { styles } from '../styles'


export default function ProfileScreen(){
  
  const { logOut, authData } = useAuth()
  
  // const { logOut, authData } = useAuth()


  return <View style={styles.container}>
      <Text style={styles.textItem}>Profile Screen</Text>
      <Text style={styles.textItem}>
        {JSON.stringify(authData.providerData[0], null, 5)}
      </Text>
      <CustomButton title='SALIR' onPress={() => logOut()}/>

  </View>
};
