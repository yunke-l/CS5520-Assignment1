import React, { useState} from "react";
import { View, Text, Button, Image} from "react-native";
import CardComp from "../components/CardComp";
import InputComp from "../components/InputComp";

const GameScreen = ({onLogout}) => {

  const [numberToGuess, setNumberToGuess] = useState(
    Math.floor(Math.random() * 11) + 10 // Generates a random number between 10 and 20
  );
  const [userGuess, setUserGuess] = useState('');

  const [guessCount, setGuessCount] = useState(0);
  const [gameState, setGameState] = useState('start');
  const [hint, setHint] = useState('');

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

  const handleReset = () => {
    setUserGuess('')
  }

  const handleNewGame = () => {
    setNumberToGuess(Math.floor(Math.random() * 11) + 10);
    setGuessCount(0);
    setGameState('start');

  }

  const handleTryAgain = () => {
    setUserGuess('');
    setGameState('start');
  };

  return (
    <View>
      <Button title="Logout" onPress={onLogout} />
      <Text>Guess a number between 10 and 20</Text>
      
      <CardComp>
      {gameState === 'start' ? (
        <View>

        <Text>Enter a Number</Text>
          <InputComp
            value={userGuess}
            onChangeText={(text) => setUserGuess(text)}
          />
          <Button title="Confirm" onPress={handleGuess} />
          <Button title="Reset" onPress={handleReset} />

        </View>
      ) : gameState === 'won' ? (
        <View>
          <Text>You guessed correct! Number of guesses: {guessCount}</Text>
          <Image
            source={{ uri: `https://picsum.photos/id/${numberToGuess}/100/100` }}
            style={{ width: 100, height: 100 }}
          />
          <Button title="New Game" onPress={handleNewGame} />
        </View>
      ) : (
        <View>
          <Text>You did not guess correct!</Text>
          <Image
            source={require('../assets/unamused-emoji.jpeg')}
            style={{ width: 100, height: 100 }}
          />
          <Text>{hint}</Text>
          <Button title="Try Again" onPress={handleTryAgain} />
        </View>
      )}

      </CardComp>
    </View>
  );
};

export default GameScreen;