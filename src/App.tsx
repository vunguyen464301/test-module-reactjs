import React from "react";
import FilterDrawer, { propsOption } from "./Filter";

const filterOptions: propsOption = [
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
  }
];

export default () => {
  return (
    <div>
      <FilterDrawer onFilter={() => {}} options={filterOptions} />
    </div>
  );
};
