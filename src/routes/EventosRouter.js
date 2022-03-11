import { createNativeStackNavigator } from '@react-navigation/native-stack';


import EventosListScreen from '../screens/eventos/EventosListScreen';
import EventosScreen from '../screens/eventos/EventosScreen';



const Stack = createNativeStackNavigator();

export default function NoticiasRouter({ navigation }) {

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="EventosList" component={EventosListScreen}/>
      <Stack.Screen name="Eventos" component={EventosScreen}/>
    </Stack.Navigator>
  )
}