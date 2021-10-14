import React from "react";
import { Loading, LoginFailed, LoginSuccess,LogOut } from "./Actions";
var message;
export const TryLogin =(email,password) => (dispatch) =>  {
  //   dispatch(Loading());
  fetch("https://jsonplaceholder.typicode.com/posts/1/comments", {
    method: "Get",
  })
    .then((response) => response.json())
    .then((data) => {
      const user = data;
      let acuser = user.find((x) => x.email == email);
      if (acuser != null) {
        if (email == acuser.email && password == acuser.id) {
          dispatch(Login_Success(acuser));
        } else {
          let message = "email or password are wrong";
          dispatch(Login_Failed(message));
        }
      } else {
        let message = "user not found";
        dispatch(Login_Failed(message));
      }
    });
};
const Login_Success = (user) => {
  return {
    type: LoginSuccess,
    payload: user,
  };
};
const Login_Failed = (message) => {
  return {
    type: LoginFailed,
    payload: message,
  };
};
export const Log_Out = () => {
  return {
    type: LogOut,
  };
};
