import { Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';



export default function ListQueried({ queried, setValue, name }) {


  
  if (queried.length < 1) return <></>

  const render = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => setValue(item, name)}>
        <Text style={styles.item}>{item}</Text>
      </TouchableOpacity>
    )
  }
  return (
    <FlatList data={queried} renderItem={render} keyExtractor={item => item}
      keyboardShouldPersistTaps='always'
      horizontal={false}/>
  )

}

const styles = StyleSheet.create({

  item:{
    padding: 10,
    fontSize: 17,
    fontWeight: '500',
  },


})