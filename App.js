import React from "react";
import { StyleSheet } from "react-native";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./Component/LoginScreen";
import HomeScreen from "./Component/HomeScreen";
import DetailsScreen from "./Component/DetailsScreen";
import LoadingScreen from "./Component/LoadingScreen";
import { combineReducers } from "redux";
import { LoginReducer } from "./Redux/Reducers/LoginReducer";

const Reducer = combineReducers({
  logreducer: LoginReducer,
});
const Stack = createNativeStackNavigator();
const store = createStore(
  Reducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="home" component={HomeScreen} />
          <Stack.Screen name="details" component={DetailsScreen} />
          <Stack.Screen name="loading" component={LoadingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
