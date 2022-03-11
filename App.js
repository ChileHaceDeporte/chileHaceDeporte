import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {LogBox} from 'react-native'


import AuthRouter from './src/routes/AuthRouter'

export default function App() {
  LogBox.ignoreAllLogs(true)

  return (
    <>
      <StatusBar style="dark"/>
      <AuthRouter />
    </>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
