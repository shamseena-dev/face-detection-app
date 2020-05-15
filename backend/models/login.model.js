const mongoose = require('mongoose');
  const Schema = mongoose.Schema;

  const loginSchema = new Schema({
    email:   String,
    password:  { type: String },
    
  });

  const Login = mongoose.model('Login', loginSchema);

  module.exports = Login;