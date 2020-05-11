
import React from 'react';

class SignUp extends React.Component {
	constructor(){
		super();
		this.state={
			value: ''
		}
	}
	render(){
		return(
			
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
        
			);


		}
}

export default SignUp;
