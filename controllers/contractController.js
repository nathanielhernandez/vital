import Contract from "../models/Contracts.js";
import { StatusCodes } from "http-status-codes";
import {
  BadRequestError,
  NoItemsError,
  NotFoundError,
} from "../errors/index.js";

const postContract = async (req, res) => {
  const { businessID, userID, offerID } = req.body;
  if (!businessID || !userID || !offerID) {
    throw new BadRequestError("Please provide all values");
  }

  try {
    const contract = await Contract.create({
      businessID,
      userID,
      offerID,
    });

    res.status(StatusCodes.CREATED).json({
      _id: contract._id,
      businessID: contract.businessID,
      userID: contract.userID,
      offerID: contract.offerID,
    });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal server error" });
  }
};

const getContract = async (req, res) => {
  try {
    const contract = await Contract.findById(req.params.id);
    res.status(StatusCodes.OK).send(contract).json(contract);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal server error" });
  }
};

const getContractsByOffer = async (req, res) => {
  try {
    const { offerID } = req.params;
    const contract = await Contract.find({
      offerID: offerID,
      completed: false,
    });
    res.status(StatusCodes.OK).send(contract);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal server error" });
  }
};

const getContractsByUser = async (req, res) => {
  try {
    const { userID } = req.params;
    const contract = await Contract.find({
      userID: userID,
    });
    res.status(StatusCodes.OK).send(contract);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal server error" });
  }
};

const updateContract = async (req, res) => {
  try {
    const { id: contractID } = req.params;

    const contract = await Contract.findOne({ _id: contractID });

    if (!contract) {
      throw new NotFoundError(`No contract with id: ${contractID}`);
    }

    const updatedContract = await Contract.findOneAndUpdate(
      { _id: contractID },
      req.body,
      { new: true, runValidators: true }
    );

    res.status(StatusCodes.OK).json(updatedContract);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal server error" });
  }
};

export {
  postContract,
  getContract,
  getContractsByOffer,
  getContractsByUser,
  updateContract,
};
