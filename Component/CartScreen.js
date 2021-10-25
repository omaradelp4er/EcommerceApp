import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Button } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";
import {
  Delete_Item,
  AddOne_Item,
} from "../Redux/ActionCreators/CartActionCreator";
import { Add_Order } from "../Redux/ActionCreators/OrderActionCreator";
import CartItem from "./Shop/CartItem";
function CartScreen() {
  const dispatch = useDispatch();
  const cartproducts = useSelector((state) => {
    var transfaredCartItem = [];
    for (const key in state.cartreducer.items) {
      transfaredCartItem.push({
        productId: key,
        quantity: state.cartreducer.items[key].quantity,
        productPrice: state.cartreducer.items[key].productPrice,
        productTitle: state.cartreducer.items[key].productTitle,
        sum: state.cartreducer.items[key].sum,
      });
    }
    return transfaredCartItem.sort((a, b) =>
      a.productId > b.productId ? 1 : -1
    );
  });
  const carttotalamount = useSelector((state) => state.cartreducer.totalAmount);
  const AddOneToCartHandler = (productId) => {
    dispatch(AddOne_Item(productId));
  };
  const RemoveCartHandler = (productId) => {
    dispatch(Delete_Item(productId));
  };
  const OnOrder = (cartproducts, carttotalamount) => {
    dispatch(Add_Order(cartproducts, carttotalamount));
  };
  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total:
          <Text style={styles.amount}>$ {carttotalamount.toFixed(2)}</Text>
        </Text>
        <Button
          title="Order Now"
          type="clear"
          disabled={cartproducts.length === 0}
          onPress={() => OnOrder(cartproducts, carttotalamount)}
        />
      </View>
      <FlatList
        data={cartproducts}
        keyExtractor={(item) => item.productId}
        renderItem={(itemdata) => (
          <CartItem
            quantity={itemdata.item.quantity}
            title={itemdata.item.productTitle}
            amount={itemdata.item.sum}
            onRemove={() => {
              RemoveCartHandler(itemdata.item.productId);
            }}
            onAdd={() => AddOneToCartHandler(itemdata.item.productId)}
          />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
  summaryText: {
    fontSize: 18,
  },
  amount: {
    color: "black",
  },
});

export default CartScreen;
