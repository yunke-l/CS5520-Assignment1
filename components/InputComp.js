import React, {useState} from 'react';
import {Text, TextInput, StyleSheet, View} from 'react-native';

const InputComp = ({label, value, onChangeText, error}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{label}</Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
            />
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: '15%',
    },
    input: {
        width: '100%',
        borderBottomColor: 'blue',
        borderBottomWidth: 2,
        alignSelf: 'flex-start', 
        fontSize: 18,
        color: 'blue',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 8,
    },
    
    error: {
        color: 'black',
        fontSize: 15,
    },
    text: {
        color: 'blue',
        fontSize: 18,
        alignSelf: 'flex-start',
        marginBottom: '10%',
    },
});

export default InputComp;