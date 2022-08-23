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

const data: TypesData<{ test1: any; test2: any }> = [
  { name: "test1", value: "abc" },
  { name: "test2", value: "abc" },
];

type TypesData<TName> = { name: Extract<keyof TName, string>; value: string }[];

interface PropsAppFilter<TName> {
  data: TypesData<TName>;
  onFilter: (val: Record<Extract<keyof TName, string>, string>) => void;
}

const AppFilter = <T extends any>(props: PropsAppFilter<T>) => {
  return <div></div>;
};
