import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const SubmitButton = ({ handleSubmit, btnTitle, loading }) => {
  return (
    <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
      <Text style={styles.textBtn}>
        {loading ? "Please Wait...." : btnTitle}{" "}
      </Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  submitBtn: {
    backgroundColor: "#1e2225",
    height: 50,
    marginHorizontal: 60,
    borderRadius: 80,
    justifyContent: "center",
    marginBottom: 20,
  },
  textBtn: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
});
