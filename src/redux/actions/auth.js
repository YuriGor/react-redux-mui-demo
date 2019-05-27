import cookies from "js-cookie";
import { tokenLifetime } from "../../cfg";
export const AUTH_SUBMIT = "AUTH_SUBMIT";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAIL = "AUTH_FAIL";
export const AUTH_LOGOUT = "AUTH_LOGOUT";

export function submit() {
  console.log("submit action");
  return { type: AUTH_SUBMIT };
}

export function success(token, remember) {
  console.log("success action");
  if (remember) {
    var expires = new Date(new Date().getTime() + tokenLifetime);
    cookies.set(
      "auth",
      { token },
      {
        expires
      }
    );
  }
  return { type: AUTH_SUCCESS, token };
}

export function fail() {
  console.log("fail action");
  return { type: AUTH_FAIL };
}

export function logout(message = "") {
  console.log("logout action");
  cookies.remove("auth");
  return { type: AUTH_LOGOUT, message };
}
