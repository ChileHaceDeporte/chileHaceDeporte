import { Text, View, StyleSheet, SafeAreaView, ScrollView, StatusBar, Image, Linking, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Button } from 'react-native-elements';

import HeaderBack from '../../components/HeaderBack';

export default function MapResult({route, navigation }) {

  const { Comuna, Deporte, Direccion, Establecimiento, Latitud, Longitud, Link, Tel, Correo, Web } = route.params.location

  const openMapApp = () => {

    const latLng = `${Number(Latitud)},${Number(Longitud)}`
    const url = Platform.select({
      ios: `maps:0,0?q=${Establecimiento}@${latLng}`, android: `geo:0,0?q=${latLng}(${Establecimiento})`      
    })
    Linking.openURL(url);
  }
  
  return (
    <SafeAreaView style={{paddingTop: StatusBar.currentHeight, backgroundColor: 'white', flex:1}}>
      <HeaderBack title={Deporte} OnPress={() => navigation.goBack()}></HeaderBack>

      <ScrollView contentContainerStyle={styles.container} style={{backgroundColor: 'white',}}>

        
       <Image style={styles.image} source={{uri: Link}}/>


        <Text style={styles.title}>{Establecimiento}</Text>
        <Text style={styles.txtSub}>{Deporte}</Text>

        <TouchableOpacity style={styles.item} onPress={openMapApp}>
          <Ionicons name="location-sharp" size={24} color="black"/>
          <Text style={styles.txtItem}>{Direccion}, {Comuna}</Text>
        </TouchableOpacity>

        {(Tel !== '') && <TouchableOpacity onPress={() => Linking.openURL(`tel:${Tel}`)} style={styles.item}>
              <Ionicons name="call" size={22} color="black"/>
              <Text style={styles.txtItem}>{Tel}</Text>
            </TouchableOpacity>
        }

        {(Correo !== '') && <TouchableOpacity onPress={() => Linking.openURL(`mailto:${Correo}`)} style={styles.item}>
            <Ionicons name="mail" size={22} color="black"/>
            <Text style={styles.txtItem}>{Correo}</Text>
          </TouchableOpacity>
        }
        
        {(Web !== '') && <TouchableOpacity onPress={() => Linking.openURL(Web)} style={[styles.item, {marginBottom: 40}]}>
            <Foundation name="web" size={24} color="black" style={{marginRight: 3}}/>
            <Text style={styles.txtItem}>{Web}</Text>
          </TouchableOpacity>  
        }

        <Button title='Ir' onPress={openMapApp} type="outline" buttonStyle={{marginVertical: 40}}></Button>
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container:{
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
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  txtSub:{
    fontSize:17,
    marginBottom:30,
  },
  item:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 12,
  },
  txtItem:{
    fontSize:17,
    marginRight: 15,
    paddingHorizontal: 10,
    lineHeight: 22,
  },
})