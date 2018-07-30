const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  salt: {
    type: String,
    required: true
  }
});

UserSchema.method("setPassword", function(password) {
  this.salt = crypto.randomBytes(16).toString("hex");
  this.passwordHash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, "sha1")
    .toString("hex");
});

UserSchema.method("validatePassword", function(password) {
  let hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, "sha1")
    .toString("hex");
  return hash === this.passwordHash;
});

UserSchema.method("generateJWT", function() {
  return jwt.sign(
    {
      id: this._id,
      email: this.email
    },
    "SecretKey"
  );
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
