import { Linking, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { useState } from 'react';

import { comunasLista } from '../../components/map/helpers/comunas';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


import CustomButton from '../../components/map/Button';


function ModalPicker({ ChangeModalVisible, setChooseData }) {
 
  const render = ({ item }) => {
    
    const onPress = () => {
      setChooseData(item)
      ChangeModalVisible()
    }

    return (
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.item}>{item}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <Pressable onPress={ChangeModalVisible} style={{flex: 1, justifyContent: 'center'}}>
      
      <View style={styles.modalView}>
        <FlatList data={Object.keys(comunasLista)} renderItem={render} keyExtractor={item => item} 
          horizontal={false}/>
      </View> 
    
    </Pressable>
  )
}




export default function ComunidadScreen() {
  const [chooseData, setChooseData] = useState('Selecciona tu comuna');
  const [modalVisible, setModalVisible] = useState(false);

  const ChangeModalVisible = () => setModalVisible(!modalVisible)
  
  return (
    <View style={styles.centeredView}>
      
      <View style={styles.card}>
        <Text style={styles.text}>
          Busca la comunidad deportiva para unirte según comuna
        </Text>
       </View>


      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.inputContainer}>
        <Text style={styles.input}>{chooseData}</Text>
        {(chooseData !== 'Selecciona tu comuna') &&
          <CustomButton OnPress={() => setChooseData('Selecciona tu comuna')} Icon={AntDesign} IconName='close' size={23} style={styles.cancel}/>}
      </TouchableOpacity>
      
      <View style={{height: 90, marginBottom: 49, flex: 1, justifyContent: 'center',}}>
        {(chooseData !== 'Selecciona tu comuna') &&
          <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(comunasLista[chooseData])} >
            <FontAwesome name="whatsapp" size={22} color='white'/>
            <Text style={{fontSize: 17, marginLeft:5, color: 'white'}}>Únete</Text>
          </TouchableOpacity>
        }
      </View>

      <Modal transparent={true} visible={modalVisible}>
        <ModalPicker ChangeModalVisible={ChangeModalVisible} setChooseData={setChooseData}/>
      </Modal>
    
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'space-around',
    // alignItems: 'center',
    paddingHorizontal: 17,
    backgroundColor: 'white'
  },
  modalView: {
    marginTop: 55,
    height: Dimensions.get('window').height -185,
    marginHorizontal: 17,
    paddingVertical: 5,
    backgroundColor: 'whitesmoke',
    borderRadius: 4,
  },
  item:{
    padding: 10,
    fontSize: 17,
    fontWeight: '500',
  },

  button:{
    height: 40,
    flexDirection: 'row',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#16C60C',
  },



  input: {
    paddingHorizontal: 10,
    fontSize: 17,
    flex: 1,
    marginVertical: 5,
  },
  inputContainer:{
    height: 40,
    backgroundColor: 'whitesmoke',

    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cancel: {
    width: 40,
    alignItems:'center',
    backgroundColor: 'whitesmoke',
    borderRadius: 5,
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