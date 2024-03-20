import { useState } from "react";
import Sidebar from "../Components/sidebar";
import HeadMorescreen from "./HeadMorescreen";
import DateBox from "./DateBox";
import DynamicTable from "../../Table/DynamicTable";

const columns = [
  "SrNo",
  "ProductName",
  "Manufacturer",
  "Vendor",
  "ProductOrigin",
  "UnitPrice",
  "EmergencyType",
];
const data = [
  {
    SrNo: "1",
    ProductName: "abcd",
    Manufacturer: "Product Entry",
    Vendor: "Mumuksh",
    ProductOrigin: "India",
    UnitPrice: "500",
    EmergencyType: "Critical",
  },
  {
    SrNo: "2",
    ProductName: "abcd",
    Manufacturer: "Product Entry",
    Vendor: "Mumuksh",
    ProductOrigin: "India",
    UnitPrice: "500",
    EmergencyType: "Critical",
  },
  {
    SrNo: "3",
    ProductName: "abcd",
    Manufacturer: "Product Entry",
    Vendor: "Mumuksh",
    ProductOrigin: "India",
    UnitPrice: "500",
    EmergencyType: "Critical",
  },
  {
    SrNo: "4",
    ProductName: "abcd",
    Manufacturer: "Product Entry",
    Vendor: "Mumuksh",
    ProductOrigin: "India",
    UnitPrice: "500",
    EmergencyType: "Critical",
  },
  {
    SrNo: "5",
    ProductName: "abcd",
    Manufacturer: "Product Entry",
    Vendor: "Mumuksh",
    ProductOrigin: "India",
    UnitPrice: "500",
    EmergencyType: "Critical",
  },
];

function StockOut() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <HeadMorescreen OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <div style={{ marginTop: "50px" }}>
        <DateBox />
        <div
          className="total-products-container"
          style={{ marginLeft: "120px" }}
        >
          <div className="table-container">
            <h2>Stock Out</h2>
            <DynamicTable columns={columns} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StockOut;
