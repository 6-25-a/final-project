const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const jwt = require('jsonwebtoken');
const keys = require('../../config/config');
const passport = require('passport');

// User model
// const User2 = mongoose.model('User2');
const User2 = require('../../models/User2');

// SIGNUP
router.post('/signup', ((req, res) => {
  const newUser = new User();
  newUser.name = req.body.userName;
  newUser.email = req.body.userEmail;
  newUser.setPassword(req.body.userPassword);
  newUser.save((err, userInfo) => {
    if(err) {
      res.sendStatus(500)
    } else {
      res.json({token: newUser.generateJWT()})
    }
  })
}))

// LOGIN
router.post('/login2', ((req, res) => {
  User2.findOne({email: req.body.email}, ((err, user) => {
    if(err) {
      res.send(err)
    } else if(!user) {
      res.json('account does not exist')
    } else {
      if(user.validatePassword(req.body.password)) {
        res.json({token: user.generateJWT()})
      } else {
        res.json('incorrect password')
      }
    }
  }))
}))

module.exports = router;
