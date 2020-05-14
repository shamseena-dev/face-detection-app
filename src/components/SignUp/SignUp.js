import React from 'react';
import logo from '../../logo.png';
import "../Navbar/navbar.css";
import "./signup.scss";
import {login} from "../Login_RegisterFunctions/Login_RegisterFunctions"

class SignUp extends React.Component {
	constructor(props){
		super(props);
		this.state={
			email: '',
			password :''
		}
	}

	onChange(e){
		this.setState({[e.target.name]: e.target.value})
	}
	onSubmit(e){
		e.preventDefault();

		const user = {
			email:this.state.email,
			password :this.state.password
		}
		login(user).then(res =>{
			if(res){
				this.props.history.push('/home')
			}
		})
	}
	render(){
		const {history} = this.props;
		return(
			<>
			
			<div className="container">
			  
			    
			       <div className="card signup-card">
			       <h5 className=""> Sign Up </h5>
				       <form noValidate onSubmit={this.onSubmit}>
				        <div className="input-field container">
				            <input id="email" 
				                  name="email" 
				                  type="email"
				                   className="validate" 
				                  value={this.state.email}
				                  onChange={this.onChange} />
				          <label htmlFor="email">Email</label>
				        </div>
				        <div class="input-field container">
				          
				           <input id="password"
				                  type="password"
				                   className="validate"
				                  value={this.state.password}
				                  onChange={this.onChange} />
				          <label htmlFor="passsword">Password</label>
				        </div>
				        <button type="submit" className="btn"> Sign Up </button>

				         <h6> Dont have an account? <a href='/register'>Register</a></h6>
				        </form>
			      </div>
			    
			  </div>
          </>
			);


		}
}

export default SignUp;
