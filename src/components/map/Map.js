import { View, Button, Text, } from 'react-native';
import { memo } from 'react';
import { useNavigation } from '@react-navigation/native';
import MapView from 'react-native-maps';


import { getEstablecimiento } from '../../base/base';


function Map({ locations}) {

  const { navigate } = useNavigation();
  
  const average = name => locations.reduce((a, b) => {return a + Number(b[name])}, 0) / locations.length;

  const onPressHandler = id => {
    getEstablecimiento(id).then(res => navigate('MapResult', {location: res}))
  }

  const region = {
    latitude: average('Latitud') || -33.4566362382008,
    longitude: average('Longitud') || -70.6488050373298,
    latitudeDelta: 0.2,
    longitudeDelta: 0.2,
  }
  const initialRegion = {
    latitude: -33.4566362382008,
    longitude: -70.6488050373298,
    latitudeDelta: 0.2,
    longitudeDelta: 0.2,
  }
  
  const renderResult = locations.map(item => {
    const coordinate = { latitude: Number(item.Latitud), longitude: Number(item.Longitud) }
    return (
      <MapView.Marker key={item.Id} coordinate={coordinate} onPress={() => onPressHandler(item.Id)}>
      </MapView.Marker>
    )
  })
  

  return (
    <MapView initialRegion={initialRegion} region={region} style={{flex:1}}>
      { renderResult }
    </MapView> 
  )
}


export default memo(Map)