import * as React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import DesktopDateRangePicker from "@mui/lab/DesktopDateRangePicker";
import { styled } from "@mui/system";

interface Props<T> {
  value: T;
  onChange: (val: T) => void;
}

export function RangePicker<T extends any>(props: Props<T>) {
  return (
    <Stack spacing={3}>
      {/* <DesktopDateRangePicker
        value={props.value}
        onChange={props.onChange}
        renderInput={(startProps: any, endProps: any) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
        {...props}
      /> */}
      RangePicker
    </Stack>
  );
}
