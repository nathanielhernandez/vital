import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
  accountType: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  lastName: {
    type: String,
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  businessName: {
    type: String,
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email",
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: 6,
    select: false,
  },
  profilePhoto: {
    type: String,
    default:
      "https://us.123rf.com/450wm/panyamail/panyamail1809/panyamail180900248/109879025-user-avatar-icon-sign-profile-symbol.jpg",
  },
});

// Fires before save (pre, save)

UserSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = function () {
  return jwt.sign({ userID: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};
export default mongoose.model("User", UserSchema);
