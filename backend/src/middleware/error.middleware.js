const { ValidationError } = require("express-validation");

module.exports = (err, req, res, next) => {

  // Handle validation errors
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.details.body[0].message
    });
  }

  // Other errors
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error"
  });
};