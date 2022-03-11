import { useEffect, useState } from 'react';
import { Keyboard, Dimensions } from 'react-native';

const useKeyboardHeight = () => {
  const [keyboardHeight, setKeyboardHeight] = useState(null);

  useEffect(() => {
    const unsubscribe = Keyboard.addListener('keyboardDidShow', keyboardDidShow);

    // cleanup function
    return unsubscribe;
  }, []);


  const keyboardDidShow = (frames) => {
    setKeyboardHeight(Dimensions.get('window').height - frames.endCoordinates.height);
  };

  return keyboardHeight;
};

export default useKeyboardHeight;