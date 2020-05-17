const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;



app.use(cors());


app.use(express.json());
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', () =>{
	console.log("MongoDB connected successfully");
})

const usersRouter= require('./routes/users');

//Routes
app.use('/users', usersRouter);

//serve static assets if in production

if(process.env.NODE_ENV === 'production'){
	//set static folder
	app.use(express.static('client/build'));

	app.get('*',(req,res)=>{
		res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
			});
}
app.listen(port, () =>{
	console.log(`server is running on port ${port}`);
})

/*
heroku config:set MONGODB_URI=mongodb+srv://Shamz:Shamx@db5@cluster0-jrm68.gcp.mongodb.net/test?retryWrites=true&w=majority -a face-app1
*/