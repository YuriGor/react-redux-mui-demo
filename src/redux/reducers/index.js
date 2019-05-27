import auth from "./auth";
import main from "./main";
import bmi from "./bmi";
import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";

const app = combineReducers({
  main,
  auth,
  bmi,
  form: reduxFormReducer // mounted under "form"
});

export default app;
