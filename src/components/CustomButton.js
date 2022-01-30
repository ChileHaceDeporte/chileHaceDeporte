import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function CustomButton({ title, onPress, type="PRIMARY" }) {

  return <TouchableOpacity style={[styles.button, styles[`button_${type}`]]} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>

}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    alignSelf: 'stretch',
    paddingVertical: 9,
    paddingHorizontal: 32,
    borderRadius: 6,
    marginBottom: 8,
    marginTop: 8,    
    
  },
  button_PRIMARY:{
    backgroundColor: '#69A7EE',
  },
  button_SECONDARY:{
    backgroundColor: '#1D4777',
  },  
  text: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'whitesmoke',
  },

})