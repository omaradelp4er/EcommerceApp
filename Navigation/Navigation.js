// import React from "react";
// import {
//   createStackNavigator,
//   createDrawerNavigator,
//   createAppContainer,
// } from "@react-navigation/stack";
// import { Ionicons } from '@expo/vector-icons';
// import CartScreen from "../Component/CartScreen";
// import DetailsScreen from "../Component/DetailsScreen";
// import HomeScreen from "../Component/HomeScreen";
// import OrderScreen from "../Component/OrderScreen";
// import LoginScreen from "../Component/LoginScreen";
// const defaultNavOptions = {
//     headerStyle: {
//       backgroundColor:'red',
//     },
//     headerTintColor:  'white',
//   };
// const ProductsNavigator = createStackNavigator(
//     {
//       home: HomeScreen,
//       details: DetailsScreen,
//       cart: CartScreen
//     },
//     {
//       navigationOptions: {
//         drawerIcon: drawerConfig => (
//           <Ionicons
//             name={ 'md-cart'}
//             size={23}
//             color='black'
//           />
//         )
//       },
//       defaultNavigationOptions: defaultNavOptions
//     }
//   );
//   const OrdersNavigator = createStackNavigator(
//     {
//       order: OrderScreen
//     },
//     {
//       navigationOptions: {
//         drawerIcon: drawerConfig => (
//           <Ionicons
//             name={'md-list'}
//             size={23}
//             color='black'
//           />
//         )
//       },
//       defaultNavigationOptions: defaultNavOptions
//     }
//   );
//   const LoginNavigator = createStackNavigator(
//     {
//       Login: LoginScreen
//     },
//     {
//       navigationOptions: {
//        headerTitle:'Login',
//       },
//       defaultNavigationOptions: defaultNavOptions
//     }
//   );
//   const Navigation = createDrawerNavigator(
//     {
//       Products: ProductsNavigator,
//       Orders: OrdersNavigator,
//       Login: LoginNavigator
//     },
//   );
//   export default createAppContainer(Navigation);
