import { AddOrder } from "../Actions";

export const Add_Order = (cartItems, totalAmount) => {
  return {
    type: AddOrder,
    payload: { items: cartItems, amount: totalAmount },
  };
};
