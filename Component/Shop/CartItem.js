import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";
function CartItem(props) {
  return (
    <View style={styles.cartItem}>
      <View style={styles.itemData}>
        <Text style={styles.quantity}>{props.quantity} </Text>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View style={styles.itemData}>
        <Text style={styles.amount}>{props.amount.toFixed(2)}</Text>
      </View>
      <Button
        title="-"
        size={60}
        type="clear"
        onPress={props.onRemove}
        style={styles.deleteButton}
      />
      <Button
        title="+"
        size={40}
        type="clear"
        onPress={props.onAdd}
        style={styles.addButton}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  itemData: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantity: {
    color: "#888",
    fontSize: 16,
  },
  title: {
    fontSize: 16,
  },
  amount: {
    fontSize: 16,
  },
  deleteButton: {
    margin: 20,
  },
  addButton: {
    margin: 20,
  },
});
export default CartItem;
