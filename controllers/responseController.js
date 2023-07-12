import Response from "../models/Response.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";
import { response } from "express";

const postResponse = async (req, res) => {
  const { offerID, responseDetails, userID, businessID } = req.body;

  if (!offerID || !responseDetails || !userID || !businessID) {
    throw new BadRequestError("Please provide all values");
  }

  const response = await Response.create({
    offerID,
    responseDetails,
    userID,
    businessID,
  });

  res.status(StatusCodes.CREATED).json({
    _id: response._id,
    offerID: response.offerID,
    responseDetails: response.responseDetails,
    userID: response.userID,
    businessID: response.businessID,
  });
};

const getResponseByOfferID = async (req, res) => {
  try {
    const { offerID } = req.params;
    const response = await Response.find({
      offerID: offerID,
      accepted: false,
      rejected: false,
    });
    res.send(response);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal server error" });
  }
};

const updateResponse = async (req, res) => {
  try {
    const { id: responseID } = req.params;

    const response = await Response.findOne({ _id: responseID });

    if (!response) {
      throw new NotFoundError(`No response with id: ${record}`);
    }

    const updatedResponse = await Response.findOneAndUpdate(
      { _id: responseID },
      req.body,
      { new: true, runValidators: true }
    );

    res.status(StatusCodes.OK).json(updatedResponse);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal server error", body: error });
  }
};

export { postResponse, getResponseByOfferID, updateResponse };
