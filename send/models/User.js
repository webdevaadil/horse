const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "plese provide username"],
  },
  email: {
    type: String,
    required: [true, "plese provide email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "plese provide password"],
    minlength: 6,
    select: false,
  },

  package: {
    type: String,
    required: [true, "plese provide package"],
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
userSchema.methods.matchPasswords = async function(password){
  return await bcrypt.compare(password,this.password)
}

const user = mongoose.model("userLOgin", userSchema);
module.exports = user;
