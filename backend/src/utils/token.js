const jwt = require("jsonwebtoken");

exports.generateAccessToken = (user) => {
  return jwt.sign(user, "ACCESS_SECRET", { expiresIn: "15m" });
};

exports.generateRefreshToken = (user) => {
  return jwt.sign(user, "REFRESH_SECRET", { expiresIn: "7d" });
};