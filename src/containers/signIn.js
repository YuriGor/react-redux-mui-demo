import { connect } from "react-redux";
import SignIn from "../components/signIn";
import delay from "lodash-es/delay";
import * as authActions from "../redux/actions/auth";
import * as cfg from "../cfg";
import { SubmissionError } from "redux-form";
import shortid from "shortid";
const mapStateToProps = state => {
  return {
    pending: state.auth.pending,
    message: state.auth.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (values, d) => {
      console.log("submit!");
      dispatch(authActions.submit());
      return new Promise((resolve, reject) => {
        delay(function() {
          if (values.email === cfg.email && values.password === cfg.password) {
            console.log("success!");
            const token = shortid.generate();
            dispatch(authActions.success(token, values.remember));
            delay(function() {
              console.log("expired!");
              dispatch(
                authActions.logout(
                  "The authentication session has expired. Please sign-in again."
                )
              );
            }, cfg.tokenLifetime);
            resolve();
          } else {
            console.log("fail!");
            dispatch(authActions.fail());
            reject(
              new SubmissionError({
                _error:
                  "Authentication failed. Please check your email/password."
              })
            );
          }
        }, 3000);
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
