import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View, TextInput, SafeAreaView } from 'react-native';
import Modal from 'react-native-modal'

import { SearchBar } from '../components/SearchBar'
import { SearchBarButton } from '../components/SearchBarButton'
import { DrawerButton } from '../components/DrawerButton'

import { Map } from '../components/Map'
import { styles } from '../styles'



export default function MapScreen({ navigation }){
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => { setModalVisible(!isModalVisible) }

  return <>
    <StatusBar style="auto" backgroundColor="whitesmoke"/>
    <Map />
    <DrawerButton openDrawer={navigation.openDrawer}/>
    
    <SearchBarButton onPress={toggleModal}/>
      
      <Modal 
        // hasBackdrop={false}
        animationIn='slideInDown'
        animationOut='fadeOut'
        // swipeDirection={['up', 'down']}
        avoidKeyboard={false}
        backdropOpacity={0}
        onBackdropPress={() => setModalVisible(false)}
        style={styles.modal}
        isVisible={isModalVisible}>
        <View style={styles.BottomSearch}>
          
          <SearchBar toggleModal={toggleModal}/>
        
        </View>
      </Modal>
    
  </>
}