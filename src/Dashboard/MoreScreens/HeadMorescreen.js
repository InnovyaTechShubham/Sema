import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'
import { FaArrowLeft, FaSearch, FaHome, FaUser } from 'react-icons/fa';
import { Text } from 'recharts'
import './MoreScreen.css' 
import { FaCaretDown } from 'react-icons/fa'; 

function HeadMorescreen({OpenSidebar}) {
  const hospitalname = localStorage.getItem('hospitalname')
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
        <a href="#back" className="backtext"><FaArrowLeft /> Back</a>
        </div>
    
        <div className="search-container">
          <input type="text" placeholder="Product name.." />
          <button type="submit"><FaSearch /></button>
        </div>
    
        <div className='header-right'>
         <a href="#home"><FaHome /></a>
            <BsPersonCircle className='icon' style={{ fontSize: '40px' }} />
            <a href="#profile"> Administrator</a>
            <FaCaretDown /> 
            
        </div>
    </header>
  )
}

export default HeadMorescreen ;  