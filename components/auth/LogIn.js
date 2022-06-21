import { View, Text, TextInput, Button } from 'react-native'
import React, {useState} from 'react';
import firebase from "firebase";


const LogIn = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onLogIn = () => {
        firebase.auth().signInWithEmailAndPassword(email, password).then((data) => {
            console.log(data);
            navigation.navigate("LoggedIn");
          })
          .catch((error) => {
            console.log(error);
          });
      };
  
  return (
    <View>
   
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
      <Button title="Log In" onPress={onLogIn}/>
    </View>
  )
}

export default LogIn;