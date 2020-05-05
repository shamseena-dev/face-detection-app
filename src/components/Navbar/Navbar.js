import React from 'react';
import logo from '../../logo.png';



function Navbar() {
  return (
     <nav className="darken-3 navbar blue">
      <img src={logo} alt="logo" style={{"width":"60px","height":"auto"}} className="left"/>
      <button type="button" className="btn red right">SIGN UP</button>
      <button type="button" className="btn red right">REGISTER</button>
       
      </nav>
    
  );
}

export default Navbar;
