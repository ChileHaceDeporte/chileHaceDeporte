import { TextInput, View, StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';
// import { BottomSheetTextInput } from '@gorhom/bottom-sheet'
import { styles } from '../styles'
import { useEffect, useState } from 'react'

const data = [
  {
    comuna: 'Pudahuel',
    deportes: ['Fútbol', 'Tenis', 'Piscina']
  },
  {
    comuna: 'Lo Prado',
    deportes: ['Fútbol', 'Tenis', 'Piscina', 'Skate']
  },
  {
    comuna: 'Recoleta',
    deportes: ['Fútbol', 'Tenis', 'Piscina']
  },
  {
    comuna: 'Estación Central',
    deportes: ['Fútbol', 'Tenis', 'Piscina', 'Basketball']
  },
  {
    comuna: 'Nuñoa',
    deportes: ['Fútbol', 'Tenis', 'Piscina', 'Basketball']
  }, 
]

export function AutocompleteInput({ onChangeText, value }) {

  const [queriedComunas, setQueriedComunas] = useState([])
  const [queriedDeportes, setQueriedDeportes] = useState([])
  
  function setQueriedData( name, comunas = [] ) {
    if (value[name] === '') return []
    else {
      const queriedData = comunas.filter( item => item.toLowerCase().includes(value[name].toLowerCase()))
      if(queriedData.length === 1 && queriedData[0].toLowerCase() === value[name].toLowerCase())
        return []
      return queriedData
    }

  }

  useEffect(() => {
    setQueriedComunas(setQueriedData('comuna', data.map(item => item.comuna)))
  }, [value.comuna])
 
 useEffect(() => {
    const deportes = data.filter( item => item.comuna.toLowerCase() === value.comuna.toLowerCase())
    if (deportes[0])
      setQueriedDeportes(setQueriedData('deporte', deportes[0].deportes))
  }, [value.deporte])




  const renderComunas = ({ item }) => {
    return <TouchableOpacity style={styles.item} onPress={() => onChangeText({...value, ['comuna']: item})}>
      <Text style={styles.textItem}>{item}</Text>
    </TouchableOpacity>
  }
  const renderDeportes = ({ item }) => {
    return <TouchableOpacity style={styles.item} onPress={() => onChangeText({...value, ['deporte']: item})}>
      <Text style={styles.textItem}>{item}</Text>
    </TouchableOpacity>
  }


  return <>
  

    <TextInput
      autoComplete='off'
      autoCorrect={false}
      placeholder='Busca Comuna'
      placeholderTextColor='grey'
      onChangeText={ text => onChangeText({...value, ['comuna']: text}) }
      value={value['comuna']}
      style={styles.input} />

    <TextInput 
      autoComplete='off'
      autoCorrect={false}
      placeholder='Busca Deporte'
      placeholderTextColor='grey'
      onChangeText={ text => onChangeText({...value, ['deporte']: text}) }
      value={value['deporte']}
      style={styles.input}/>


    { queriedComunas.length > 0 && 

      <FlatList data={queriedComunas} renderItem={renderComunas}
        keyExtractor={item => item} horizontal={false} style={styles.list}/> }

    { queriedDeportes.length > 0 && 

      <FlatList data={queriedDeportes} renderItem={renderDeportes}
        keyExtractor={item => item} horizontal={false} style={styles.list}/> }
  </>
}

    
