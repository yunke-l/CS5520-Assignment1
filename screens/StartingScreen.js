import React, {useEffect, useState} from "react";
import { Text, Button, View, StyleSheet } from "react-native";
import StyleHelper from "../StyleHelper";
import CardComp from "../components/CardComp";
import InputComp from "../components/InputComp";
import CheckBox from "../components/CheckBox";
import LinearGradientComp from "../components/LinearGradient";

const StartingScreen = ({ userData, onStart }) => {
    // initialize user data
    const initializeData = { name:'', email:'', phone:''};
    const [userInput, setUserInput] = useState(userData);

    // initialize error messages
    const initializeError = { nameError:'', emailError:'', phoneError:''};
    const [error, setError] = useState(initializeError);

    // initialize checkbox state
    const [isChecked, setIsChecked] = useState(false);

    const validateUserInput = () => {
        // initialize isValid to true
        let isValid = true;

        // initialize newError
        const newError = { nameError:'', emailError:'', phoneError:''};

        // name is invalid if it is less than 2 characters or non-numerical
        if ( userInput.name.length < 2 || !isNaN(userInput.name)) {
            newError.nameError = 'Please enter a valid name';
            isValid = false;
        }

        // email is invalid if it is not in email format
        const emailRegex = /^[\w\.-]+@[\w\.-]+\.\w+$/;
        if ( !emailRegex.test(userInput.email) ) {
            newError.emailError = 'Please enter a valid email';
            isValid = false;
        }

        // phone is invalid if it is not 10 digits
        if ( userInput.phone.length !== 10 || isNaN(userInput.phone)) {
            newError.phoneError = 'Please enter a valid phone number';
            isValid = false;
        }

        // set error messages
        setError(newError);

        // return isValid
        return isValid;
    };

    // store user input for backtracking
    useEffect(() => {
        if (userData) {
            setUserInput(userData || initializeData);
        }
    }
    , []);

    // handle start button press
    const handleStart = () => {
        // validate user input
        if ( validateUserInput() ) {
            // if valid, call onStart
            onStart(userInput);
        }
    };

    // handle reset button press
    const handleReset = () => {
        // reset user data and error messages and checkbox
        setUserInput(initializeData);
        setError(initializeError);
        setIsChecked(false);
    };


    return (
        <LinearGradientComp>
        <View style={StyleHelper.container}>
            <Text style={StyleHelper.header}>Welcome</Text>
            <CardComp>
                

                <InputComp
                    label="Name"
                    value={userInput.name}
                    onChangeText={text => setUserInput({...userInput, name:text})}
                    error={error.nameError}
                />

                <InputComp
                    label="Email address"
                    value={userInput.email}
                    onChangeText={text => setUserInput({...userInput, email:text})}
                    error={error.emailError}
                />

                <InputComp
                    label="Phone number"
                    value={userInput.phone}
                    onChangeText={text => setUserInput({...userInput, phone:text})}
                    error={error.phoneError}
                />

                <CheckBox
                    label="I'm not a robot"
                    checked={isChecked}
                    onChange={setIsChecked}
                />

                <View style={StyleHelper.buttonBox}>
                    <Button color={"red"} title="Reset" onPress={handleReset} />      
                    <Button color={"blue"} title="Start" onPress={handleStart} disabled={!isChecked} />
                </View>
            </CardComp>
        </View>
        </LinearGradientComp>
    );
}



export default StartingScreen;