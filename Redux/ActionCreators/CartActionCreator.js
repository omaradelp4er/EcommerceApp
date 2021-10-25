import React from "react";
import { AddItem, DeleteItem, AddOneItem } from "../Actions";

export const Add_Item = (product) => {
  return {
    type: AddItem,
    payload: product,
  };
};
export const Delete_Item = (pid) => {
  return {
    type: DeleteItem,
    payload: pid,
  };
};
export const AddOne_Item = (pid) => {
  return {
    type: AddOneItem,
    payload: pid,
  };
};
