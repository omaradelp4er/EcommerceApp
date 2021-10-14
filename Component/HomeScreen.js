import React, { useEffect } from "react";
import { Text, View, Button, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Log_Out } from "../Redux/ActionsCreator";
function HomeScreen({ navigation }) {
  const islogedin = useSelector((state) => state.logreducer.isLoggedIn);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   if(islogedin){
  //     navigation.replace("login")
  //   }
  // }, [islogedin]);

  const LogOutHandler = () => {
    dispatch(Log_Out());
    if (islogedin) {
      navigation.replace("login");
    }
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>welcome to home screen</Text>
      <Button
        title="go to details"
        onPress={() => navigation.push("details")}
      />
      <Button title="Logout" onPress={LogOutHandler} />
    </View>
  );
}

export default HomeScreen;
