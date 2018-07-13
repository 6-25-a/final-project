const mongoose = require('mongoose');
const bcrpt = require('bcrypt');
const Schema = mongoose.Schema;

// User Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  // firstName: {
  //   type: String,
  //   required: true
  // },
  // lastName: {
  //   type: String,
  //   required: true
  // },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
  },
  // isRemoved: {
  //     type: Boolean,
  //     default: false
  // },
  date: {
    type: Date,
    default: Date.now
  }
});

UserSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
}

UserSchema.methods.validPassword = function (password) {
  return bcrpt.compareSync(password, this.password);
}

module.exports = mongoose.model('User', UserSchema);