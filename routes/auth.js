const express = require("express");
const router = express.Router();

const{ register, login,  resetPassword, forgetpassword, dashboard, isAuthuser }= require('../controllers/auth')
router.route("/register").post(register);

router.route("/login").post(login);

router.route("/forgetpassword").post(forgetpassword);

router.route("/resetpassword/:resetToken").put(resetPassword);

router.route("/dashboard").post(isAuthuser,dashboard)


module.exports=router