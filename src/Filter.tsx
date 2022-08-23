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
export type propsOptions<TName> = IOption<TName>[];
export interface IItemOption {
  label: string;
  value: any;
  children?: IItemOption[];
}
export interface IOption<TName> {
  type: typeFilter;
  name: Extract<keyof TName, string>;
  label?: string;
  required?: boolean;
  items?: IItemOption[];
  value?: any[] | any;
  mutilValue?: boolean;
}

interface IFilterDrawer<TName> {
  onFilter: (val: Record<Extract<keyof TName, string>, unknown>) => void;
  options: propsOptions<TName>;
}

const FormItem = <TName extends any>(props: IOption<TName>) => {
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

const Filter = <TName extends any>({
  onFilter,
  options,
}: IFilterDrawer<TName>) => {
  const convertKey = (): Record<Extract<keyof TName, string>, unknown> => {
    const keys:
      | Record<Extract<keyof TName, string>, unknown>
      | Record<string, unknown> = {};
    options.forEach((item) => {
      keys[item.name] = "";
    });
    return keys;
  };

  return (
    <div style={{ padding: 50 }}>
      <Formik
        initialValues={convertKey()}
        onSubmit={(values, actions) => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
          onFilter(values);
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
