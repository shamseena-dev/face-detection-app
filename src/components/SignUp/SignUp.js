import React from 'react';
import logo from '../../logo.png';
import "../Navbar/navbar.css";

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
			<nav className="darken-3 navbar black navbar-div">
                          <img src={logo} alt="logo" style={{"width":"60px","height":"auto"}} className="left logo-img"/>
                          <h4 className="center"> FACE DETECTION APP </h4>
                          
                        
                          <button onClick={()=>{history.push('/register')}} type="button" className="btn red right">REGISTER</button> 
                           
                          </nav>
			<div className="container">
			  
			    
			      <div className="card">
			        <div className="input-field container">
			            <input id="email" type="email" class="validate"/>
			          <label for="email">Email</label>
			        </div>
			        <div class="input-field container">
			          
			           <input id="password" type="password" class="validate"/>
			          <label for="passsword">Password</label>
			        </div>
			        <button type="button" className="btn"> Sign Up </button>
			      </div>
			    
			  </div>
          </>
			);


		}
}

export default SignUp;
