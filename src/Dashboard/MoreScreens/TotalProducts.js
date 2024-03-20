import { useState } from "react";
import Sidebar from "../Components/sidebar";
import Header from "../Components/header";
import DateBox from "./DateBox";
import DynamicTable from "../../Table/DynamicTable";

const columns = [
  "Date",
  "InventoryManager",
  "Type",
  "Product",
  "Manufacturer",
  "Category",
  "EmergencyType",
];
const data = [
  {
    Date: "01/01/2024",
    InventoryManager: "Mumuksh",
    Type: "Pharma",
    Product: "abcd",
    Manufacturer: "Product Entry",
    Category: "X-Ray",
    EmergencyType: "Critical",
  },
  {
    Date: "01/01/2024",
    InventoryManager: "Mumuksh",
    Type: "Pharma",
    Product: "abcd",
    Manufacturer: "Product Entry",
    Category: "X-Ray",
    EmergencyType: "Critical",
  },
  {
    Date: "01/01/2024",
    InventoryManager: "Mumuksh",
    Type: "Pharma",
    Product: "abcd",
    Manufacturer: "Product Entry",
    Category: "X-Ray",
    EmergencyType: "Critical",
  },
  {
    Date: "01/01/2024",
    InventoryManager: "Mumuksh",
    Type: "Pharma",
    Product: "abcd",
    Manufacturer: "Product Entry",
    Category: "X-Ray",
    EmergencyType: "Critical",
  },
  {
    Date: "01/01/2024",
    InventoryManager: "Mumuksh",
    Type: "Pharma",
    Product: "abcd",
    Manufacturer: "Product Entry",
    Category: "X-Ray",
    EmergencyType: "Critical",
  },
];

function TotalProducts() {
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
      <div className="total-products-container" style={{ marginLeft: "120px" }}>
        <div className="table-container">
          <h2>Total Products</h2>
          <DateBox />
          <DynamicTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
}

export default TotalProducts;
