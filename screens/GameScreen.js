import React from "react";
import { View, Text, Button } from "react-native";
import CardComp from "../components/CardComp";
import InputComp from "../components/InputComp";

const GameScreen = (onLogout) => {
    const [randomNumber, setRandomNumber] = useState(null);
    const [userGuess, setUserGuess] = useState("");
    const [message, setMessage] = useState("Guess a number between 10 and 20");
    const [attempts, setAttempts] = useState(0);
    const [showResults, setShowResults] = useState(false);

    

    return (
        <View>
        <Button title="Logout" />
        <Text>Guess A Number Between 10 & 20</Text>
        <CardComp>
            <Text>Enter a Number</Text>
            <InputComp />
            <Button title="Reset" />
            <Button title="Confirm" />
        </CardComp>
        </View>
    );
};

export default GameScreen;
