import React, { useState, useEffect } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { TryLogin } from "../Redux/ActionsCreator";
function LoginScreen({ navigation }) {
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const isloggedin = useSelector((state) => state.logreducer.isLoggedIn);
  useEffect(() => {
    if (isloggedin) {
      navigation.replace("home");
    }
  }, [isloggedin]);
  const LoginHandler = () => {
    dispatch(TryLogin(email, password));
  };
  return (
    <View style={styles.container}>
      <View>
        <Text>Email</Text>
        <TextInput
          style={styles.textinput}
          value={email}
          onChangeText={(text) => setemail(text)}
        />
      </View>
      <View>
        <Text>password</Text>
        <TextInput
          style={styles.textinput}
          value={password}
          onChangeText={(text) => setpassword(text)}
        />
      </View>
      <View>
        <Button title="Login" onPress={LoginHandler} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  textinput: {
    borderColor: "black",
    width: 200,
    borderWidth: 1,
  },
});

export default LoginScreen;
