type HeadCell<DataType> = {
  id: Extract<keyof DataType, string>;
  label: string;
};

type TableProps<DataType> = {
  heads: HeadCell<DataType>[];
  rows: Array<DataType>;
};

export function Table<T>({ heads, rows }: TableProps<T>) {
  const ColumnsKeys = heads.map((item: HeadCell<T>) => item.id);

  return (
   <></>
  );
}

const heads: HeadCell<any>[] = [
  {
    id: "firstname",
    label: "Firstname",
  },
  {
    id: "lastname",
    label: "Lastname",
  },
];

const rows = [
  {
    firstname: "John",
    lastname: "Adams",
  },
  {
    firstname: "Paul",
    lastname: "Walker",
  },
];

const Test = () => {
  return <Table heads={[
    {
      id: "firstname",
      label: "Firstname",
    },
    {
      id: "lastname",
      label: "Lastname",
    },
  ]} rows={rows} />;
};
