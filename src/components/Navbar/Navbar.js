import React from 'react';
import {BrowserRouter , Route, Link, withRouter} from 'react-router-dom';
import logo from '../../logo.png';
import "./navbar.css";


class Navbar extends React.Component {
	constructor(props){
		super(props);
	}
   signOut=(e)=> {
   	e.preventDefault()
   	localStorage.removeItem('usertoken')
   	this.props.history.push('/')
   }
   render(){
	   const beforeLoggedIn = (<>
	   	   <button onClick={()=>{this.props.history.push('/signup')}} type="button" className="btn red right">SIGNUP</button> 
	   	    <button onClick={()=>{this.props.history.push('/register')}} type="button" className="btn red right">REGISTER</button>  
	   	  </>);

	   const afterLoggedIn = ( <>
	   	 <Link to='/signup' ><button onClick={this.signOut} type="button" className="btn red right">SIGN OUT</button>
	                          </Link>
	   </>);
	   
	  return (
	     <nav className="darken-3 navbar black navbar-div">
	     <img src={logo} alt="logo" style={{"width":"60px","height":"auto"}} className="left logo-img"/>
	     <h4 className="center"> FACE DETECTION APP </h4>
	      {localStorage.usertoken ? afterLoggedIn : beforeLoggedIn}
	        
	      </nav>
	  );
	}
}

export default withRouter(Navbar);
