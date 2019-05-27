import { connect } from "react-redux";
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import SignIn from "./containers/signIn";
import Main from "./containers/main";

const mapStateToProps = state => {
  return {
    token: state.auth.token
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

function App({ token }) {
  return (
    <>
      <CssBaseline />
      {(!token && <SignIn />) || <Main />}
    </>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
