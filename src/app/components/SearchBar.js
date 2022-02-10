import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useState, memo } from 'react'

import Modal from 'react-native-modal'

import { getEstablecimientos } from '../base/base'

import { CompleteInput } from './CompleteInput'

import { CustomButton } from './CustomButton'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


function SearchBar({ isModalVisible, setModalVisible, onPress }) {

  const [query, setQuery] = useState({ comuna: '', deporte: '' })
  
  const cleanUpQuery = () => setQuery({ comuna: '', deporte: '' })
  const toggleSearchBar = () => setModalVisible(!isModalVisible)

  const OnPress = () => {
    if (query.comuna === '' || query.deporte === '') return;
    
    getEstablecimientos(query.comuna, query.deporte)
      .then(res => onPress(res))
      .catch(err => console.log(err))

    toggleSearchBar()
  }

  return <Modal animationIn='slideInDown'animationOut='fadeOut' avoidKeyboard={false}
    backdropOpacity={0} onBackdropPress={() => toggleSearchBar()} style={styles.modal}
    // hasBackdrop={false} swipeDirection={['up', 'down']}
    isVisible={isModalVisible}>
    
    <View style={styles.SearchBar}>
      
      <CompleteInput value={query} setValue={setQuery}/>

      <CustomButton OnPress={OnPress} Icon={Ionicons} IconName='ios-search-sharp' size={24}
        style={styles.SearchButton}/>
            
      {(query.comuna !== '' || query.deporte !== '') &&
        <CustomButton OnPress={cleanUpQuery} Icon={AntDesign}
          IconName='close' size={23} style={styles.CancelButton}/>}

    </View>
  </Modal>
}

export const MemoSearchBar = memo(SearchBar);

export const styles = StyleSheet.create({
  SearchBar: {

    backgroundColor: 'white',
    paddingTop: 22,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
    shadowOpacity: .08,
    shadowRadius: 3,
    borderRadius: 4,
  },
   modal:{
    justifyContent: 'flex-start',
    margin: 0,
  },
  SearchButton: {
    position: 'absolute',
    zIndex: 1,
    top: 82,
    right: 0,
    width: 68,
    height: 48,
    alignSelf: 'center',
    flex:1,
    justifyContent: 'center',
    alignItems: "center",
  },
  CancelButton: {
    position: 'absolute',
    zIndex: 1,
    top: 27,
    right: 0,
    width: 68,
    height: 48,
    alignSelf: 'center',
    flex:1,
    justifyContent: 'center',
    alignItems: "center",
  },
})


