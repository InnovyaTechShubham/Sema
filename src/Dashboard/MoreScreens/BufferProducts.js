import { useState } from "react";
import Sidebar from "../Components/sidebar";
import Header from "../Components/header";
import DateBox from "./DateBox";
import DynamicTable from "../../Table/DynamicTable";

const columns = [
  "SrNo",
  "ProductName",
  "Manufacturer",
  "Vendor",
  "ProductOrigin",
  "EmergencyType",
  "StockLeft",
  "UnitPrice",
];
const data = [
  {
    SrNo: "1",
    ProductName: "abcd",
    Manufacturer: "Product Entry",
    Vendor: "Mumuksh",
    ProductOrigin: "India",
    EmergencyType: "Critical",
    StockLeft: "13",
    UnitPrice: "500",
  },
  {
    SrNo: "2",
    ProductName: "abcd",
    Manufacturer: "Product Entry",
    Vendor: "Mumuksh",
    ProductOrigin: "India",
    EmergencyType: "Critical",
    StockLeft: "13",
    UnitPrice: "500",
  },
  {
    SrNo: "3",
    ProductName: "abcd",
    Manufacturer: "Product Entry",
    Vendor: "Mumuksh",
    ProductOrigin: "India",
    EmergencyType: "Critical",
    StockLeft: "13",
    UnitPrice: "500",
  },
  {
    SrNo: "4",
    ProductName: "abcd",
    Manufacturer: "Product Entry",
    Vendor: "Mumuksh",
    ProductOrigin: "India",
    EmergencyType: "Critical",
    StockLeft: "13",
    UnitPrice: "500",
  },
  {
    SrNo: "5",
    ProductName: "abcd",
    Manufacturer: "Product Entry",
    Vendor: "Mumuksh",
    ProductOrigin: "India",
    EmergencyType: "Critical",
    StockLeft: "13",
    UnitPrice: "500",
  },
];

function BufferProducts() {
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
          style={{ marginLeft: "100px" }}
        >
          <div className="table-container">
            <h2>Buffer Products</h2>
            <DynamicTable columns={columns} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BufferProducts;
