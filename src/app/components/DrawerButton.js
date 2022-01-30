import { Text, TouchableOpacity } from 'react-native'
import { styles } from '../styles'

import { Octicons } from '@expo/vector-icons'; 

// 
export function DrawerButton({openDrawer}) {
   // onPress={onPressHandler}
  // const onPressHandler = () => openDrawer()
  
  return <TouchableOpacity style={styles.DrawerButton} onPress={() => openDrawer()}> 
    <Octicons name="three-bars" size={26} color="black" />
    </TouchableOpacity>
}
