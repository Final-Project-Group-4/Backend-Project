import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import crypto from "crypto";

const userSchema = mongoose.Schema({
  username: { type: String, required: [true, "Please provide a username"] },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 5,
    //select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password."],
    //creating custom validator, it only works on create and save, so whenever we update our admin data we need to use save also! not with getbyidandupdate!
    validate: {
      validator: function (el) {
        return el === this.password; // abc === abc
      },
      message: "Passwords are not the same.",
    },
  },
  photo: { type: String },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
});

//pre save middleware from mongoose, for encrypting the passwords before saving it into db
userSchema.pre("save", async function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified("password")) return next();

  //hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // we set passwordconfirm to undefined because we dont want to have passwordConfirm in our database, it is only for confirmation of the password after it is modified
  this.passwordConfirm = undefined;
  next();
});
userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    console.log(changedTimestamp, JWTTimestamp);
    return JWTTimestamp < changedTimestamp; //100<200
  }
  //False means NOT changed
  return false;
};

//forgotpassword
userSchema.methods.createPasswordResetToken = function () {
  //This makes the hackers to reset the password easily, so encrypt it.
  const resetToken = crypto.randomBytes(32).toString("hex");
  //encrypt the reset password and store it in database
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  console.log({ resetToken }, this.passwordResetToken);
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
  return resetToken;
};

userSchema.pre("save", function (next) {
  if (!this.isModified("password") || this.isNew) return next();
  this.passwordChangedAt = Date.now() - 1000;
  next();
});

const UserModel = mongoose.model("userModel", userSchema);

export default UserModel;
