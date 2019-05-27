import React from "react";
import TextField from "@material-ui/core/TextField";

export default ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField
    variant="outlined"
    margin="normal"
    fullWidth
    label={label}
    error={touched && error ? true : false}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);
