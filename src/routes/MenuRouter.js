import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, } from 'react-native';
import Constants from 'expo-constants';


import Header from '../components/Header';

import InfoScreen from '../screens/menu/InfoScreen';
import ComunidadScreen from '../screens/menu/ComunidadScreen';
import DonationScreen from '../screens/menu/DonationScreen';
import DeportesScreen from '../screens/menu/DeportesScreen';
// import DeportesScreen from '../screens/menu/DeportesScreen';




const Tab = createMaterialTopTabNavigator();


export default function MyTabs() {


  const screenOptions = {
    tabBarLabelStyle: { textTransform: 'none', fontSize: 17,},
    tabBarActiveTintColor: '#2288DC',
    tabBarInactiveTintColor: 'gainsboro',
    tabBarIndicatorStyle:{
      backgroundColor: '#2288DC'
    },
    tabBarScrollEnabled: true,
  }

      // <Tab.Screen name="Deportes" component={DeportesScreen}/>
  return (
    <>
    <View style={{paddingTop:Constants.statusBarHeight, backgroundColor: 'white'}}></View>
    <Header title='Menú'></Header>
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Comunidad" component={ComunidadScreen}/>
      <Tab.Screen name="Información" component={InfoScreen}/>
      <Tab.Screen name="Donaciones" component={DonationScreen}/>
      <Tab.Screen name="Deportes" component={DeportesScreen}/>
    </Tab.Navigator>
    </>
  );
}
