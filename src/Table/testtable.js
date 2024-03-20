import React, { useState, useEffect } from "react";
import DynamicTable from "./DynamicTable";
import TableModel from "./tableModel";
import connectDB from "./db";

const App = () => {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await connectDB();
        const tableData = await TableModel.find();
        const columnNames = Object.keys(tableData[0]?.toObject() || {});
        setData(tableData);
        setColumns(columnNames);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Dynamic Table Example</h1>
      <DynamicTable columns={columns} data={data} />
    </div>
  );
};

export default App;
