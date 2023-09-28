import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Checkbox = ({ label, checked, onChange }) => {
  const toggleCheckbox = () => {
    onChange(!checked);
  };

  return (
    <TouchableOpacity onPress={toggleCheckbox}>
      <View
        style={styles.container}
      >
        <View
          style={[
              styles.box,
              { backgroundColor: checked ? "#007FFF" : "transparent" } // Use an array to apply multiple styles
          ]}
      >
          {checked && (
            <Text
              style={styles.selected}
            >
              ✓
            </Text>
          )}
        </View>
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container:{
    flexDirection: "row",
    alignItems: "center",
  },
  box:{
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 3,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
    
  label: {
    color: "blue",
    fontSize: 15,
  },
  selected: {
    color: "white",
    fontWeight: "bold",
  }
});



export default Checkbox;
