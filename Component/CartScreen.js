import React from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  Button,
  StyleSheet,
} from "react-native";
import { useSelector } from "react-redux";
function CartScreen() {
  const cartproducts = useSelector((state) => state.cartreducer.items);
  return (
    <ScrollView>
      {/* <Image source={{ uri: cartproducts.imageUrl }} />
      <Text>$ {cartproducts.price.toFixed(2)}</Text>
      <Text> {cartproducts.description}</Text> */}
    </ScrollView>
  );
}


export default CartScreen;
