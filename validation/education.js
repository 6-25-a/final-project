const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateEducationInput(data) {
  let errors = {};

  data.school = !isEmpty(data.school) ? data.school : '';
  data.degree = !isEmpty(data.degree) ? data.degree : '';
  data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : '';
  data.from = !isEmpty(data.from) ? data.from : '';
  
  if (Validator.isEmpty(data.school)) {
    errors.school = 'Please enter school';
  }

  if (Validator.isEmpty(data.degree)) {
    errors.degree = 'Please enter degree or certification';
  }

  if (Validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = 'Please enter field of study';
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