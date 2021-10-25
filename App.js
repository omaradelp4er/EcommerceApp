import React from "react";
import { StyleSheet } from "react-native";
import { createStore, applyMiddleware } from "redux";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { Provider, useSelector, useDispatch } from "react-redux";
import { combineReducers } from "redux";
import { LoginReducer } from "./Redux/Reducers/LoginReducer";
import { CartReducer } from "./Redux/Reducers/CartReducer";
import { OrderReducer } from "./Redux/Reducers/OrderReducer";
import LoginScreen from "./Component/LoginScreen";
import HomeScreen from "./Component/HomeScreen";
import DetailsScreen from "./Component/DetailsScreen";
import CartScreen from "./Component/CartScreen";
import OrderScreen from "./Component/OrderScreen";
import LoadingScreen from "./Component/LoadingScreen";
import { Log_Out } from "./Redux/ActionCreators/LoginActionsCreator";
import { Ionicons } from "@expo/vector-icons";
const RootReducer = combineReducers({
  logreducer: LoginReducer,
  cartreducer: CartReducer,
  orderreducer: OrderReducer,
});
const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
function Root({ navigation }) {
  const dispatch = useDispatch();
  const islogedin = useSelector((state) => state.logreducer.isLoggedIn);
  const LogOutHandler = () => {
    dispatch(Log_Out());
    if (islogedin) {
      navigation.replace("login");
    }
  };
  return (
    <Drawer.Navigator
      initialRouteName="home"
      drawerContent={(props) => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
              label="Logout"
              onPress={LogOutHandler}
              icon={({}) => (
                <Ionicons color={"black"} size={23} name={"log-out-outline"} />
              )}
              options={{
                drawerIcon: (drawerConfig) => (
                  <Ionicons name="log-out-outline" size={23} color={"black"} />
                ),
              }}
            />
          </DrawerContentScrollView>
        );
      }}
    >
      <Drawer.Screen
        name="home"
        component={HomeScreen}
        options={{
          drawerIcon: (drawerConfig) => (
            <Ionicons name="pricetags-outline" size={23} color={"black"} />
          ),
        }}
      />
      <Drawer.Screen
        name="cart"
        component={CartScreen}
        options={{
          drawerIcon: (drawerConfig) => (
            <Ionicons name="cart-outline" size={23} color={"black"} />
          ),
        }}
      />
      <Drawer.Screen
        name="order"
        component={OrderScreen}
        options={{
          drawerIcon: (drawerConfig) => (
            <Ionicons name="md-create" size={23} color={"black"} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="loading" component={LoadingScreen} />
          <Stack.Screen name="details" component={DetailsScreen} />
          <Stack.Screen
            name="root"
            component={Root}
            options={{ headerShown: false }}
          />
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
