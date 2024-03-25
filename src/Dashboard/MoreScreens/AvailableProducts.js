import { useState } from "react";
import Sidebar from "../Components/sidebar";
import Header from "../Components/header";
import DateBox from "./DateBox";
import DynamicTable from "../../Table/DynamicTable";

const columns = [
  "InventoryManager",
  "Type",
  "BatchNumber",
  "ProductName",
  "Manufacturer",
  "Category",
  "Quantity",
  "EmergencyType",
];
const data = [
  {
    InventoryManager: "Mumuksh",
    Type: "Pharma",
    BatchNumber: "1234",
    ProductName: "abcd",
    Manufacturer: "Product Entry",
    Category: "X-Ray",
    Quantity: "8",
    EmergencyType: "Critical",
  },
  {
    InventoryManager: "Mumuksh",
    Type: "Pharma",
    BatchNumber: "1234",
    ProductName: "abcd",
    Manufacturer: "Product Entry",
    Category: "X-Ray",
    Quantity: "8",
    EmergencyType: "Critical",
  },
  {
    InventoryManager: "Mumuksh",
    Type: "Pharma",
    BatchNumber: "1234",
    ProductName: "abcd",
    Manufacturer: "Product Entry",
    Category: "X-Ray",
    Quantity: "8",
    EmergencyType: "Critical",
  },
  {
    InventoryManager: "Mumuksh",
    Type: "Pharma",
    BatchNumber: "1234",
    ProductName: "abcd",
    Manufacturer: "Product Entry",
    Category: "X-Ray",
    Quantity: "8",
    EmergencyType: "Critical",
  },
  {
    InventoryManager: "Mumuksh",
    Type: "Pharma",
    BatchNumber: "1234",
    ProductName: "abcd",
    Manufacturer: "Product Entry",
    Category: "X-Ray",
    Quantity: "8",
    EmergencyType: "Critical",
  },
];

function AvailableProducts() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <Header />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <div style={{ marginTop: "50px" }}>
        <DateBox />
        <div
          className="total-products-container"
          style={{ marginLeft: "60px" }}
        >
          <div className="table-container">
            <h2>Available Products</h2>
            <DynamicTable columns={columns} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AvailableProducts;
