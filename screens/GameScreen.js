import React, { useState} from "react";
import { View, Text, Button, Image} from "react-native";
import CardComp from "../components/CardComp";
import InputComp from "../components/InputComp";
import StyleHelper from "../StyleHelper";
import LinearGradientComp from "../components/LinearGradient";

const GameScreen = ({onLogout}) => {
  const [numberToGuess, setNumberToGuess] = useState(
    Math.floor(Math.random() * 11) + 10 // generates a random number between 10 and 20
  );
  const [userGuess, setUserGuess] = useState('');
  const [guessCount, setGuessCount] = useState(0);
  const [gameState, setGameState] = useState('start');
  const [hint, setHint] = useState('');

  // handle user guess
  const handleGuess = () => {
    const guess = parseInt(userGuess);
    if (isNaN(guess) || guess < 10 || guess > 20) {
      alert('Number has to be a number between 10 and 20');
      return;
    }

    setGuessCount(guessCount + 1);

    if (guess === numberToGuess) {
      setGameState('won');

    } else if (guess < numberToGuess) {
      setGameState('lost');
      setHint('Your guess is too low');
    } else {
      setGameState('lost');
      setHint('Your guess is too high');
    }
    setUserGuess('');
  };

  // handle reset
  const handleReset = () => {
    setUserGuess('')
  }

  // handle new game
  const handleNewGame = () => {
    setNumberToGuess(Math.floor(Math.random() * 11) + 10);
    setGuessCount(0);
    setGameState('start');

  }

  // handle try again
  const handleTryAgain = () => {
    setUserGuess('');
    setGameState('start');
  };

  return (
    <LinearGradientComp>
    <View style={StyleHelper.container}>
      <View style={StyleHelper.logoutButton}>
        <Button color="blue" title="Logout" onPress={onLogout} />
      </View>
      <Text style={StyleHelper.header}>Guess a number between 10 and 20</Text>
      
      <CardComp>
      {gameState === 'start' ? (
        <>

        <Text style={StyleHelper.gameMessage}>Enter a Number</Text>
          <InputComp
            value={userGuess}
            onChangeText={(text) => setUserGuess(text)}
          />
          <View style={StyleHelper.buttonBox}>
            <Button color="red" title="Reset" onPress={handleReset} />
            <Button color="blue" title="Confirm" onPress={handleGuess} />
          </View>
        </>
      ) : gameState === 'won' ? (
        <>
          <Text style={StyleHelper.gameMessage}>You guessed correct!</Text>
          <Text style={StyleHelper.gameMessage}>Number of guesses: {guessCount}</Text>
          <Image
            source={{ uri: `https://picsum.photos/id/${numberToGuess}/100/100` }}
            style={StyleHelper.image}
          />
          <Button color="blue" title="New Game" onPress={handleNewGame} />
        </>
      ) : (
        <>
          <Text style={StyleHelper.gameMessage}>You did not guess correct!</Text>
          <Image
            source={require('../assets/unamused-emoji.jpeg')}
            style={StyleHelper.image}
          />
          <Text>{hint}</Text>
          <Button color="blue" title="Try Again" onPress={handleTryAgain} />
        </>
      )}

      </CardComp>
    </View>
    </LinearGradientComp>
  );
};

export default GameScreen;