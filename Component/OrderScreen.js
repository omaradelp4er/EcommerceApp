import React from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import OrderItem from "./Shop/OrderItem";
function OrderScreen({ navigation }) {
  const orders = useSelector((state) => state.orderreducer.orders);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Your Order",
    });
  }, [navigation]);
  return (
    <FlatList
      data={orders}
      keyExtractor={(item) => item.id}
      renderItem={(itemdata) => (
        <OrderItem
          amount={itemdata.item.totalAmount}
          date={itemdata.item.readableDate}
          items={itemdata.item.items}
        />
      )}
    />
  );
}

export default OrderScreen;
