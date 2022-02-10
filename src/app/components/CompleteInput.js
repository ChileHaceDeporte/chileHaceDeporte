import { Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useEffect, useState, memo } from 'react'

import { getDeportes } from '../base/base'

function queriedData( valueItem, items = [] ) {
  if (valueItem === '') return []
  const queriedData = items.filter( item => item.toLowerCase().includes(valueItem.toLowerCase()))

  if(queriedData.length === 1 && queriedData[0].toLowerCase() === valueItem.toLowerCase())
    return []

  return queriedData
}



function List({queried, setValue, value, name}) {

  const render = ({ item }) => {
    return <TouchableOpacity style={styles.item} onPress={() => setValue({...value, [name]: item})}>
      <Text style={styles.textItem}>{item}</Text>
    </TouchableOpacity>
  }

  return <FlatList data={queried} renderItem={render} keyExtractor={item => item} 
    horizontal={false}/>
}


const comunas = ['Buin', 'Cerrillos', 'Cerro Navia', 'Colina', 'Conchalí', 'El Bosque', 'Estación Central', 
'Huechuraba', 'Independencia', 'La Florida', 'La Granja', 'La Pintana', 'La Reina', 'Lampa', 'Las Condes',
'Lo Barnechea', 'Lo Prado', 'Macul', 'Maipu', 'Peñaflor', 'Peñalolen', 'Pirque', 'Pirque ', 'Providencia ',
'Pudahuel', 'Quilicura', 'Quinta Normal', 'Recoleta', 'San Bernardo', 'San Joaquín', 'San Miguel', 'San Ramón',
'Santiago', 'Talagante', 'Til Til', 'Ñuñoa']



export function CompleteInput({ value, setValue }) {
  
  const [queried, setQueried] = useState({ comunas: [], deportes: [] })
  

  useEffect(() => {
    setQueried({...queried, comunas: queriedData(value.comuna, comunas)})
  }, [value.comuna])
  
  useEffect(() => {

    getDeportes(value.comuna)
      .then(deportes => setQueried( {...queried, deportes: queriedData(value.deporte, deportes)} ))
  }, [value.deporte])



  return <>

    <TextInput
      autoComplete='off'
      autoCorrect={false}
      placeholder='Busca Comuna'
      placeholderTextColor='grey'
      onChangeText={text => setValue({...value, comuna: text}) }
      value={value.comuna}
      style={styles.input} />
    
    <TextInput
      autoComplete='off'
      autoCorrect={false}
      placeholder='Busca Comuna'
      placeholderTextColor='grey'
      onChangeText={text => setValue({...value, deporte: text}) }
      value={value.deporte}
      style={styles.input} />      


    <List queried={queried.comunas} setValue={setValue} value={value} name={'comuna'}/>
    <List queried={queried.deportes} setValue={setValue} value={value} name={'deporte'}/>

  </>
}


const styles = StyleSheet.create({

  input: {
    fontSize: 16,
    height: 39,
    marginBottom: 8,
    marginTop: 8,
    borderRadius: 6,
    paddingHorizontal: 10,
    backgroundColor: 'whitesmoke',
  },  

  item:{
    padding: 10,
  },
  textItem:{
    fontSize: 16,
  },

})

