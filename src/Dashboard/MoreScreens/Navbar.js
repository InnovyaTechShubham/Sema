import React from 'react';
import { FaArrowLeft, FaSearch, FaHome, FaUser } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
      <a href="#back" className="backtext"><FaArrowLeft /> Back</a>
      </div>
      <div className="center">
        <div className="search-container">
          <input type="text" placeholder="Product name.." />
          <button type="submit"><FaSearch /></button>
        </div>
      </div>
        <div className='right'><a href="#home"><FaHome /></a></div>
        <a href="#profile"><FaUser /> Administrator</a>
    </div>
  );
}

export default Navbar;

