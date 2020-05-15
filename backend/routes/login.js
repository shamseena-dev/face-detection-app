const router = require('express').Router();
let Login = require('../models/login.model');

router.route('/').get((req, res) =>{
	Login.find().then(login => res.json(login)).catch(err => res.status(400).json("Error" + err));
});

router.route('/add').post((req,res)=>{
	
    const email = req.body.email;
    const password = req.body.password; 

	const newLogin = new Login({email, password });
	newLogin.save().then(()=>res.json("login added")).catch(err => res.status(400).json('Error:'+err));
});

module.exports = router;