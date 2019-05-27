import React from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Field, reduxForm } from "redux-form";
import renderText from "./renderForm/text";
import renderCheckbox from "./renderForm/checkbox";
import CircularProgress from "@material-ui/core/CircularProgress";
import * as cfg from "../cfg";

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {cfg.email} / {cfg.password} / {cfg.tokenLifetime / 60 / 1000} min
      <br />
      <code>src/cfg.js</code>
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  title: {
    fontWeight: "bold",
    letterSpacing: "-1px",
    left: "-32px",
    position: "relative"
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1)
    // backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  fabProgress: {
    // color: green[500],
    position: "absolute",
    marginTop: -6,
    zIndex: 1
  }
}));

const SignInFrom = reduxForm({
  form: "SignIn", // a unique identifier for this form
  validate
  // asyncValidate,
})(props => {
  const {
    handleSubmit,
    classes,
    pending,
    message,
    error,
    pristine,
    reset,
    submitting
  } = props;
  console.log({ error, message });
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      {error && (
        <Typography
          variant="subtitle2"
          gutterBottom
          align="center"
          color="error"
        >
          {error}
        </Typography>
      )}
      {!error && message && (
        <Typography variant="subtitle2" gutterBottom align="center">
          {message}
        </Typography>
      )}
      <Field
        id="email"
        name="email"
        component={renderText}
        label="Email Address"
        autoComplete="email"
        required
        disabled={pending}
        // autoFocus
      />
      <Field
        id="password"
        name="password"
        component={renderText}
        label="Password"
        autoComplete="current-password"
        type="password"
        required
        disabled={pending}
        // autoFocus
      />
      <FormControlLabel
        disabled={pending}
        control={
          <Field
            name="remember"
            component={renderCheckbox}
            value="remember"
            color="primary"
            disabled={pending}
          />
        }
        label="Remember me"
      />

      <Button
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        type="submit"
        disabled={pending}
      >
        Sign In
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </form>
  );
});

export default function SignIn({ onSubmit, pending, message }) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar} src={"accenture.png"} />
        {pending && (
          <CircularProgress size={68} className={classes.fabProgress} />
        )}
        <Typography component="h1" variant="h3" className={classes.title}>
          accenture
        </Typography>
        <SignInFrom
          classes={classes}
          onSubmit={onSubmit}
          pending={pending}
          message={message}
        />
      </div>
      <Box mt={5}>
        <MadeWithLove />
      </Box>
    </Container>
  );
}

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  pending: PropTypes.bool.isRequired,
  error: PropTypes.string,
  message: PropTypes.string
};

function validate(values) {
  const errors = {};
  // const requiredFields = ["email"];
  // requiredFields.forEach(field => {
  //   if (!values[field]) {
  //     errors[field] = "Required";
  //   }
  // });
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = "Invalid email address";
  }
  // console.log("validate", errors);
  return errors;
}
