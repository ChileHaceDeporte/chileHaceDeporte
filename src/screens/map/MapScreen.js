import { useContext } from 'react';
import MapContext from '../../contexts/MapContext';

import Map from '../../components/map/Map';
import SearchBar from '../../components/map/SearchBar';



export default function MapScreen() {

  const { searchBarVisible, locations } = useContext(MapContext)

  return (
    <>
      <Map locations={locations}/>
      {searchBarVisible && <SearchBar/>}
    </>
  );

}

