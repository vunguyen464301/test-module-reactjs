import React, { useEffect, useState } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import {
  Stack,
  Typography,
  Container,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { FormGroup, FormLabel, CheckBoxTreeSelect } from "./components/forms";
import {
  Field,
  FieldInputProps,
  Form,
  Formik,
  FormikProps,
  useFormik,
} from "formik";
import CloseIcon from "@mui/icons-material/Close";
import { positions } from "@mui/system";

export type typeFilter = "SELECT_OPTIONS";
export type propsOptions = IOption[];
export interface IItemOption {
  label: string;
  value: any;
  children?: IItemOption[];
}
export interface IOption {
  type: typeFilter;
  name: string;
  label?: string;
  required?: boolean;
  items?: IItemOption[];
  value?: any[] | any;
  mutilValue?: boolean;
}

interface IFilterDrawer {
  onFilter: any;
  options: propsOptions;
}

const FormItem = (props: IOption) => {
  const { name, items } = props;
  return (
    <Field as="select" name={name}>
      <option value={""}>------</option>
      {items?.map((item, index) => (
        <option key={index} value={item.value}>
          {item.label}
        </option>
      ))}
    </Field>
  );
};

// PropsOption
const Filter = ({ onFilter, options }: IFilterDrawer) => {
  const convertKey = (options: propsOptions) => {
    const keys: Record<string, unknown> = {};
    options.forEach((item) => {
      keys[item.name] = "";
    });
    return keys;
  };

  return (
    <div style={{ padding: 50 }}>
      <Formik
        initialValues={convertKey(options)}
        onSubmit={(values, actions) => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        {(props: FormikProps<Record<string, unknown>>) => (
          <Form>
            {options.map((optionFilter, index) => (
              <FormItem key={index} {...optionFilter} />
            ))}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Filter;
