import axios from "axios"

export const register = newUser =>{
	return axios.post('users/register',{
		  fullname :newUser.fullname,
		  email: newUser.email,
		  password: newUser.password
	})
	.then(res =>{
		console.log("Registered Successfully!")
	})
}

export const login = user =>{
	return axios.post('users/login',{
		   email: newUser.email,
		  password: newUser.password
	})
	.then(res =>{
		localStorage.setItem('usertoken', res.data);
		return res.data;
	})
	.catch(err =>{
		console.log(err)
	})
}