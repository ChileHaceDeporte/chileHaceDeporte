import { StatusBar } from 'expo-status-bar';
import { useState, useCallback } from 'react'
import { StyleSheet } from 'react-native'

import { CustomButton } from '../components/CustomButton'
import { Octicons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';

import { MemoMap } from '../components/Map'
import { MemoSearchBar } from '../components/SearchBar'
import { ResultModal } from '../components/ResultModal'


export default function MapScreen({ navigation }){

  const [isSearchBarVisible, setSearchBarVisible] = useState(false);
  const [isResultModalVisible, setResultModalVisible] = useState(false);
  
  const [locations, setLocations] = useState([])
  const [resultLocation, setResultLocation] = useState({})


  const toggleSearchBar = () => setSearchBarVisible(!isSearchBarVisible)
  const toggleResultModal = () => setResultModalVisible(!isResultModalVisible)
  const openDrawer = () => navigation.openDrawer()

  const handleSearchBarPress = useCallback(locations => {
    setLocations(locations)}, [setLocations])
  
  const handleResultModalPress = useCallback(location => {
    setResultLocation(location)
    toggleResultModal()
  }, [setResultLocation])
  



  return <>

    <StatusBar style="auto" backgroundColor="white"/>
    
    <CustomButton OnPress={openDrawer} Icon={Octicons} IconName='three-bars' size={26}
      style={styles.DrawerButton}/>
    
    <MemoMap locations={locations} onPress={handleResultModalPress}/>
    
    <MemoSearchBar isModalVisible={isSearchBarVisible} setModalVisible={setSearchBarVisible} 
      onPress={handleSearchBarPress}/> 
    
    <ResultModal isModalVisible={isResultModalVisible} toggleModal={toggleResultModal} location={resultLocation}/>

    {!isSearchBarVisible && 
      <CustomButton OnPress={toggleSearchBar} Icon={Ionicons}
      IconName='ios-search-sharp' size={24} style={styles.SearchBarButton}/>}

  </>
}

const styles = StyleSheet.create({
  DrawerButton: {
    backgroundColor: "white",
    position: "absolute",
    left: 15,
    top: 40,
    borderRadius: 30,
    width: 48,
    height: 48,
    flex:1,
    justifyContent: 'center',
    alignItems: "center",
    shadowOpacity: .08,
    shadowRadius: 3,
    zIndex: 1
  },
  SearchBarButton: {
    backgroundColor: "white",
    borderRadius: 40,
    position: 'absolute',
    zIndex: 1,
    bottom: 10,
    width: 68,
    height: 48,
    alignSelf: 'center',
    flex:1,
    justifyContent: 'center',
    alignItems: "center",
    shadowOpacity: .08,
    shadowRadius: 3,

  },

})