const express = require("express");
const router = express.Router();
const { validate } = require("express-validation");

const { register, login } = require("../controllers/auth.controller");
const { registerValidation, loginValidation } = require("../validations/auth.validation");

router.post("/register", validate(registerValidation), register);
router.post("/login", validate(loginValidation), login);

module.exports = router;