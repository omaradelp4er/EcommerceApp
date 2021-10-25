import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import {Button} from "react-native-elements"
import OrderDetails from "./OrderDetails";
function OrderItem(props) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <View style={styles.orderItem}>
      <View style={styles.summary}>
        <Text style={styles.totalAmount}>$ {props.amount.toFixed(2)}</Text>
        <Text style={styles.date}>{props.date}</Text>
      </View>
      <Button
        title={showDetails ? "Hide Details" : "Show Details"}
        type="clear"
        onPress={() => {
          setShowDetails((prevState) => !prevState);
        }}
      />
      {showDetails && (
        <View style={styles.detailItems}>
          {props.items.map((cartitem) => (
            <OrderDetails
              key={cartitem.productId}
              quantity={cartitem.quantity}
              amount={cartitem.sum}
              title={cartitem.productTitle}
            />
          ))}
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  orderItem: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    margin: 20,
    padding: 10,
    alignItems: "center",
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  totalAmount: {
    fontSize: 16,
  },
  date: {
    fontSize: 16,
    color: "#888",
  },
  detailItems: {
      width: '100%'
  }
});
export default OrderItem;
