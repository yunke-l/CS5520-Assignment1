import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Checkbox = ({ label, checked, onChange }) => {
  const toggleCheckbox = () => {
    onChange(!checked);
  };

  return (
    <TouchableOpacity onPress={toggleCheckbox}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 20,
            height: 20,
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 3,
            marginRight: 10,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: checked ? "blue" : "transparent",
          }}
        >
          {checked && (
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
              }}
            >
              ✓
            </Text>
          )}
        </View>
        <Text>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Checkbox;
