import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

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
});

//pre save middleware from mongoose, for encrypting the passwords before saving it into db
userSchema.pre("save", function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified("password")) return next();

  //hash the password with cost of 12
  this.password = bcrypt.hash(this.password, 12);

  // we set passwordconfirm to undefined because we dont want to have passwordConfirm in our database, it is only for confirmation of the password after it is modified
  this.passwordConfirm = undefined;
  next();
});

const UserModel = mongoose.model("userModel", userSchema);

export default UserModel;
