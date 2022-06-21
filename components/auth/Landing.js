import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const Landing = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button
        title="Register"
        onPress={() => {
          navigation.navigate("Register");
        }}
      />
      <Button
        title="LogIn"
        onPress={() => {
          navigation.navigate("LogIn");
        }}
      />
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({});
