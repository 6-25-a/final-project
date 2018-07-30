const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateExperienceInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : '';
  data.company = !isEmpty(data.company) ? data.company : '';
  data.from = !isEmpty(data.from) ? data.from : '';
  
  if (Validator.isEmpty(data.title)) {
    errors.title = 'Please enter job title';
  }

  if (Validator.isEmpty(data.company)) {
    errors.company = 'Please enter company';
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = 'Please enter from date';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};















//https://github.com/chriso/validator.js/