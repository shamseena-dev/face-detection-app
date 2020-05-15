import React from 'react';
import logo from '../../logo.png';
import "../Navbar/navbar.css";
import "./register.scss";
import {register} from "../Login_RegisterFunctions/Login_RegisterFunctions"

class Register extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			fullname:'',
			email: '',
			password :''
		}
	}

	onChange=(e) => {
		this.setState({[e.target.name]: e.target.value})
	}
	onSubmit=(e)=> {
		e.preventDefault();

		const user = {
			fullname : this.state.fullname,
			email:this.state.email,
			password :this.state.password
		}
		register(user).then(res =>{
			console.log("Registered Successfully!")
			if(res){
					console.log("history",this.props.history);
					this.props.history.push('/signup')
				}
				
			})
	}
	render(){
		const {history} = this.props;
		return(
			<>
			
			<div className="container">
			  
			    
			       <div className="card register-card">

			      <h5 className=""> Register</h5>
			      
				        <div className="input-field container">
				           <input id="name" 
				                  type="text"
				                  name="fullname"
				                  className="validate"
				                  value={this.state.fullname}
					                  onChange={this.onChange} />
				          <label for="name">Full Name</label>
				        </div>
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
					                  name="password"
					                   className="validate"
					                  value={this.state.password}
					                  onChange={this.onChange} />
					          <label htmlFor="passsword">Password</label>
					        </div>
			               <button  onClick={this.onSubmit} type="submit" className="btn"> Register </button>

			               <h6> Already have an account ?<a href='/signup'>Sign Up</a></h6>
			       
			      </div>
			    </div>
			  
          </>
			);
	}
}

export default Register;


