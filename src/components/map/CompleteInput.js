import { TextInput, StyleSheet, View } from 'react-native';
import { useEffect, useState, useContext, } from 'react';

import MapContext from '../../contexts/MapContext';
import { useInput } from './hooks/useInput';

import { queriedData } from './helpers/queriedData';
import { comunas } from './helpers/comunas';

import ListQueried from './ListQueried';
import Button from './Button';
import { AntDesign } from '@expo/vector-icons';

import { getDeportes, getDeportes2, getEstablecimientos, getEstablecimientos2, getEstablecimientos3} from '../../base/base';

const Title = str => str.split(' ').map(w => w[0].toUpperCase() + w.substring(1).toLowerCase()).join(' ')


export default function CompleteInput() {

  const [value, handleChange, cleanUp] = useInput({ comuna: '', deporte: '', })
  const [focus, SetFocus] = useState({comuna: false, deporte: false})
  const [queried, setQueried] = useState([])

  const { toggeSearchBar, setLocations } = useContext(MapContext)
 
  const OnPress = () => {
    if (value.comuna === '' && value.deporte === '') return;

    if (value.comuna !== '' && value.deporte !== '')
      getEstablecimientos(Title(value.comuna), Title(value.deporte)).then(res => setLocations(res))
    if (value.comuna === '' && value.deporte !== '')
      getEstablecimientos2(Title(value.deporte)).then(res => setLocations(res));
    if (value.comuna !== '' && value.deporte === '')
      getEstablecimientos3(Title(value.comuna)).then(res => setLocations(res));

    toggeSearchBar()
  }
  

  useEffect(() => {
    if(value.comuna.length > 3 && queried.length < 1)
      getDeportes(Title(value.comuna)).then(res => setQueried(res))
    else
      getDeportes2().then(res => setQueried(res))
  },[focus.deporte])

  useEffect(() => { 
    if(queried.length > 0 ) setQueried([]) 
  }, [value.comuna])


  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          autoComplete='off'
          autoCorrect={false}
          placeholder='Busca tu comuna'
          onFocus={() => SetFocus({comuna: true, deporte: false})}
          onBlur={() => SetFocus({comuna: false, deporte: false})}
          onChangeText={text => handleChange(text, 'comuna') }
          value={value.comuna}
          placeholderTextColor='grey'
          returnKeyType='search'
          onSubmitEditing={OnPress}        
          style={styles.input} />
          
          {(value.comuna !== '' && focus.comuna) &&
            <Button OnPress={() => cleanUp('comuna')} Icon={AntDesign} IconName='close' size={23} style={styles.cancel}/>}
      </View>
      
      <View style={styles.inputContainer}>
        <TextInput
          autoComplete='off'
          autoCorrect={false}
          placeholder='Deporte'
          onFocus={() => SetFocus({comuna: false, deporte: true})}
          onBlur={() => SetFocus({comuna: false, deporte: false})}
          onChangeText={text => handleChange(text, 'deporte') }
          value={value.deporte}
          placeholderTextColor='grey'
          returnKeyType='search'
          onSubmitEditing={OnPress}        
          style={styles.input} />
        {(value.deporte !== '' && focus.deporte) &&
          <Button OnPress={() => cleanUp('deporte')} Icon={AntDesign} IconName='close' size={23} style={styles.cancel}/>}
      </View>

        
      {focus.comuna && <ListQueried queried={queriedData(value.comuna, comunas)} setValue={handleChange} name='comuna'/>}
      {focus.deporte && <ListQueried queried={queriedData(value.deporte, queried)} setValue={handleChange} name='deporte'/>}

    </>
  )
}


const styles = StyleSheet.create({

  input: {
    paddingHorizontal: 10,
    fontSize: 17,
    flex: 1,
  },
  inputContainer:{
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
    borderRadius: 5,
    marginVertical: 5,
    
  },
  cancel: {
    backgroundColor: 'whitesmoke',
    width: 40,
    alignItems:'center',
  },

})
