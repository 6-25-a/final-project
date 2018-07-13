const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/config');
const passport = require('passport');

// Load Validation input
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
// User model
const User = require('../../models/User');

// @route           GET api/users/test
// @description     users route test
// @access type     Public
router.get('/test', (req, res) => res.json({
  message: "Users ok"
}));

// @route           GET api/users/register
// @description     Register user
// @access type     Public
router.post('/register', (req, res) => {
  const {
    errors,
    isValid
  } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({
      email: req.body.email
    })
    .then(user => {

      if (user) {
        errors.email = 'Email already exists';
        return res.status(400).json(errors);
      } else {
        const avatar = gravatar.url(req.body.email, {
          s: '200', // size
          r: 'pg', // rating
          d: 'mm' // default
        });

        const newUser = new User({
          // firstName: req.body.firstname,
          // lastName: req.body.lastname,
          name: req.body.name,
          email: req.body.email,
          avatar,
          password: req.body.password
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) {
              throw err;
            } else {
              newUser.password = hash;
              newUser.save()
                .then(user => res.json(user))
                .catch(err => console.log(err));
            }
          });
        });
      }
    });
});

// @route           GET api/users/login
// @description     User login / Returns JWT token
// @access type     Public

router.post('/login', (req, res) => {
  const {
    errors,
    isValid
  } = validateLoginInput(req.body);

  const email = req.body.email;
  const password = req.body.password;

  // Get user by email
  User.findOne({
    email
  }).then(user => {
    // check for user
    if (user) {
      errors.email = 'User not found';
      return res.status(404).json(errors);
    }

    // verify password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // user password match
        // create jwt payload
        const payload = {
          id: user.id,
          name: user.name,
          // firstname: user.firstname,
          // lastname: user.lastname,
          avatar: user.avatar
        }
        // sign token see https://jwt.io  
        jwt.sign(
          payload,
          keys.secretOrKey, {
            expiresIn: 3600
          },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer' + token
            });
          });
      } else {
        errors.password = 'Password not found';
        return res.status(400).json(errors);
      }
    })
  });
});

// @route           GET api/users/current
// @description     Returns current user
// @access type     Private
router.get('/current', passport.authenticate('jwt', {
  session: false
}), (req, res) => {
  res.json({
    id: req.user.id,
    // firstName: req.user.firstname,
    name: req.user.name,
    email: req.uers.email
  });
});

module.exports = router;