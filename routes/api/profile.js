const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load User/Profile Validation
const validateProfileInput = require('../../validation/profile');
const validateExperienceInput = require('../../validation/experience');
const validateEducationInput = require('../../validation/education');

// Profile model
const Profile = require('../../models/Profile');
// User profile
const User = require('../../models/User');

// // @route           GET api/profile/test
// // @description     profile route test
// // @access type     Public
router.get('/test', (req, res) => res.json({
  message: "Profile ok"
}));

// @route           GET api/profile
// @description     Profile of current user
// @access type     Private
router.get('/', passport.authenticate('jwt', {
  session: false
}), (req, res) => {
  const errors = {};

  Profile.findOne({
      user: req.user.id
    })
    .populate('user', ['name', 'avatar'])
    .then(profile => {
      if (!profile) {
        errors.noprofile = 'Profile not found for this user';
        return res.status(404).json(errors);
      }
      res.json(profile);
    })
    .catch(err => res.status(404).json({
      profile: 'No user profile found'
    }));
});

// @route           GET api/profile/all
// @description     Get profiles all
// @access type     Public
router.get('/all', (req, res) => {
  const errors = {};

  Profile.find()
    .populate('user', ['name', 'avatar'])
    .then(profiles => {
      if (!profiles) {
        errors.noprofile = 'Profiles not found';
        return res.status(404).json(errors);
      }

      res.json(profiles);
    })
    .catch(err =>
      res.status(404).json({
        profile: 'No user profiles found'
      })
    );
});

// @route           GET api/profile/handle/:handle
// @description     Get profile by handle
// @access type     Public

router.get('/handle/:handle', (req, res) => {
  const errors = {};
  Profile.findOne({
      handle: req.params.handle
    })
    .populate('user', ['name', 'avatar'])
    .then(profile => {
      if (!profile) {
        errors.noprofile = 'No profile found for this user';
        res.status(404).json(errors);
      }

      res.json(profile);
    })
    .catch(err => res.status(404).json(err));
});

// @route           GET api/profile/user/:user_id
// @description     Get profile by user id
// @access type     Public

router.get('/user/:user_id', (req, res) => {
  const errors = {};
  Profile.findOne({
      user: req.params.user_id
    })
    .populate('user', ['name', 'avatar'])
    .then(profile => {
      if (!profile) {
        errors.noprofile = 'No profile found for this user';
        res.status(404).json(errors);
      }

      res.json(profile);
    })
    .catch(err => res.status(404).json(err));
});

// @route           POST api/profile
// @description     Create or update user Profile
// @access type     Private
router.post('/', passport.authenticate('jwt', {
  session: false
}), (req, res) => {
  const {
    errors,
    isValid
  } = validateProfileInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  // Get user fields
  const userFields = {};
  userFields.user = req.user.id;
  if (req.body.handle) userFields.handle = req.body.handle;
  if (req.body.company) userFields.company = req.body.company;
  if (req.body.website) userFields.website = req.body.website;
  if (req.body.location) userFields.location = req.body.location;
  if (req.body.bio) userFields.bio = req.body.bio;
  if (req.body.status) userFields.status = req.body.status;
  if (req.body.githubusername) userFields.githubusername = req.body.githubusername;

  if (typeof req.body.skills !== 'undefined') {
    userFields.skills = req.body.skills.split(',')
  }

  userFields.social = {};
  if (req.body.youtube) userFields.social.youtube = req.body.youtube;

  if (req.body.facebook) userFields.social.facebook = req.body.facebook;

  if (req.body.linkedin) userFields.social.linkedin = req.body.linkedin;

  if (req.body.twitter) userFields.social.twitter = req.body.twitter;

  if (req.body.instagram) userFields.instagram = req.body.instagram;

  Profile.findOne({
    user: req.user.id
  }).then(profile => {
    if (profile) {
      // User update
      Profile.findOneAndUpdate({
        user: req.user.id
      }, {
        $set: userFields
      }, {
        new: true
      }).then(profile => res.json(profile));
    } else {
      // New User

      // Existing Handle
      Profile.findOne({
        handle: userFields.handle
      }).then(profile => {
        if (profile) {
          errors.handle = 'Handle already exists';
          res.status(400).json(errors);
        }

        // Save User
        new Profile(userFields).save().then(profile => res.json(profile));
      });
    }
  });
});

// @route           POST api/profile/experience
// @description     To add experience to profile
// @access type     Private
router.post('/experience', passport.authenticate('jwt', {
  session: false
}), (req, res) => {
  const {
    errors,
    isValid
  } = validateExperienceInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  Profile.findOne({
    user: req.user.id
  }).then(profile => {
    const newExp = {
      title: req.body.title,
      company: req.body.company,
      location: req.body.location,
      from: req.body.from,
      to: req.body.to,
      current: req.body.current,
      description: req.body.description
    }

    profile.experience.unshift(newExp);
    profile.save().then(profile => res.json(profile));
  })
});

// @route           POST api/profile/education
// @description     To add education to profile
// @access type     Private
router.post('/education', passport.authenticate('jwt', {
  session: false
}), (req, res) => {
  const {
    errors,
    isValid
  } = validateEducationInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  Profile.findOne({
    user: req.user.id
  }).then(profile => {
    const newEdu = {
      school: req.body.school,
      degree: req.body.degree,
      fieldofstudy: req.body.fieldofstudy,
      from: req.body.from,
      to: req.body.to,
      current: req.body.current,
      description: req.body.description
    }

    profile.education.unshift(newEdu);
    profile.save().then(profile => res.json(profile));
  })
});

// @route           DELETE api/profile/experience/:exp_id
// @description     To delete experience from profile
// @access type     Private
router.delete('/experience/:exp_id', passport.authenticate('jwt', {
  session: false
}), (req, res) => {

  Profile.findOne({
    user: req.user.id
  }).then(profile => {
   const removeIndex = profile.experience
   .map(item => item.id)
   .indexOf(req.params.exp_id);

   profile.save().then(profile => res.json(profile));
  }).catch(err => res.status(404).json(err));
});

// @route           DELETE api/profile/education/:edu_id
// @description     To delete education from profile
// @access type     Private
router.delete('/education/:edu_id', passport.authenticate('jwt', {
  session: false
}), (req, res) => {

  Profile.findOne({
    user: req.user.id
  }).then(profile => {
    const removeIndex = profile.education
   .map(item => item.id)
   .indexOf(req.params.edu_id);

   profile.save().then(profile => res.json(profile));
  }).catch(err => res.status(404).json(err));
});

// @route           DELETE api/profile
// @description     To delete profile & user
// @access type     Private
router.delete('/', passport.authenticate('jwt', {
  session: false
}), (req, res) => {
  Profile.findOneAndRemove({ user: req.user.id })
  .then(() => {
    User.findOneAndRemove({ _id: req.user.id}).then(() => res.json({ success: true })
  );
  })
});


module.exports = router;