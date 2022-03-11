import { Text, TextInput, StyleSheet } from 'react-native'
import { Controller} from 'react-hook-form'

const CustomInput = ({control, name, placeholder, secureTextEntry, rules, keyboardType, autoCapitalize}) => {
  
  return <Controller
    control={control}
    name={name}
    rules={rules}
    // defaultValue=""
    render={({ field: { onChange, onBlur, value }, fieldState: { error }}) => (
      <>
        <TextInput
          // autoComplete="off"
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          style={styles.input}/>

        {error && (<Text style={styles.warning}>{error.message || 'error'}</Text>)}
      </>
    )}/>
}

export default CustomInput

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 10,
    height: 40,
    fontSize: 17,
    marginVertical: 5,
    
    borderRadius: 4,
    width: "100%",
    backgroundColor: "#FFFFFF",

  },
  warning:{
    alignSelf:"flex-start",
    fontSize: 15,
    marginHorizontal: 5,
    marginBottom: 10

    // color:"whitesmoke",
  }

});