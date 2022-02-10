import { Text, View, SafeAreaView } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from  '@react-navigation/drawer'

import { Ionicons } from '@expo/vector-icons';

export function DrawerNavegation(props) {
  

  return <View style={{flex: 1, paddingTop: 15, backgroundColor: 'whitesmoke'}}>
    <DrawerContentScrollView {...props} >

      <DrawerItem
        onPress={() => {props.navigation.navigate('Profile')}}
        icon={({color, size}) => <Ionicons name="person-outline" size={size} color='black' />}
        labelStyle={{fontSize: 16, color: 'black', fontWeight: 'normal'}}
        label='Mi perifl'>
        
      </DrawerItem>


      <DrawerItem 
        onPress={() => {props.navigation.navigate('Map')}}
        icon={({color, size}) => <Ionicons name="map-outline" size={size} color="black" />}
        labelStyle={{fontSize: 16, color: 'black', fontWeight: 'normal'}}
        label='Mapa'>
        
      </DrawerItem>



    </DrawerContentScrollView>
  </View>
}
