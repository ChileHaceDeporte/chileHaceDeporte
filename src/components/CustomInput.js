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
    height: 39,
    marginBottom: 8,
    marginTop: 8,
    borderRadius: 6,
    width: "100%",
    paddingHorizontal: 10,
    backgroundColor: "#FFFFFF",
    fontSize: 16,

  },
  warning:{
    alignSelf:"flex-start",
    color:"darkred",
  }

});