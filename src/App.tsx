import React from "react";
import FilterDrawer, { propsOptions } from "./Filter";

const filterOptions: propsOptions<{ age: number; gender: string }> = [
  {
    type: "SELECT_OPTIONS",
    name: "age",
    label: "Age of man:",
    required: false,
    items: [
      {
        label: "abc",
        value: 1,
      },
      {
        label: "xyz",
        value: 2,
      },
    ],
  },
  {
    type: "SELECT_OPTIONS",
    name: "gender",
    label: "Gender ò man:",
    required: false,
    items: [
      {
        label: "val1",
        value: 1,
      },
      {
        label: "val2",
        value: 2,
      },
    ],
  },
];

export default () => {
  return (
    <div>
      <FilterDrawer
        onFilter={(val) => {
          console.log(val);
        }}
        options={filterOptions}
      />
    </div>
  );
};
