import React from "react";

const App = () => {
  return (
    <AppFilter
      data={data}
      onFilter={(val) => {
        console.log(val.test1);
      }}
    />
  );
};

const data: TypesData<{ test1: string; test2: string }> = [
  { name: "test1", value: "abc" },
  { name: "test2", value: "abc" },
];

type TypesData<TName> = { name: Extract<keyof TName, string>; value: string }[];

interface PropsAppFilter<DataType> {
  data: TypesData<DataType>;
  onFilter: (val: DataType) => void;
}

const AppFilter = <T extends any>(props: PropsAppFilter<T>) => {
  // let obj: Record<Extract<keyof T, string>, unknown> | Record<string, unknown> =
  //   {};
  // props.data.forEach((item) => {
  //   obj[item.name] = item.value;
  // });
  // props.onFilter(obj);

  return <div></div>;
};
