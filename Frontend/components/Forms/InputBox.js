import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

const InputBox = ({
  InputTitle,
  placeholder,
  keyboardType,
  autoComplete,
  isPassword,
  value,
  setValue,
}) => {
  return (
    <View>
      <Text style={styles.InputTitle}>{InputTitle}</Text>
      <TextInput
        style={styles.inputBox}
        placeholder={placeholder}
        keyboardType={keyboardType}
        autoCorrect={false}
        autoComplete={autoComplete}
        secureTextEntry={isPassword}
        value={value}
        onChangeText={(text) => setValue(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  InputTitle: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  inputBox: {
    height: 40,
    marginBottom: 20,
    backgroundColor: "lightgrey",
    borderRadius: 80,
    marginTop: 10,
    paddingLeft: 10,
    fontSize: 20,
  },
});

export default InputBox;
