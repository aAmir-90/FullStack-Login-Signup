import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import InputBox from "../../components/Forms/InputBox";
import SubmitButton from "../../components/Forms/SubmitButton";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    try {
      setLoading(true);
      if (!email || !password) {
        Alert.alert("Please Fill all fields");
        setLoading(false);
        return;
      }
      setLoading(false);
      console.log("Login Data=>>>> ", { email, password });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>LOGIN</Text>
      <View style={{ marginHorizontal: 20 }}>
        <InputBox
          InputTitle="EMAIL :-"
          placeholder="Your Email"
          keyboardType="email-address"
          autoComplete="email"
          value={email}
          setValue={setEmail}
        />
        <InputBox
          InputTitle="PASSWORD :-"
          placeholder="Your Password"
          isPassword={true}
          autoComplete="password"
          value={password}
          setValue={setPassword}
        />
      </View>
      {/* <Text style={{ fontSize: 20 }}>
          {JSON.stringify({ name, email, password }, null, 4)}
        </Text> */}
      <SubmitButton
        btnTitle="Login"
        loading={loading}
        handleSubmit={handleSubmit}
      />
      <Text style={styles.linkText}>
        Don't have an account?{" "}
        <Text
          style={styles.link}
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </Text>{" "}
      </Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#e1d5c9",
  },
  pageTitle: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  linkText: {
    fontSize: 20,
    textAlign: "center",
  },
  link: {
    color: "blue",
    fontStyle: "italic",
  },
});
