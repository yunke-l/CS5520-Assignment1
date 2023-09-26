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
        width: '80%',
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        padding: 12,
    },
});

export default CardComp;