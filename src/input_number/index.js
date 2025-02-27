import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import styles from './style'; 

const NumericInput = ({ value, onChange, min = 1, max = 1000 }) => {
  const increase = () => onChange(Math.min(value + 1, max));
  const decrease = () => onChange(Math.max(value - 1, min));

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={decrease} style={styles.button_02}>
        <Text style={styles.text}>-</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={String(value)}
        onChangeText={(text) => {
          const num = parseInt(text) || 1;
          if (num >= min && num <= max) onChange(num);
        }}
      />
      <TouchableOpacity onPress={increase} style={styles.button}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
  );
};



export default NumericInput;
