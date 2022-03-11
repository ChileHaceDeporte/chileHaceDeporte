import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import MapRouter from './MapRouter';
import MenuRouter from './MenuRouter';
import NoticiasRouter from './NoticiasRouter';
// import EventosRouter from './EventosRouter';
// import ProfileScreen from '../screens/ProfileScreen';



import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';





const Tab = createBottomTabNavigator();

export default function AppRouter() {

  const screenOptions = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarActiveTintColor: '#2288DC',
    tabBarInactiveTintColor: 'gainsboro',
    tabBarStyle: {
      // position: 'absolute',
      borderTopWidth: 0,
      elevation: 0
    },
  }

  const home = ({ color, size }) => <Entypo name="home" size={size} color={color}/>
  const mapRouter = ({ color, size }) => <Feather name="search" size={size} color={color}/>
  const menu = ({ color, size }) => <Ionicons name="book-outline" size={size} color={color}/>
  const news = ({ color, size }) => <Ionicons name="newspaper-outline" size={size} color={color} />
  const event = ({ color, size }) => <MaterialIcons name="sports-handball" size={size} color={color} />


  // <Tab.Screen name="Profile" component={ProfileScreen} options={{tabBarIcon: perfil }}/>

  return (
      <Tab.Navigator screenOptions={ screenOptions }>
        <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon: home }}/>
        <Tab.Screen name="MapRouter" component={MapRouter} options={{tabBarIcon: mapRouter }}/>
        <Tab.Screen name="MenuRouter" component={MenuRouter} options={{tabBarIcon: menu }}/>
        <Tab.Screen name="NoticiasRouter" component={NoticiasRouter} options={{tabBarIcon: news }}/>
        {/* <Tab.Screen name="EventosRouter" component={EventosRouter} options={{tabBarIcon: event }}/> */}
      </Tab.Navigator>
  );
}
