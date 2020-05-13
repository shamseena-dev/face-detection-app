import React from 'react';
import logo from '../../logo.png';
import "../Navbar/navbar.css";
import "./signup.scss"

class SignUp extends React.Component {
	constructor(props){
		super(props);
		this.state={
			value: ''
		}
	}
	render(){
		const {history} = this.props;
		return(
			<>
			
			<div className="container">
			  
			    
			       <div className="card signup-card">
			       <h5 className=""> Sign Up </h5>
			        <div className="input-field container">
			            <input id="email" type="email" class="validate"/>
			          <label for="email">Email</label>
			        </div>
			        <div class="input-field container">
			          
			           <input id="password" type="password" class="validate"/>
			          <label for="passsword">Password</label>
			        </div>
			        <button type="button" className="btn"> Sign Up </button>

			         <h6> Dont have an account? <a href='/register'>Register</a></h6>
			      </div>
			    
			  </div>
          </>
			);


		}
}

export default SignUp;
