import { Linking, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';



export default function DeportesScreen() {

  
  return (
    <ScrollView contentContainerStyle={styles.container} style={{backgroundColor: 'white',}}>
      <View style={styles.card}>
        <Text style={styles.text}>Conoce todos los deportes en nuestro sitio web</Text>
      </View>
      <Image style={styles.image} source={{uri: 'https://chilehacedeporte.cl/wp-content/uploads/2022/03/Mesa-de-trabajo-5_6-1.png'}}/>
      <Button title="Ir" titleStyle={{ fontSize: 16 }} type="outline" onPress={() => Linking.openURL('https://chilehacedeporte.cl/deportes/')}  buttonStyle={{ height: 48}}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1, 
    justifyContent: 'space-around',
    marginHorizontal: 17,
    paddingBottom: 20,
  },
  image: {
    marginBottom: 20,
    height: 'auto',
    width: '100%',
    aspectRatio: 640 /480,
    borderRadius: 5,
    // resizeMode:'repeat',
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
    color: "#434343",  
  }
});