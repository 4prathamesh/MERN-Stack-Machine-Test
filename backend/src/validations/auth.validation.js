const { Joi } = require("express-validation");

exports.registerValidation = {
  body: Joi.object({
    name: Joi.string()
      .min(2)
      .max(50)
      .pattern(/^[a-zA-Z\s]+$/)
      .required()
      .messages({
        "string.min": "Name must be at least 2 characters",
        "string.max": "Name must not exceed 50 characters",
        "string.pattern.base": "Name can only contain letters and spaces",
        "any.required": "Name is required"
      }),
    email: Joi.string()
      .email()
      .required()
      .messages({
        "string.email": "Please enter a valid email address",
        "any.required": "Email is required"
      }),
    password: Joi.string()
      .min(8)
      .pattern(/[A-Z]/)
      .pattern(/[a-z]/)
      .pattern(/[0-9]/)
      .pattern(/[!@#$%^&*]/)
      .required()
      .messages({
        "string.min": "Password must be at least 8 characters",
        "string.pattern.base": "Password must contain uppercase, lowercase, number, and special character",
        "any.required": "Password is required"
      }),
    age: Joi.number()
      .integer()
      .min(18)
      .max(120)
      .required()
      .messages({
        "number.min": "You must be at least 18 years old",
        "number.max": "Please enter a valid age",
        "any.required": "Age is required"
      }),
    agree: Joi.boolean()
      .valid(true)
      .required()
      .messages({
        "boolean.base": "Please accept the terms and conditions",
        "any.required": "You must accept the terms and conditions"
      })
  })
};

exports.loginValidation = {
  body: Joi.object({
    email: Joi.string()
      .email()
      .required()
      .messages({
        "string.email": "Please enter a valid email address",
        "any.required": "Email is required"
      }),
    password: Joi.string()
      .min(8)
      .required()
      .messages({
        "string.min": "Password must be at least 8 characters",
        "any.required": "Password is required"
      })
  })
};