import { Linking, StyleSheet, Text, View, } from 'react-native';
import { Button } from 'react-native-elements';



export default function DeportesScreen() {

  
  return (
    <View style={styles.centeredView}>
      <View style={styles.card}>
        <Text style={styles.text}>Conoce todos los deportes en nuestro sitio web</Text>
      </View>
      <Button title="Ir" titleStyle={{ fontSize: 16 }} type="outline" onPress={() => Linking.openURL('https://chilehacedeporte.cl/deportes/')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    // justifyContent: 'space-around',
    justifyContent: 'center',
    paddingHorizontal: 17,
    backgroundColor: 'white'
  },
  card: {
    marginVertical: 20,
    backgroundColor: 'whitesmoke',
    paddingHorizontal: 22,
    paddingVertical: 26,
    borderRadius: 20,
    alignItems: 'center',
  },
  text:{
    fontSize: 17,
    textAlign: 'center',
    lineHeight: 24,    
  }
});