import React from "react";
import CartItem from "../../Models/Cart_item";
import { AddItem, DeleteItem } from "../Actions";
const initialState = {
  items: {},
  totalAmount: 0,
};
export const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case AddItem: {
      const addedProduct = action.payload.product;
      const ProdPrice = addedProduct.price;
      const ProdTitle = addedProduct.title;
      let cartitem;
      if (state.items[addedProduct.id]) {
        cartitem = new CartItem(
          state.items[addedProduct.id].Quantity + 1,
          ProdPrice,
          ProdTitle,
          state.items[addedProduct.id].Sum + ProdPrice
        );
      } else {
        cartitem = new CartItem(1, ProdPrice, ProdTitle, ProdPrice);
      }
      return {
        ...state,
        items: { ...state.items, [addedProduct.id]: cartitem },
        totalAmount: state.totalAmount + ProdPrice,
      };
    }
    case DeleteItem: {
      return {
        ...state,
        items: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
