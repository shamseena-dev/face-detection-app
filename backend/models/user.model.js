const mongoose = require('mongoose');
  const Schema = mongoose.Schema;

  const usersSchema = new Schema({
    fullname: String,
    email:   String,
    entries:  { type: Number, default: 0 },
    
  });

  const Users = mongoose.model('Users', usersSchema);

  module.exports = Users;