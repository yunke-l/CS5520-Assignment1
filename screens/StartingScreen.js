import React, {useState} from "react";
import { Text, Button, View } from "react-native";
import CardComp from "../components/CardComp";
import InputComp from "../components/InputComp";
import CheckBox from "../components/CheckBox";

const StartingScreen = ({ onStart, onReset }) => {
    // initialize user data
    const initializeData = { name:'', email:'', phone:''};
    const [userData, setUserData] = useState(initializeData);

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
        if ( userData.name.length < 2 || !isNaN(userData.name)) {
            newError.nameError = 'Please enter a valid name';
            isValid = false;
        }

        // email is invalid if it is not in email format
        const emailRegex = /^[\w\.-]+@[\w\.-]+\.\w+$/;
        if ( !emailRegex.test(userData.email) ) {
            newError.emailError = 'Please enter a valid email';
            isValid = false;
        }

        // phone is invalid if it is not 10 digits
        if ( userData.phone.length !== 10 || isNaN(userData.phone)) {
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
            onStart(userData);
        }
    }

    const handleReset = () => {
        // reset user data and error messages and checkbox
        setUserData(initializeData);
        setError(initializeError);
        setIsChecked(false);
    };
    
    const handleCheckboxChange = (newValue) => {
        setIsChecked(newValue);
    };



    return (
        <CardComp>
            <Text>Welcome</Text>

            <InputComp
                label="Name"
                value={userData.name}
                onChangeText={text => setUserData({...userData, name:text})}
                error={error.nameError}
            />

            <InputComp
                label="Email"
                value={userData.email}
                onChangeText={text => setUserData({...userData, email:text})}
                error={error.emailError}
            />

            <InputComp
                label="Phone"
                value={userData.phone}
                onChangeText={text => setUserData({...userData, phone:text})}
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