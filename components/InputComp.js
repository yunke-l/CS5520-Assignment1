import React, {useState} from 'react';
import {Text, TextInput, StyleSheet} from 'react-native';

const InputComp = ({label, value, onChangeText, validateFunction, errorMessage}) => {
    const [isValid, setIsValid] = useState(true);

    const handleTextChange = (text) => {
        onChangeText(text);
        setIsValid(validateFunction(text));
    };

    return (
        <>
            <Text>{label}</Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={handleTextChange}
            />
            {!isValid && <Text style={styles.error}>{errorMessage}</Text>}
        </>
    );

};

const styles = StyleSheet.create({
    input: {
        width: '80%',
        margin: 12,
        borderWidth: 1,
    },
    error: {
        color: 'red',
    },
});

export default InputComp;