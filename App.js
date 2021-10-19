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
import { CartReducer } from "./Redux/Reducers/CartReducer";
import CartScreen from "./Component/CartScreen";
const RootReducer = combineReducers({
  logreducer: LoginReducer,
  cartreducer: CartReducer,
});
const Stack = createNativeStackNavigator();
const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);
export default function App({ navigation }) {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen
           options={{
            title: 'All Product',
            headerStyle: {
              backgroundColor: '#f4511e',
              alignItems: 'center',
              justifyContent: 'center'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
            name="home"
            component={HomeScreen}
          />
          <Stack.Screen name="details" component={DetailsScreen} />
          <Stack.Screen name="loading" component={LoadingScreen} />
          <Stack.Screen name="cart" component={CartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
