import React from "react";
import { View, Text, Button } from "react-native";
import CardComp from "../components/CardComp";

const ConfirmScreen = ({ userData: {name, email, phone}, onGoBack, onConfirm }) => {

  return (
    <View>
      <CardComp>
        <Text>Confirm Page</Text>
        <Button title="Go Back" onPress={onGoBack} />
        <Button title="Confirm" onPress={onConfirm} />
      </CardComp>
    </View>
  );
};

export default ConfirmScreen;
