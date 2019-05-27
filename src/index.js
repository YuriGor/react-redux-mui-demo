import React from "react";
import ReactDOM from "react-dom";
// import state from "./data";
import App from "./app";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./styles.scss";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  palette: {
    secondary: { main: "#9c21ef" },
    primary: { main: "#004dff" }
  }
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("app")
);
