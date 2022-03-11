import { useState } from 'react';


export function useInput(initialValue){
  const [value, setValue] = useState(initialValue);
  
  const handleChange = (text, name) => {
    setValue({...value, [name]: text});
  };
  const cleanUp = (name) => {
    setValue({...value, [name]: ''});
  }
  
  return [ value, handleChange, cleanUp]
}