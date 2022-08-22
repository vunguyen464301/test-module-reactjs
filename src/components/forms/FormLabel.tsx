import React from "react";
import { Typography } from "@mui/material";

interface Props {
  label?: string;
  children?: any;
  required?: boolean;
}

const FormLabel = (props: Props) => {
  return (
    <Typography {...props} style={{ minWidth: "140px" }}>
      {props.label || props.children}&nbsp;
      {props.required && <span style={{ color: "red" }}>*</span>}
    </Typography>
  );
};

export { FormLabel };
