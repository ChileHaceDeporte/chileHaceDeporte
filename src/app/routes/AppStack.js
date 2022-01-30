import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text, View } from 'react-native';

import MapScreen from '../screens/MapScreen'
import ProfileScreen from '../screens/ProfileScreen'

import { DrawerNavegation } from './DrawerNavegation'


const Drawer = createDrawerNavigator();







export default function AppStack () {
  

  return <Drawer.Navigator screenOptions={{headerShown: false}}
    drawerContent={props => <DrawerNavegation {...props} />}>

    <Drawer.Screen name="Map" component={MapScreen} />
    <Drawer.Screen name="Profile" component={ProfileScreen} />
  
  </Drawer.Navigator>


}
