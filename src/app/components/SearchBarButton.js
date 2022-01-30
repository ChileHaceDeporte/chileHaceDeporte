import { TouchableOpacity } from 'react-native'
import { styles } from '../styles'
import { Ionicons } from '@expo/vector-icons';
import { useCallback } from 'react';


export function SearchBarButton({onPress}) {

  // 

  return <TouchableOpacity style={styles.SearchBarButton} onPress={onPress}>
    <Ionicons name="ios-search-sharp" size={24} color="black" />
  </TouchableOpacity>
}
