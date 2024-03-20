import "./App.css";
import Dashboard from "./Dashboard/Dashboard";
import Login from "./Login/login";
import "bootstrap/dist/css/bootstrap.min.css";
import UserRegistration from "./UserRegistration/UserRegistration";
import { Route, Routes, Navigate } from "react-router-dom";
import EmailVerify from "./EmailVerify/emailverify";
import EnterOtp from "./EnterOtp/enterotp";
import datagrid from "./Reports/datagrid";
import FullFeaturedCrudGrid from "./Reports/datagrid";
import HospitalRegistration from "./HospitalRegistration/HospitalRegistration";
import StockEntryScreen from "./StockEntry/StockEntryScreen";
import StockIssueScreen from "./StockIssue/StockIssueScreen";
import ProductEntryScreen from "./ProductEntry/ProductEntryScreen";
<<<<<<< Updated upstream
import AddDepartment from "./AddDepartment/AddDepartment";
import TotalProducts from "./Dashboard/MoreScreens/TotalProducts";
import AvailableProducts from "./Dashboard/MoreScreens/AvailableProducts";
import BufferProducts from "./Dashboard/MoreScreens/BufferProducts";
import StockOut from "./Dashboard/MoreScreens/StockOut";
=======
import AddDepartment from "./AddDepartmentNew/AddDepartment"
import ReportScreen from "./Reports/ReportScreen";
import AddUserScreen from "./AddUser/AddUserScreen";
import TotalProduct from "./TotalProduct/TotalProduct";
import AvailaibleProduct from "./AvailaibleProduct/Availaible Product";
import BufferStock from "./BufferStock/BufferStock";
import StockOut from "./StockOut/StockOut";


>>>>>>> Stashed changes

function App() {
  const user = localStorage.getItem("id");

  return (
    <Routes>
      {user == null && <Route path="/" exact element={<Login />} />}
      {user != null && <Route path="/" exact element={<Dashboard />} />}
      {user == null && (
        <Route path="/signup" exact element={<UserRegistration />} />
      )}
      {user != null && <Route path="/verify" exact element={<EnterOtp />} />}
      {user == null && <Route path="/login" exact element={<Login />} />}
      {user != null && (
        <Route path="/stockentry" exact element={<StockEntryScreen />} />
      )}
      {user != null && (
        <Route path="/stockissue" exact element={<StockIssueScreen />} />
      )}
      {user != null && (
        <Route path="/productentry" exact element={<ProductEntryScreen />} />
      )}
      {user != null && (
        <Route path="/adddepartmentnew" exact element={<AddDepartment />} />
      )}

<<<<<<< Updated upstream
      {/* More Screens */}
      {user != null && (
        <Route path="/totalproducts" exact element={<TotalProducts />} />
      )}
      {user != null && (
        <Route
          path="/availableproducts"
          exact
          element={<AvailableProducts />}
        />
      )}
      {user != null && (
        <Route path="/bufferproducts" exact element={<BufferProducts />} />
      )}
      {user != null && <Route path="/stockout" exact element={<StockOut />} />}

      {user == null && (
        <Route path="/reports" exact element={<FullFeaturedCrudGrid />} />
      )}
      {user != null && (
        <Route
          path="/registerhospital"
          exact
          element={<HospitalRegistration />}
        />
      )}
      {user == null && (
        <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
      )}
    </Routes>
=======
    {user == null && <Route path="/" exact element={<Login />} />}
    {user != null && <Route path="/" exact element={<Dashboard />} /> }
    {user == null &&<Route path="/signup" exact element={<UserRegistration />} />}
    {user != null &&<Route path="/verify" exact element={<EnterOtp />} />}
    {user == null &&<Route path="/login" exact element={<Login />} />}
    {user != null &&<Route path="/stockentry" exact element={<StockEntryScreen />} />}
    {user != null &&<Route path="/stockissue" exact element={<StockIssueScreen />} />}
    {user != null &&<Route path="/productentry" exact element={<ProductEntryScreen />} />}
    {user != null &&<Route path="/adddepartmentnew" exact element={<AddDepartment />} />}
    {user != null &&<Route path="/adduser" exact element={<AddUserScreen />} />}
    {user != null &&<Route path="/totalproduct" exact element={<TotalProduct />} />}
    {user != null &&<Route path="/availaibleproduct" exact element={<AvailaibleProduct />} />}
    {user != null &&<Route path="/bufferstock" exact element={<BufferStock />} />}
    {user != null &&<Route path="/stockout" exact element={<StockOut />} />}


    {user != null &&<Route path="/reports" exact element={<ReportScreen />} />}
    {user != null &&<Route path="/registerhospital" exact element={<HospitalRegistration />} />}


    
    {user == null && <Route path="/users/:id/verify/:token" element={<EmailVerify />} />}
  </Routes>
>>>>>>> Stashed changes
  );
}
export default App;
