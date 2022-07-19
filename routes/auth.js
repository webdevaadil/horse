const express = require("express");
const router = express.Router();

const{ register, login,  resetPassword, forgetpassword }= require('../controllers/auth')
router.route("/register").post(register);

router.route("/login").post(login);

router.route("/forgetpassword").post(forgetpassword);

router.route("/resetpassword/:resetToken").put(resetPassword);


module.exports=router