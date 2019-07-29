const Validator = require("validator");
const isEmpty = require("./is-empty.js")

module.exports = function validateLoginInput(data) {

    let errors = {};

    if (!Validator.isAlphanumeric(data.username)) {
        errors.username = "Username can consist of numbers and letters only";
    }

    if (Validator.isEmpty(data.username)) {
        errors.username = "Username field is required";
    }

    if (Validator.isEmpty(data.message)) {
        errors.message = "please enter a message to send";
    }

    if (!Validator.isEmail(data.email)) {
        errors.email = "Please enter a valid email";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };

};