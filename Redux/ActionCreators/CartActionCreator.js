import React from "react";
import { AddItem, DeleteItem } from "../Actions";

export const Add_Item = (product) => {
  return {
    type: AddItem,
    payload: product,
  };
};
export const Delete_Item = (product) => {
  return {
    type: DeleteItem,
    payload: product,
  };
};
