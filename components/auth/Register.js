import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState, useEffect } from "react";
import firebase from "firebase";
const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const onSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((data) => {
        firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).set({name, email})
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
        placeholder="password"
        onChangeText={(password) => {
          setPassword(password);
        }}
      />
      <Button title="Sign Up" onPress={onSignUp}/>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
