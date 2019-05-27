import cookies from "js-cookie";
import {
  AUTH_SUBMIT,
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_LOGOUT
} from "../actions/auth";

const authCookie = cookies.getJSON("auth") || {};
const initialState = {
  token: authCookie.token || "",
  pending: false,
  message: ""
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUBMIT:
      console.log("reduce auth", action.type);
      return {
        ...state,
        ...{
          pending: true,
          message: ""
        }
      };
    case AUTH_SUCCESS:
      console.log("reduce auth", action.type);
      return {
        ...state,
        ...{
          pending: false,
          token: action.token,
          message: ""
        }
      };
    case AUTH_FAIL:
      console.log("reduce auth", action.type);
      return {
        ...state,
        ...{
          pending: false
        }
      };
    case AUTH_LOGOUT:
      console.log("reduce auth", action.type);
      return {
        ...state,
        ...{
          token: null,
          message: action.message
        }
      };

    default:
      return state;
  }
}
