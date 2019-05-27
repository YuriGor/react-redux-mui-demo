import { createStore } from "redux";
import app from "./reducers";

const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(app);

export default store;

// store.subscribe(() => {
//   console.log("state", store.getState());
// });
