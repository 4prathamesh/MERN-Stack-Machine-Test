const bcrypt = require("bcryptjs");
const User = require("../models/user.model");
const { generateAccessToken, generateRefreshToken } = require("../utils/token");

// REGISTER SERVICE
exports.registerUser = async (data) => {
  const { name, email, password, age } = data;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw {
      statusCode: 409,
      message: "User already exists"
    };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    age
  });

  const accessToken = generateAccessToken({ id: user._id });
  const refreshToken = generateRefreshToken({ id: user._id });

  return {
    user,
    accessToken,
    refreshToken
  };
};


// LOGIN SERVICE
exports.loginUser = async (data) => {
  const { email, password } = data;

  const user = await User.findOne({ email });
  if (!user) {
    throw {
      statusCode: 401,
      message: "Invalid email or password"
    };
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw {
      statusCode: 401,
      message: "Invalid email or password"
    };
  }

  const accessToken = generateAccessToken({ id: user._id });
  const refreshToken = generateRefreshToken({ id: user._id });

  return {
    user,
    accessToken,
    refreshToken
  };
};