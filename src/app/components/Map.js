import { View, Dimensions } from 'react-native'

import { styles } from '../styles'
import MapView from 'react-native-maps'

export function Map() {

  const initialRegion = {
    latitude: -33.42953912924826,
    longitude: -70.72455436429738,
    latitudeDelta: 0.0522,
    longitudeDelta: 0.0021,
  }
  const onPressHandler = () => console.log('marker')
  // return <View style={styles.map}>
  // </View>
  return <View style={styles.mapContainer}>
    <MapView style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height,}}
      initialRegion={initialRegion}>
    
    </MapView>
  </View>
}

  // const coordinate = { latitude: -33.408722654722645,
  //   longitude: -70.65303973123369,}
    // <MapView.Marker key={"1"} coordinate={coordinate} onPress={onPressHandler}/>