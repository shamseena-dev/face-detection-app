const mongoose = require('mongoose');
  const Schema = mongoose.Schema;

  const usersSchema = new Schema({
    fullname: {type : String},
    email:   {type : String, required :true},
    password : {type : String, required :true},
    date : {type : Date, default: Date.now}
    
  });

  const User = mongoose.model('Users', usersSchema);

  module.exports = User;