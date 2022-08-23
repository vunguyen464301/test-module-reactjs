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
export type propsOptions<DataType> = IOption<DataType>[];
export interface IItemOption {
  label: string;
  value: any;
  children?: IItemOption[];
}
export interface IOption<DataType> {
  type: typeFilter;
  /**
   * require string for field name
   */
  name: Extract<keyof DataType, string>;
  label?: string;
  required?: boolean;
  items?: IItemOption[];
  value?: number | string | number[] | string[];
  mutilValue?: boolean;
}

interface IFilterDrawer<DataType> {
  onFilter: (val: DataType) => void;
  options: propsOptions<DataType>;
}

const SelectOption = <DataType extends any>(props: IOption<DataType>) => {
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

const FormItem = <DataType extends any>(props: IOption<DataType>) => {
  switch (props.type) {
    case "SELECT_OPTIONS": {
      return <SelectOption {...props} />;
    }
    default:
      return null;
  }
};

const Filter = <DataType extends any>({
  onFilter,
  options,
}: IFilterDrawer<DataType>) => {
  const convertValues = (): Record<
    Extract<keyof DataType, string>,
    unknown
  > => {
    const keys: DataType | any = {};
    options.forEach((item) => {
      keys[item.name] = item.value;
    });
    return keys;
  };

  return (
    <div style={{ padding: 50 }}>
      <Formik
        initialValues={convertValues()}
        onSubmit={(values, actions) => {
          // alert(JSON.stringify(values, null, 2));
          // actions.setSubmitting(false);
          const keys: DataType | any = {};
          options.forEach((item) => {
            keys[item.name] = values[item.name];
          });
          onFilter(keys);
        }}
      >
        {(
          props: FormikProps<Record<Extract<keyof DataType, string>, unknown>>
        ) => (
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
