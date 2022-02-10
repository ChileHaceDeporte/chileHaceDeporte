import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import Modal from 'react-native-modal'


import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export function ResultModal({isModalVisible, toggleModal, location}) {

  const {Establecimiento, Direccion, Comuna, Deporte} = location
  
  return <Modal
      animationIn='slideInUp'
      animationOut='fadeOut'
      propagateSwipe={true}
      backdropOpacity={0}
      style={styles.modal}
      isVisible={isModalVisible}>
        
      <TouchableOpacity onPress={() => toggleModal()} style={styles.closeButton}>
        <AntDesign name="close" size={24} color="black" />
      </TouchableOpacity>
      
      <ScrollView style={styles.container}>

          <Image transition={false} source={require('../../../assets/deporte_.jpg')} style={styles.image}/>
          <Text style={styles.title}>{Establecimiento}</Text>
          <Text style={styles.subTxt}>{Deporte}</Text>

          <View style={styles.item}>
            <Ionicons name="location-sharp" size={24} color="black" style={{marginRight:2}}/>
            <Text style={styles.txtItem}>{Direccion}, {Comuna}</Text>
          </View>

          <View style={styles.item}>
            <Ionicons name="call" size={23} color="black" style={{marginLeft:2}}/>
            <Text style={styles.txtItem}>225-64531</Text>
          </View>


          <Text style={styles.txt}>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</Text>
        
      </ScrollView>
    
    </Modal>
}



const styles = StyleSheet.create({
  title:{
    fontSize: 25,
    fontWeight: 'bold',
    paddingTop:30,
  },
  subTxt:{

    fontSize:16,
    paddingBottom: 15,
    paddingTop: 5,
  },
  txt:{
    fontSize:16,
    marginTop: 10,
    marginBottom: 10,

  },
  item:{
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  txtItem:{
    fontSize:16,
    marginRight: 20,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  image:{
    marginTop: 40,
    height: 200,
    width: null,
    resizeMode: 'contain',
  },
  modal:{
    margin: 0,
    backgroundColor: 'white',
    paddingTop: 22,
  },
  container:{
    paddingLeft: 20,
    paddingRight: 20,

  },
  closeButton:{
    backgroundColor: 'whitesmoke',
    position: "absolute",
    right: 15,
    top: 40,
    borderRadius: 30,
    width: 48,
    height: 48,
    flex:1,
    justifyContent: 'center',
    alignItems: "center",
    zIndex: 1

  },
});

// export const ResultModalMemo = memo(ResultModal);