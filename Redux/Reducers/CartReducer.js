import CartItem from "../../Models/Cart_item";
import { AddItem, DeleteItem, AddOneItem, AddOrder } from "../Actions";

const initialState = {
  items: {},
  totalAmount: 0,
};
export const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case AddItem: {
      const addedProduct = action.payload;
      const ProdPrice = addedProduct.price;
      const ProdTitle = addedProduct.title;
      let cartitem;
      if (state.items[addedProduct.id]) {
        cartitem = new CartItem(
          state.items[addedProduct.id].quantity + 1,
          ProdPrice,
          ProdTitle,
          state.items[addedProduct.id].sum + ProdPrice
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
      let cartitem;
      const deletedProduct = state.items[action.payload];
      const curentQuantity = deletedProduct.quantity;
      if (curentQuantity > 1) {
        const updatedCartItem = new CartItem(
          deletedProduct.quantity - 1,
          deletedProduct.productPrice,
          deletedProduct.productTitle,
          deletedProduct.sum - deletedProduct.productPrice
        );
        cartitem = { ...state.items, [action.payload]: updatedCartItem };
      } else {
        cartitem = { ...state.items };
        delete cartitem[action.payload];
      }
      return {
        ...state,
        items: cartitem,
        totalAmount: state.totalAmount - deletedProduct.productPrice,
      };
    }
    case AddOneItem: {
      let cartitem;
      const AddedProduct = state.items[action.payload];
      const updatedCartItem = new CartItem(
        AddedProduct.quantity + 1,
        AddedProduct.productPrice,
        AddedProduct.productTitle,
        AddedProduct.sum + AddedProduct.productPrice
      );
      cartitem = { ...state.items, [action.payload]: updatedCartItem };
      return {
        ...state,
        items: cartitem,
        totalAmount: state.totalAmount + AddedProduct.productPrice,
      };
    }
    case AddOrder:
      return initialState;

    default: {
      return state;
    }
  }
};
