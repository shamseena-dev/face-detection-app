import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import logo from '../../profile.png';
import "./navbar.scss";


class Navbar extends React.Component {
	
   signOut=(e)=> {
   	e.preventDefault()
   	localStorage.removeItem('usertoken')
   	this.props.history.push('/')
   }
   render(){
	   const beforeLoggedIn = (<>
	   	   <div>
	   	   <button onClick={()=>{this.props.history.push('/signup')}} type="button" className="btn red right">SIGNUP</button> 
	   	    
	   	    </div>
	   	  </>);

	   const afterLoggedIn = ( <>
	   	<div>
	   	 <Link to='/signup' ><button onClick={this.signOut} type="button" className="btn red right">SIGNOUT</button>
	                          </Link>
	      </div>
	   </>);
	   
	  return (
	     <nav className="darken-3 navbar navbar-div">
	     <img src={logo} alt="logo" style={{"width":"60px","height":"auto"}} className="left logo-img"/>
	     <h4 className="center app-title"> FACE DETECTION APP </h4>
	      {localStorage.usertoken ? afterLoggedIn : beforeLoggedIn}
	        
	      </nav>
	  );
	}
}

export default withRouter(Navbar);
