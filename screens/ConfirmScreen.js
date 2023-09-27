import React from "react";
import { View, Text, Button } from "react-native";

const ConfirmScreen = ({ onConfirm }) => {
  return (
    <View>
      <Text>Confirm Page</Text>
      <Button title="Confirm" onPress={onConfirm} />
    </View>
  );
};

export default ConfirmScreen;
