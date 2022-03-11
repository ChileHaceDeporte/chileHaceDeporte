import { useEffect, useState } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


import MapContext from '../contexts/MapContext';
import MapScreen from '../screens/map/MapScreen';
import MapResult from '../screens/map/MapResult';



const Stack = createNativeStackNavigator();

export default function MapRouter({ navigation }) {

  const [searchBarVisible, setSearchBarVisible] = useState(true)
  const [locations, setLocations] = useState([])
  
  const toggeSearchBar = () => setSearchBarVisible(!searchBarVisible)


  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', (e) => {
      setSearchBarVisible(true) // e.preventDefault();
    });
    return unsubscribe;
  }, [navigation]);

  const data = {searchBarVisible, toggeSearchBar, locations, setLocations}

  return (
    <MapContext.Provider value={data}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Mapa" component={MapScreen}/>
        <Stack.Screen name="MapResult" component={MapResult}/>
      </Stack.Navigator>
    </MapContext.Provider>
  )
}