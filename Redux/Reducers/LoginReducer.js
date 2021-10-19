import React from "react";
import PRODUCTS from "../../Data/4.1 dummy-data";
import { Loading, LoginFailed, LoginSuccess, LogOut } from "../Actions";
const initialState = {
  user: {},
  Loading: false,
  isLoggedIn: false,
  message: "",
  availableProduct: PRODUCTS,
};

export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case Loading: {
      return { Loading: true, isLoggedIn: false };
    }
    case LoginSuccess: {
      return {
        Loading: false,
        isLoggedIn: true,
        user: action.payload,
        availableProduct: PRODUCTS,
      };
    }
    case LogOut: {
      return {
        Loading: false,
        isLoggedIn: false,
      };
    }
    case LoginFailed: {
      return { Loading: false, isLoggedIn: false, message: action.payload };
    }

    default:
      return state;
  }
};
