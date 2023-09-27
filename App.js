
import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import StartingScreen from './screens/StartingScreen';
import ConfirmScreen from './screens/ConfirmScreen';
import GameScreen from './screens/GameScreen';


export default function App() {
  // Initialize state variables
  const [isValid, setIsValid] = useState(false);
  const [hasConfirmed, setHasConfirmed] = useState(false);

  const handleStart = () => {
    // Validate user input (you can add your validation logic here)
    const userInputIsValid = true; // Replace with your validation logic
    setIsValid(userInputIsValid);

    if (userInputIsValid) {
      // If user input is valid, set hasConfirmed to true and navigate to ConfirmScreen
      setHasConfirmed(true);
    }
  };

  const handleConfirm = () => {
    // Set hasConfirmed to true and navigate to GameScreen
    setHasConfirmed(true);
  };


  return (
    <View>
      {isValid ? (
        hasConfirmed ? (
          <GameScreen />
        ) : (
          <ConfirmScreen onConfirm={handleConfirm} />
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
