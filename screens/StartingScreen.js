import React, {useCallback, useState} from "react";
import { Text, Button, View } from "react-native";
import CardComp from "../components/CardComp";
import InputComp from "../components/InputComp";
import CheckBox from "../components/CheckBox";

const StartingScreen = ({ onStart, onReset, userData = {name:'', email:'', phone:''} }) => {
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

    const handleStart = () => {
        // validate user input
        if ( validateUserInput() ) {
            // if valid, call onStart
            onStart(userInput);
        }
    }

    const handleReset = useCallback(() => {
        // reset user data and error messages and checkbox
        setUserInput(initializeData);
        setError(initializeError);
        setIsChecked(false);
    }, [initializeData, initializeError]);
    
    const handleCheckboxChange = (newValue) => {
        setIsChecked(newValue);
    };



    return (
        <CardComp>
            <Text>Welcome</Text>

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
                onChange={handleCheckboxChange}
            />

            <View>
                <Button title="Reset" onPress={handleReset} />      
                <Button title="Start" onPress={handleStart} disabled={!isChecked} />
            </View>
        </CardComp>
    );
}

export default StartingScreen;