import React from "react";
import FilterDrawer, { propsOptions } from "./Filter";

const filterOptions: propsOptions<{ type: any }> = [
  {
    type: "SELECT_OPTIONS",
    name: "type",
    label: "Products - Services",
    required: false,
    items: [
      {
        label: "abc",
        value: 1,
      },
      {
        label: "222",
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
