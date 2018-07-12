const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/config');
const passport = require('passport');

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
  User.findOne({
      email: req.body.email
    })
    .then(user => {
      if (user) {
        return res.status(400).json({
          email: 'Email already exists'
        });
      } else {
        const avatar = gravatar.url(req.body.email, {
          s: '200', // size
          r: 'pg', // rating
          d: 'mm' // default
        });

        const newUser = new User({
          firstName: req.body.firstname,
          lastName: req.body.lastname,
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
  const email = req.body.email;
  const password = req.body.password;

  // Get user by email
  User.findOne({
    email
  }).then(user => {
    // check for user
    if (user) {
      return res.status(404).json({
        email: 'User not found'
      });
    }

    // verify password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // user password match
        // create jwt payload
        const payload = {
          id: user.id,
          firstname: user.firstname,
          lastname: user.lastname,
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
        return res.status(400).json({
          password: 'Password not found'
        });
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
    firstName: req.user.firstname,
    email: req.uers.email
  });
});

module.exports = router;