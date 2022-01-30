import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

import { Router } from './src/login/routes/Router'
import { AuthProvider } from './src/login/context/Auth'


// export default function App() {
//   return <View>
//     <Text>Open up App.js to start working on your app!</Text>
//     <StatusBar style="auto" />
//   </View>
// }

export default function App() {
  console.log('RENDER App')
  
  
  return <AuthProvider>
    <StatusBar style="auto"/>
    <Router />
  </AuthProvider>

}
