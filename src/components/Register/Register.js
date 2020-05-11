import React from 'react';

class Register extends React.Component {
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
			           <input id="name" type="text" class="validate"/>
			          <label for="name">Full Name</label>
			        </div>
			        <div class="input-field container">
			          
			          <input id="email" type="email" class="validate"/>
			          <label for="email">Email</label>
			        </div>
			        <button type="button" className="btn"> Register </button>
			      </div>
			    
			  </div>
        
			);
	}
}

export default Register;
