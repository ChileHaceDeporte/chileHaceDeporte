import { Text, View, StyleSheet, ScrollView, Linking, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements';



export default function DonationScreen() {
  
  return (
    <ScrollView contentContainerStyle={{backgroundColor: 'white', paddingBottom:40}}>

    <View style={[styles.card, {backgroundColor: 'white'}]}>
      <Text style={styles.title}>Apoyanos</Text>
      <Text style={styles.text}>
        Para continuar con nuestra labor, tu aporte puede efectuarse de distintas maneras
      </Text>


    </View>

    <View style={styles.card}>
      <Text style={styles.title}>Mapea</Text>
      <Text style={styles.text}>
        Proporcionándonos información de los lugares, recintos deportivos, medios de contactos y eventos deportivos de todo el país.
      </Text>
    </View>
    <View style={styles.card}>
      <Text style={styles.title}>Recursos</Text>
      <Text style={styles.text}>
        Con recursos monetarios para el funcionamiento o implementos deportivos para distribuir en los recintos deportivos que lo requieran.
      </Text>
    </View>

    <View style={styles.card}>
      <Text style={styles.title}>Comunidad</Text>
      <Text style={styles.text}>
        Participando activamente en nuestra comunidad y recomendando su uso a todas las personas.
      </Text>
    </View>

    <View style={styles.card}>
      <Text style={styles.text}>
        Hace tu donación mediante
      </Text>
      <Text style={[styles.text, {fontWeight: 'bold'}]}>Flow</Text>
      <Button title="Donar" titleStyle={{ fontSize: 16 }} containerStyle={{marginTop: 15, marginBottom: 5}} onPress={() => Linking.openURL('https://www.flow.cl/app/web/pagarBtnPago.php?token=uydwrel')}/>
    </View>
    
    <View style={styles.card}>
      <Text style={styles.title}>Contacto</Text>
      <Button title="Ir" titleStyle={{ fontSize: 16 }} type="outline" containerStyle={{marginTop: 15, marginBottom: 5}} onPress={() => Linking.openURL('https://chilehacedeporte.cl/contacto/')}/>
    </View>    

    </ScrollView>
  );
}


const styles = StyleSheet.create({
  card: {
    marginVertical: 20,
    backgroundColor: 'whitesmoke',
    marginHorizontal: 17,
    paddingHorizontal: 22,
    paddingVertical: 26,
    borderRadius: 20,
  },
  text: {
    fontSize: 17,
    textAlign: 'center',
    lineHeight: 24,
    color: "#434343",    
    
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 15,
    textAlign: 'center',
  },

})

