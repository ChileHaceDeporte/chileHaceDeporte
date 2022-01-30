import {View, ActivityIndicator} from 'react-native'

export const Loading = () => {
  return <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'whitesmoke' }}>
      <ActivityIndicator animating={true} size="large" color='grey'/>
  </View>

}
