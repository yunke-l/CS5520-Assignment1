import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import StartingScreen from './screens/StartingScreen';
import ConfirmScreen from './screens/ConfirmScreen';
import GameScreen from './screens/GameScreen';


export default function App() {
  // initialize state variables
  const intializeInput = { name:'', email:'', phone:''};
  const [userInput, setUserInput] = useState(intializeInput);
  const [screen, setScreen] = useState('start');
  
  const logout = () => {
    setUserInput(intializeInput);
    setScreen('start');
  }

  return (
    <View style={styles.container}>
      {screen === 'start' ? <StartingScreen userData={userInput} onStart={(data) => {setUserInput(data); setScreen('confirm')}} /> 
      : (screen === 'confirm' ? <ConfirmScreen userData={userInput} setScreen={setScreen} />
        : <GameScreen onLogout={logout} />)}

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
