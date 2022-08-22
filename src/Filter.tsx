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
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { FormGroup, FormLabel, CheckBoxTreeSelect } from "./components/forms";
import { Form, Formik, useFormik } from "formik";
import CloseIcon from "@mui/icons-material/Close";

export interface PropsItemOption {
  label: string;
  value: any;
  children?: PropsItemOption[];
}

export type typeFilter = "SELECT_OPTIONS"
export type propsOption<T = any> = PropsOption[];

export interface PropsOption {
  type: typeFilter;
  name: string;
  label?: string;
  required?: boolean;
  items?: PropsItemOption[];
  initialValue?: any[];
}

interface PropsFilterDrawer {
  onFilter: any;
  options: propsOption;
}

interface PropsSelectOptions extends PropsOption {
  setFieldValue: any;
}

const SelectOptions=(props: PropsSelectOptions )=>{
  const {items, setFieldValue }=props;
  return(
    <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">Age</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={22}
      label="Age"
      // onChange={(val) => setFieldValue('data')}
    >
   { (items || []).map(e=>(<MenuItem value={e.value}>{e.label}</MenuItem>))}
    </Select>
  </FormControl>
  )
}

interface PropsFormItem{
  item: PropsOption;
  setFieldValue: any;
}

const FormItem = <TValue extends any>({item, setFieldValue}:PropsFormItem)=>{
  switch(item.type){
    case 'SELECT_OPTIONS':{
      return(
        <SelectOptions {...item} setFieldValue={setFieldValue}/>
      )
    }
    default: break;
  }

  return(
    <div>
      {item.label}
    </div>
  )
}

const Filter = ({ onFilter, options }: PropsFilterDrawer) => {

  const { values, getFieldProps, handleSubmit, setFieldValue } =
    useFormik<{data: propsOption}>({
      initialValues: {data: options},
      onSubmit: (values) => {
        console.log(values);
      },
    });

  return (
    <div style={{ marginTop: 40 }}>
      <form onSubmit={handleSubmit}>
        {values.data.map((item)=><FormItem item={item} setFieldValue={setFieldValue}/>)}
      </form>
    </div>
  );
};

export default Filter;
