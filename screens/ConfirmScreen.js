import React from "react";
import { View, Text, Button, Modal } from "react-native";
import CardComp from "../components/CardComp";

const ConfirmScreen = ({userData, setScreen}) => {

  return (
    <View>
      <Modal animationType="none">
        <CardComp>
          <Text>Hello {userData.name}</Text>
          <Text>Please confirm the following information is correct by pressing the continue button</Text>
          <Text>{userData.email}</Text>
          <Text>{userData.phone}</Text>
          <Button title="Go back" onPress={() => setScreen("start")} />
          <Button title="Continue" onPress={() => setScreen("game")} />
        </CardComp>
      </Modal>
    </View>
  );
};

export default ConfirmScreen;
