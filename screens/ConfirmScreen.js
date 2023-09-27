import React from "react";
import { View, Text, Button } from "react-native";
import CardComp from "../components/CardComp";

const ConfirmScreen = ({ userData: {name, email, phone}, onGoBack, onConfirm }) => {

  return (
    <View>
      <CardComp>
        <Text>Hello {name}</Text>
        <Text>Please confirm the following information is correct by pressing the continue button</Text>
        <Text>{email}</Text>
        <Text>{phone}</Text>
        <Button title="Go back" onPress={onGoBack} />
        <Button title="Continue" onPress={onConfirm} />
      </CardComp>
    </View>
  );
};

export default ConfirmScreen;
