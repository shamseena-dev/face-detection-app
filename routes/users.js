const router = require('express').Router();

const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const cors = require("cors");
const jwt = require ("jsonwebtoken");

router.use(cors());


process.env.SECRET_KEY = 'secret';
router.route('/').get((req, res) =>{
	User.find()
	.then(users => res.json(users))
	.catch(err => res.status(400).json("Error" + err));
});


	router.post('/register', (req,res)=> {

	const today = new Date();
	const userData = {
		fullname : req.body.fullname,
		email : req.body.email,
		password: req.body.password,
		created : today

	};
	User.findOne({
		email: req.body.email
	}).exec().then(user =>{ 
		
		    if(!user){

				bcrypt.hash(req.body.password, 10, (err,hash)=>{
					userData.password = hash
					User.create(userData)
						.then(user =>{
								res.json({status : user.email + 'registered successfully!'})
			            })
						.catch(err =>{
							res.send('Error:' +err)
			            })
			
				})
		    }
		    else{
				res.json({error : "User already exists"})
		    }
	    })
	   .catch(err =>{
	   	res.send('Error:' +err)
	   })
})

router.post('/login', (req,res)=> {
	User.findOne({
		email: req.body.email
	})
	.then(user =>{
		
		if(user){
			if(bcrypt.compareSync(req.body.password, user.password)){
				const payload = {
					_id : user._id,
					fullname : user.fullname,
					email :user.email
				}
				let token = jwt.sign(payload,process.env.SECRET_KEY,{
					expiresIn : 1440
				})
				res.send("token")
			}else {
				res.json({error : "User does not exist"});
			}
		}else {
			res.json ({error : "User does not exist"})
		}
	})
	.catch(err =>{
		res.send('error: '+ err)
	})
})
/*
	const fullname = req.body.fullname;
    const email = req.body.email;
    const entries = req.body.password; 

	const newUser = new User({fullname, email, entries });
	newUser.save()
	.then(()=>res.json("User added"))
	.catch(err => res.status(400).json('Error:'+err));
});
*/
module.exports = router;