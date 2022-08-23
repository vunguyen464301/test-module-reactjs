import React from "react";
import FilterDrawer, { propsOptions } from "./Filter";

const filterOptions: propsOptions<{ age: string; text: string }> = [
  {
    type: "SELECT_OPTIONS",
    name: "age",
    label: "Products - Services",
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
