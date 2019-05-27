import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

export default ({ input, label, disabled }) => {
  return (
    <Checkbox
      checked={input.value ? true : false}
      onChange={input.onChange}
      disabled={disabled}
    />
  );
};
