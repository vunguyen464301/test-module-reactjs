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
import { FieldInputProps, Form, Formik, useFormik } from "formik";
import CloseIcon from "@mui/icons-material/Close";
import { positions } from "@mui/system";

export interface PropsItemOption {
  label: string;
  value: any;
  children?: PropsItemOption[];
}

export type typeFilter = "SELECT_OPTIONS";
export type propsOption = PropsOption[];

export interface PropsOption {
  type: typeFilter;
  name: string;
  label?: string;
  required?: boolean;
  items?: PropsItemOption[];
  initialValue?: any[] | any;
  mutilValue?: boolean;
}

interface PropsFilterDrawer {
  onFilter: any;
  options: propsOption;
}

interface PropsSelectOptions extends PropsOption {
  setFieldValue: any;
  position: number;
  getFieldProps: (val: number) => FieldInputProps<any>;
}

const SelectOptions = (props: PropsSelectOptions) => {
  const {
    items,
    setFieldValue,
    position,
    getFieldProps,
    label,
    initialValue,
    type,
  } = props;
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={initialValue}
        label={label}
        onChange={(val) => {
          let dataField = getFieldProps(position);
          dataField.value = {
            ...dataField.value,
            initialValue: val.target?.value,
          };
          setFieldValue(position, dataField.value);
        }}
      >
        {(items || []).map((e) => (
          <MenuItem value={e.value}>{e.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

interface PropsFormItem {
  position: number;
  item: PropsOption;
  setFieldValue: any;
  getFieldProps: (val: number) => FieldInputProps<any>;
}

const FormItem = <TValue extends any>({
  item,
  setFieldValue,
  position,
  getFieldProps,
}: PropsFormItem) => {
  switch (item.type) {
    case "SELECT_OPTIONS": {
      return (
        <SelectOptions
          {...item}
          setFieldValue={setFieldValue}
          position={position}
          getFieldProps={getFieldProps}
        />
      );
    }
    default:
      break;
  }
  return <div>{item.label}</div>;
};

const Filter = ({ onFilter, options }: PropsFilterDrawer) => {
  const { values, getFieldProps, handleSubmit, setFieldValue,submitForm } = useFormik<
    Record<number, PropsOption>
  >({
    initialValues: Object.assign({}, options),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div style={{padding:50 }}>
      <form onSubmit={handleSubmit}>
        {Object.keys(values).map((key) => (
          <FormItem
            key={key}
            position={Number(key)}
            item={values[Number(key)]}
            setFieldValue={setFieldValue}
            getFieldProps={getFieldProps}
          />
        ))}
        <Button style={{marginTop:50}} variant="contained" onClick={submitForm}>Submit</Button>
      </form>
    </div>
  );
};

export default Filter;
