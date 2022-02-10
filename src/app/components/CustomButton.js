import { TouchableOpacity, StyleSheet } from 'react-native'

export function CustomButton({ OnPress, Icon, IconName, size, style }) {
  
  return <TouchableOpacity style={style} onPress={OnPress}> 
  
    <Icon name={IconName} size={size} />
  
  </TouchableOpacity>
}


