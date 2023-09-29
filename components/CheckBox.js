import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import StyleHelper from "../StyleHelper";

const Checkbox = ({ label, checked, onChange }) => {
  const toggleCheckbox = () => {
    onChange(!checked);
  };

  return (
    <TouchableOpacity onPress={toggleCheckbox}>
      <View
        style={StyleHelper.checkboxContainer}
      >
        <View
          style={[
              StyleHelper.checkbox,
              { backgroundColor: checked ? "#007FFF" : "transparent" } // Use an array to apply multiple styles
          ]}
      >
          {checked && (
            <Text
              style={StyleHelper.checkboxSelected}
            >
              ✓
            </Text>
          )}
        </View>
        <Text style={StyleHelper.checkboxLabel}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};


export default Checkbox;
