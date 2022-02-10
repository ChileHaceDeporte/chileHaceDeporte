import { Dimensions, TouchableOpacity, Text } from 'react-native'
import { memo, useState } from 'react'
import MapView from 'react-native-maps'


import { getEstablecimiento } from '../base/base'


function Map({ locations, onPress }) {

  const average = name => locations.reduce((a, b) => {return a + Number(b[name])}, 0) / locations.length;
    
  const region = {
    latitude: average('Latitud') || -33.4566362382008,
    longitude: average('Longitud') || -70.6488050373298,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  }
  const initialRegion = {
    latitude: -33.4566362382008,
    longitude: -70.6488050373298,
    latitudeDelta: 0.2,
    longitudeDelta: 0.2,
  }



  const onPressHandler = (id) => {
    getEstablecimiento(id)
      .then(res => onPress(res))
      .catch(err => console.log(err))
  }

  const renderResult = locations.map(item => {
    const coordinate = { latitude: Number(item.Latitud), longitude: Number(item.Longitud) }

    return <MapView.Marker key={item.Id} coordinate={coordinate} onPress={() => onPressHandler(item.Id)}>
    </MapView.Marker>

  })


  return <MapView initialRegion={initialRegion} region={region}
    
    style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height,}}>
    {renderResult}
  
  </MapView> 
    
}

export const MemoMap = memo(Map);
