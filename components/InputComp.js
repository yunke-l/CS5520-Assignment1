import React, {useState} from 'react';
import {Text, TextInput, StyleSheet} from 'react-native';

const InputComp = ({label, value, onChangeText, error}) => {

    return (
        <>
            <Text>{label}</Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
            />
            {error && <Text style={styles.error}>{error}</Text>}
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