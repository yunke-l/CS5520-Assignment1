import React from "react";
import { View, Text, Button, Modal } from "react-native";
import StyleHelper from "../StyleHelper";
import CardComp from "../components/CardComp";
import LinearGradientComp from "../components/LinearGradient";


const ConfirmScreen = ({userData, setScreen}) => {

  return (
    <LinearGradientComp>
        <Modal animationType="none" transparent={true}>
        <View style={StyleHelper.container}>
          <CardComp>
            <Text style={StyleHelper.regularText}>Hello {userData.name}!</Text>
            <Text style={StyleHelper.regularText}>Please confirm the following information is correct by pressing the continue button</Text>
            <Text style={StyleHelper.userDataText}>{userData.email}</Text>
            <Text style={StyleHelper.userDataText}>{userData.phone}</Text>
            <View style={StyleHelper.buttonBox}>
              <Button color="red" title="Go back" onPress={() => setScreen("start")} />
              <Button color="blue" title="Continue" onPress={() => setScreen("game")} />
            </View>
          </CardComp>
          </View>
        </Modal>
      
    </LinearGradientComp>
  );
};

export default ConfirmScreen;
