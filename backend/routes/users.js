const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) =>{
	User.find()
	.then(users => res.json(users))
	.catch(err => res.status(400).json("Error" + err));
});

router.route('/add').post((req,res)=>{
	const fullname = req.body.fullname;
    const email = req.body.email;
    const entries = req.body.entries; 

	const newUser = new User({fullname, email, entries });
	newUser.save()
	.then(()=>res.json("User added"))
	.catch(err => res.status(400).json('Error:'+err));
});

module.exports = router;