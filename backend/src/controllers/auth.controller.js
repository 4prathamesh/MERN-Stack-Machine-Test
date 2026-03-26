const { registerUser, loginUser } = require("../services/auth.service");

//  REGISTER
exports.register = async (req, res, next) => {
  try {
    const { user, accessToken, refreshToken } = await registerUser(req.body);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        id: user._id,
        name: user.name,
        email: user.email
      },
      accessToken
    });

  } catch (error) {
    next(error);
  }
};


//  LOGIN
exports.login = async (req, res, next) => {
  try {
    const { user, accessToken, refreshToken } = await loginUser(req.body);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "strict"
    });

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        id: user._id,
        name: user.name,
        email: user.email
      },
      accessToken
    });

  } catch (error) {
    next(error);
  }
};