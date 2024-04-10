import { useState } from "react";
import "./AddUser.css";
// '../Dashboard/Dashboard.css';
import Header from "../Dashboard/Components/header";
import Sidebar from "../Dashboard/Components/sidebar";

// import UserData from "./UserData";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

function AddUserScreen() {
  // ... your useState and other functions
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    role: "",
    name: "",
    phone: "",
    email: "",
    status: "",
  });

  // Your users state or it could be fetched from an API
  const [users, setUsers] = useState([
    {
      role: "Hospital superintendent",
      name: "Sumit Kumar",
      phone: "+91 8567848778",
      email: "xyz123hos@gmail.com",
      status: "Pending",
    },
    {
      role: "Inventory Manager",
      name: "Ankit Kumar",
      phone: "+91 9452102502",
      email: "abc123hos@gmail.com",
      status: "Registered",
    },
  ]);

  const OpenSidebar = () => {
    setOpenSidebarToggle(openSidebarToggle);
  };

  const handleAddUserClick = () => {
    setIsAddFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsAddFormOpen(false);
  };

  const handleFormSubmit = () => {
    // You would add the logic to actually add the user here
    // For example, send a request to your backend or update local state
    setIsAddFormOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
        className={openSidebarToggle ? "sidebar-closed" : "sidebar-open"}
      />
      {/* <UserData /> */}
      {/* <div className="user-table-parent-container">
        <div className="user-table-container">
          <div className="table-controls">
            <button className="table-title">Department</button>
            <button className="table-title">Add User</button>
            <button className="table-title">Edit Account</button>
            <button className="table-title">Change Password</button>
            <button className="btn-add-user">+ Add</button>
          </div>
          <table className="user-table">
            <thead>
              <tr>
                <th>Assignee</th>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Email Address</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.email}>
                  <td>{user.role}</td>
                  <td>{user.name}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  <td>{user.status}</td>
                  <td>
                    <button className="btn-edit"></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="footer">
            © Copyright 2023 semamart.com. All Rights Reserved.
          </div>
        </div>
      </div> */}
      <div className="user-table-parent-container">
        <div className="user-table-container">
          <div className="table-controls">
            <button className="table-title">Department</button>
            <button className="table-title">Add User</button>
            <button className="table-title">Edit Account</button>
            <button className="table-title">Change Password</button>
            <button className="btn-add-user" onClick={handleAddUserClick}>
              + Add
            </button>
          </div>
          <div style={{ paddingLeft: 250 + "px" }}>
            <TableContainer component={Paper}>
              <Table className="user-table" aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Assignee</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Phone Number</TableCell>
                    <TableCell>Email Address</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.email}>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.phone}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.status}</TableCell>
                      <TableCell>
                        <Button variant="contained" color="primary">
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className="footer">
            © Copyright 2023 semamart.com. All Rights Reserved.
          </div>
        </div>
      </div>
      <Dialog open={isAddFormOpen} onClose={handleCloseForm}>
        <DialogTitle>Add New User</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a new user, please fill in the following details.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="role"
            label="Role"
            type="text"
            fullWidth
            variant="standard"
            value={newUser.role}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            value={newUser.name}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="phone"
            label="Phone Number"
            type="text"
            fullWidth
            variant="standard"
            value={newUser.phone}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={newUser.email}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="status"
            label="Status"
            type="text"
            fullWidth
            variant="standard"
            value={newUser.status}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseForm}>Cancel</Button>
          <Button onClick={handleFormSubmit}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddUserScreen;
