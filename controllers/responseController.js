import Response from "../models/Response.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/index.js";

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
  const { offerID } = req.params;
  const response = await Response.find({ offerID: offerID });
  res.send(response);
};

export { postResponse, getResponseByOfferID };
