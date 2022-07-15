const user = require("../models/User");
const User = require("../models/User");

exports.register = async (req, res, next) => {
  const { username, email, password, package } = req.body;
  try {
    const user = await User.create({
      username,
      email,
      password,
      package,
    });
    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res
      .status(400)
      .json({ success: false, error: "please provide email&password" });
  }
  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      res.status(404).json({ success: false, error: "invalid credential" });
    }
    const isMatch = await user.matchPasswords(password);
    if (!isMatch) {
      res.status(404).json({ success: false, error: "invalid credentials" });
    }
  
    res.status(200).json({
      success: true,
      token: "125241544",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.forgetpassword = (req, res, next) => {
  res.send("forgetpassword route");
};

exports.resetpassword = (req, res, next) => {
  res.send("resetpassword route");
}
