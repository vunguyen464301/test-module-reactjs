import React from "react";
import {
  FormGroup as FormGroupBase,
  FormHelperText,
  ThemeOptions,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

const StyledFormGroup = styled(FormGroupBase, {
  shouldForwardProp: (p) => p !== "error" && p !== "errorMessage",
})<{
  error?: boolean;
  theme: ThemeOptions;
}>((props) => ({
  width: "100%",
  ...(props.error && {
    ".MuiInputBase-input, .MuiSelectUnstyled-root, textarea, .tag-input": {
      borderColor: `${props.theme.palette.error.main} !important`,
      backgroundColor: alpha(props.theme.palette.error.dark, 0.15),
    },
  }),
}));

const FormGroup = (props: any) => {
  return (
    <StyledFormGroup {...props} sx={{ ...props.sx, mb: 2 }}>
      {props.children}
      {props.error && (
        <FormHelperText sx={{ ml: 2 }} error>
          {props.errorMessage}
        </FormHelperText>
      )}
    </StyledFormGroup>
  );
};

export { FormGroup };
