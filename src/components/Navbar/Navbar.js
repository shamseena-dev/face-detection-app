import React from 'react';
import logo from '../../logo.png';
import "./navbar.css";


function Navbar() {
  return (
     <nav className="darken-3 navbar black navbar-div">
      <img src={logo} alt="logo" style={{"width":"60px","height":"auto"}} className="left logo-img"/>
      <h4 className="center"> FACE DETECTION APP </h4>
      {/*
      <button type="button" className="btn red right">SIGN UP</button>
      <button type="button" className="btn red right">REGISTER</button> */}
       
      </nav>
    
  );
}

export default Navbar;
