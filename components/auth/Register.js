import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState, useEffect } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View>
      <TextInput
        placeholder="name"
        onChangeText={(name) => {
          setName(name);
        }}
      />
      <TextInput
        placeholder="email"
        onChangeText={(email) => {
          setEmail(email);
        }}
      />
      <TextInput
        placeholder="name"
        onChangeText={(password) => {
          setPassword(password);
        }}
      />
      <Button title="Sign Up"/>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
