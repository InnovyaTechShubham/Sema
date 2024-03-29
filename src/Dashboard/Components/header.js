<<<<<<< HEAD
import React from 'react'
import 
 {BsJustify, BsHospital, BsArrowReturnLeft}
 from 'react-icons/bs'
import { Text } from 'recharts'
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
=======
import React, { useState, useEffect } from "react";
import { BsJustify, BsHospital, BsArrowReturnLeft } from "react-icons/bs";
import { Text } from "recharts";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import fetchSearchResults from "../../utils/fetchSearchResults";
>>>>>>> 4b1d0610a57f980f2f47cd2e952b254b05f433ff

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "70%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "70ch",
      "&:focus": {
        width: "80ch",
      },
    },
  },
}));

function Header({ OpenSidebar }) {
  const hospitalname = localStorage.getItem("hospitalname");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleAddUser = () => {
    window.location = "/adduser";
  };

  const handleBack = () => {
    window.location = "/";
  };
<<<<<<< HEAD
  return (
    <header className='header'style={{ backgroundColor: "#75b6fa" }}>    

        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        
        <div className='header-left h3'>
        
            <BsArrowReturnLeft className='icon'/>
            <Button
=======

  //Search Bar
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (searchTerm.length >= 3) {
        const results = await fetchSearchResults(searchTerm);
        setSearchResults(results);
      } else {
        setSearchResults([]);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const highlightSearchTerm = (name) => {
    const startIndex = name.toLowerCase().indexOf(searchTerm.toLowerCase());
    if (startIndex === -1) return name;

    const highlightedName =
      name.slice(0, startIndex) +
      "<span style='font-weight: bold;'>" +
      name.slice(startIndex, startIndex + searchTerm.length) +
      "</span>" +
      name.slice(startIndex + searchTerm.length);

    return <span dangerouslySetInnerHTML={{ __html: highlightedName }}></span>;
  };

  return (
    <header className="header" style={{ backgroundColor: "#75b6fa" }}>
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>

      <div className="header-left h3">
        <BsArrowReturnLeft className="icon" />
        <Button
>>>>>>> 4b1d0610a57f980f2f47cd2e952b254b05f433ff
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleBack}
        >
          BACK
        </Button>
<<<<<<< HEAD
         
        </div>
        
        <div className='header-right h2'>
        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search Your Product"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

=======
>>>>>>> 4b1d0610a57f980f2f47cd2e952b254b05f433ff
      </div>
      {/* <div className='header-right h3'> */}

<<<<<<< HEAD
        <BsHospital className='icon' />
=======
      <div className="header-right h2">
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search Your Product"
            inputProps={{ "aria-label": "search" }}
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {searchResults.length > 0 && (
            <div
              style={{
                position: "absolute",
                backgroundColor: "white",
                width: "100%",
                zIndex: 1,
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                maxHeight: "200x",
                overflowY: "auto",
              }}
            >
              {searchResults.map((product) => (
                <div
                  key={product._id}
                  style={{
                    padding: "8px",
                    cursor: "pointer",
                    fontSize: "16px",
                  }}
                >
                  {highlightSearchTerm(product.name)}
                </div>
              ))}
            </div>
          )}
        </Search>
      </div>

      <div className="header-right h3">
        <BsHospital className="icon" />
>>>>>>> 4b1d0610a57f980f2f47cd2e952b254b05f433ff
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          VEDANTA
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Edit Account Details</MenuItem>
          <MenuItem onClick={handleAddUser}>Add Users</MenuItem>
          <MenuItem onClick={handleClose}>Add Department</MenuItem>
          <MenuItem onClick={handleClose}>Verify Details</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    </header>
  );
}

export default Header;
