import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NoItemsError } from "../errors/index.js";

const getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.send(user);
};

export { getUser };
