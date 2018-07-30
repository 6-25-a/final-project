const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePostsInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : '';
  data.password = !isEmpty(data.password) ? data.password : '';
 
  if (!Validator.isLength(data.text, { min: 10, max: 400 })) {
    errors.text = 'Post must be between 10 and 400 characters';
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = 'Text field is required';
  }

  
  return {
    errors,
    isValid: isEmpty(errors)
  };
};















//https://github.com/chriso/validator.js/