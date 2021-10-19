import React from "react";
class CartItem {
  constructor(Quantity,ProductPrice,ProductTitle,Sum) {
    this.Quantity=Quantity;
    this.ProductPrice=ProductPrice;
    this.ProductTitle=ProductTitle;
    this.Sum=Sum;
  }
}
export default CartItem;
