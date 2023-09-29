import React from 'react';
import {Text, TextInput, View} from 'react-native';
import StyleHelper from '../StyleHelper';

const InputComp = ({label, value, onChangeText, error}) => {

    return (
        <View style={StyleHelper.inputContainer}>
            <Text style={StyleHelper.inputText}>{label}</Text>
            <TextInput
                style={StyleHelper.input}
                value={value}
                onChangeText={onChangeText}
            />
            {error && <Text style={StyleHelper.inputError}>{error}</Text>}
        </View>
    );

};


export default InputComp;