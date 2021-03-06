import {View, ActivityIndicator} from 'react-native'


export default function Loading() {
  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator animating={true} size="large" />
    </View>
  )
}