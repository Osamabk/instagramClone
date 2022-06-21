import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as firebase from "firebase";
import { Provider } from "react-redux";
import { createSore, applyMiddleware } from "redux";
import rootReducer from "./redux/reducers";
import thunk from "redux-thunk";

const store = createSore(rootReducer, applyMiddleware(thunk));
const firebaseConfig = {
  apiKey: "AIzaSyB6HwfO7NN2B7LC5nQm0sMSbuhcXK-f74Q",
  authDomain: "instagram-demo-967a1.firebaseapp.com",
  projectId: "instagram-demo-967a1",
  storageBucket: "instagram-demo-967a1.appspot.com",
  messagingSenderId: "427035657180",
  appId: "1:427035657180:web:aa57841e167f0ac98d4519",
  measurementId: "G-2EVKBYMYJ8",
};

import Landing from "./components/auth/Landing";
import Register from "./components/auth/Register";
import { useEffect, useState } from "react";
import LogIn from "./components/auth/LogIn";
import IsLoggedIn from "./components/auth/IsLoggedIn";

export default function App() {
  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
  }, []);

  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen
            name="Landing"
            component={Landing}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="LogIn" component={LogIn} />
          <Stack.Screen name="LoggedIn" component={IsLoggedIn} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
