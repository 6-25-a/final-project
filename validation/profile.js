const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : '';
  data.status = !isEmpty(data.status) ? data.status : '';
  data.skills = !isEmpty(data.skills) ? data.skills : '';

  if (!Validator.isLength(data.handle, {
      min: 2,
      max: 7
    })) {
    errors.handle = 'Handles should be between 2 and 7 characters';
  }

  if (Validator.isEmpty(data.handle)) {
    errors.handle = 'User Profile handle is required.';
  }

  if (Validator.isEmpty(data.status)) {
    errors.status = 'Please complete status.';
  }

  if (Validator.isEmpty(data.skills)) {
    errors.skills = 'Please add skills.';
  }

  if (!isEmpty(data.website)) {
    if (!Validator.isURL(data.website)) {
      errors.website = 'URL invalid';
    }
  }

  if (!isEmpty(data.youtube)) {
    if (!Validator.isURL(data.youtube)) {
      errors.youtube = 'URL invalid';
    }
  }

  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = 'URL invalid';
    }
  }

  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      errors.facebook = 'URL invalid';
    }
  }

  if (!isEmpty(data.linkedin)) {
    if (!Validator.isURL(data.linkedin)) {
      errors.linkedin = 'URL invalid';
    }
  }

  if (!isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      errors.instagram = 'URL invalid';
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};















//https://github.com/chriso/validator.js/