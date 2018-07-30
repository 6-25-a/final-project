const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const User2Schema = new mongoose.Schema({
  email : {
    type: String,
    required: true,
    unique: true
  },
  passwordHash : {
    type: String,
    required: true
  },
  salt: {
    type: String,
    required: true
  },
  timestamp: {
      type: Date,
      default: Date.now()
  }
});

User2Schema.method("setPassword", function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.passwordHash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha1').toString('hex');
});

User2Schema.method("validatePassword", function(password){
  let hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha1').toString('hex');
  return (hash === this.passwordHash);
});

User2Schema.method("generateJWT", function() {
  return jwt.sign({
    id: this._id,
    email: this.email
  }, 'SecretKey');
});

module.exports = mongoose.model('User2', User2Schema);