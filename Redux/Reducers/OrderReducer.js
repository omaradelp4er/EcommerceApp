const initialState = {
  orders: [],
};
import Order from "../../Models/Order";
import { AddOrder } from "../Actions";
export const OrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case AddOrder: {
      const newOrder = new Order(
        new Date().toString(),
        action.payload.items,
        action.payload.amount,
        new Date()
      );
      return {
        ...state,
        orders: state.orders.concat(newOrder),
      };
    }
  }
  return state;
};
