import React from "react";
import { View } from "react-native";
import StyleHelper from "../StyleHelper";

const CardComp = ({children}) => {
    return (
        <View style={StyleHelper.card}>
            {children}
        </View>
    );
};


export default CardComp;