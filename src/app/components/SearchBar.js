import { Button, View, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import { AutocompleteInput } from './AutocompleteInput'
import { Ionicons } from '@expo/vector-icons';


import { styles } from '../styles'


export function SearchBar({ toggleModal }) {
  
  
  const [query, setQuery] = useState({
    comuna: '', deporte: '' })
  
  // console.log(query)
  const handleOnPress = () => {

    if(query.comuna && query.deporte){
      console.log(query)
      toggleModal()
    }
  }

  return <>
    
    <AutocompleteInput onChangeText={setQuery} value={query} />
    <TouchableOpacity style={styles.SearchButton} onPress={handleOnPress}>
      <Ionicons name="ios-search-sharp" size={24} color="black" />
    </TouchableOpacity>


  </>

}
