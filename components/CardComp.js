import React from "react";
import { View, StyleSheet } from "react-native";

const CardComp = ({children}) => {
    return (
        <View style={styles.card}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#B8B8B8',
        width: '80%',
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        padding: 12,
        alignItems: 'center',
    },
});

export default CardComp;