import { Text, View, StyleSheet, ScrollView, Linking, TouchableOpacity,} from 'react-native';
import { Button } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
// import { useFonts } from 'expo-font';

export default function InfoScreen() {
  // const [loaded] = useFonts({Mulish: require('../../../assets/fonts/Mulish.ttf'),});
  // if (!loaded) return null;
  
  return (
    <ScrollView contentContainerStyle={{backgroundColor: 'white', paddingBottom:40 }}>

      <View style={styles.card}>
        
        <Text style={styles.title}>App Chile Hace Deporte</Text>
        <Text style={styles.text}>
          App CHD es una aplicación en desarrollo, que continuamente incorporará más información. En su periodo beta iniciará con la región metropolitana y sus comunas.{'\n'}Esta aplicación requiere de la participación y retroalimentación de sus usuarios para lograr su cometido, su uso es de bien público y gratuito.
        </Text>        
      </View>       

      <View style={styles.card}>
        <Text style={styles.title}>Web y Mail</Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://chilehacedeporte.cl/')} style={{marginVertical: 10}}>
          <Text style={[styles.text, {textAlign: 'left',}]}>chilehacedeporte.cl</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('mailto:contacto@chilehacedeporte.cl')}>
          <Text style={[styles.text, {textAlign: 'left',}]}>contacto@chilehacedeporte.cl</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.card}>
        <Text style={styles.title}>Redes Sociales</Text>
        <View style={styles.rrss}>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/chilehacedeporte/')}>
            <AntDesign name="instagram" size={29} color="#C72E78" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/chilehacedeporte2020/')}>
            <AntDesign name="facebook-square" size={29} color="#1877F2" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com/Chiledosport')}>
            <AntDesign name="twitter" size={29} color="#1D9BF0" />
          </TouchableOpacity>        
        </View>
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
    borderColor: '#2288DC',

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
    color: 'black',
    fontWeight: 'bold',
    marginVertical: 15,
    textAlign: 'center',
  },
  rrss:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 26,
    paddingHorizontal: 22,
  }

})
