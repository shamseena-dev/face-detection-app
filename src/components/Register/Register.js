import React from 'react';
import logo from '../../logo.png';
import "../Navbar/navbar.css";
import "./register.scss";

class Register extends React.Component {
	constructor(){
		super();
		this.state={
			value: ''
		}
	}
	render(){
		const {history} = this.props;
		return(
			<>
			
			<div className="container">
			  
			    
			       <div className="card register-card">

			      <h5 className=""> Register</h5>
			        <div className="input-field container">
			           <input id="name" type="text" class="validate"/>
			          <label for="name">Full Name</label>
			        </div>
			        <div class="input-field container">
			          
			          <input id="email" type="email" class="validate"/>
			          <label for="email">Email</label>
			        </div>
			        <button onClick={()=>{history.push('/home')}}  type="button" className="btn"> Register </button>

			       <h6> Already have an account ?<a href='/signup'>Sign Up</a></h6>
			      </div>
			    
			  </div>
          </>
			);
	}
}

export default Register;


