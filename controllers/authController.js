import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";

const register = async (req, res) => {
  const { accountType, firstName, lastName, businessName, email, password } =
    req.body;

  if (
    accountType === "Personal" &&
    (!accountType || !firstName || !lastName || !email || !password)
  ) {
    throw new BadRequestError("Please provide all values");
  } else if (
    accountType === "Business" &&
    (!accountType || !businessName || !email || !password)
  ) {
    throw new BadRequestError("Please provide all values");
  }

  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError("Email already in use");
  }

  const user = await User.create({
    accountType,
    firstName,
    lastName,
    businessName,
    email,
    password,
  });

  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: {
      accountType: user.accountType,
      firstName: user.firstName,
      lastName: user.lastName,
      businessName: user.businessName,
      email: user.email,
      profilePhoto: user.profilePhoto,
    },
    token,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide all values");
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new UnAuthenticatedError("Invalide Credentials");
  }

  console.log(user);

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError("Invalide Credentials");
  }
  const token = user.createJWT();
  user.password = undefined;
  res.status(StatusCodes.OK).json({
    user,
    token,
  });
};

const updateUser = (req, res) => {
  res.send("update User");
};

export { register, login, updateUser };
