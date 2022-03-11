import { View, Text, StyleSheet, Platform, Pressable } from 'react-native';
import { useContext } from 'react';
import Constants from 'expo-constants';

import MapContext from '../../contexts/MapContext';
import CompleteInput from './CompleteInput';

import useKeyboardHeight from './hooks/useKeyboardHeight';


export default function SearchBar() {
  
  const { toggeSearchBar } = useContext(MapContext)
  
  const keyboardHeight = useKeyboardHeight();

  return (
    <>
      <View style={[styles.modal, {maxHeight: keyboardHeight}]}>
        <Pressable onPress={() => toggeSearchBar()}>
          <Text style={styles.title}>Buscar</Text>
        </Pressable>
        <CompleteInput />
      </View>
      <Pressable onPress={() => toggeSearchBar()} style={styles.backdrop}>
      </Pressable>
    </>
  )
}


const styles = StyleSheet.create({
  modal:{
    width: '100%',
    paddingTop: Platform.OS === 'ios' ? Constants.statusBarHeight +2 : Constants.statusBarHeight,
    paddingBottom: 5,
    position: 'absolute',
    backgroundColor: 'white',
    zIndex: 1,
    paddingHorizontal: 17,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  backdrop: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 5,
    flex:1
  },
})
