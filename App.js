import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import StartingScreen from './screens/StartingScreen';
import ConfirmScreen from './screens/ConfirmScreen';
import GameScreen from './screens/GameScreen';


export default function App() {
  // initialize state variables
  const intializeInput = { name:'', email:'', phone:''};
  const [userInput, setUserInput] = useState(intializeInput);
  const [isValid, setIsValid] = useState(false);
  const [hasConfirmed, setHasConfirmed] = useState(false);
  
  const handleStart = (data) => {
    setUserInput(data);
    setIsValid(true);
  };


  const handleConfirm = () => {
    setHasConfirmed(true);
  }





  return (
    <View>
      {isValid ? (
        hasConfirmed ? (
          <GameScreen />
        ) : (
          <ConfirmScreen onConfirm={handleConfirm} userData={userInput} onGoBack={() => setIsValid(false)} />
        )
      ) : (
        <StartingScreen onStart={handleStart} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
