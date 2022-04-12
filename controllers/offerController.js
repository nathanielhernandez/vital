import Offer from "../models/Offer.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NoItemsError } from "../errors/index.js";

const postOffer = async (req, res) => {
  const {
    businessName,
    businessID,
    offerDetails,
    tagsID,
    shareableLink,
    timeStamp,
  } = req.body;

  if (
    !businessName ||
    !businessID ||
    !offerDetails ||
    !tagsID ||
    !shareableLink
  ) {
    throw new BadRequestError("Please provide all values");
  }

  const offer = await Offer.create({
    businessName,
    businessID,
    offerDetails,
    tagsID,
    shareableLink,
  });

  res.status(StatusCodes.CREATED).json({
    businessName: offer.businessName,
    businessID: offer.businessID,
    offerDetails: offer.offerDetails,
    tagsID: offer.tagsID,
    shareableLink: offer.shareableLink,
  });
};

const getOffer = (req, res) => {
  const { offerID } = res.body;
  res.send(offerID);
};

const getOffers = async (req, res) => {
  let result = Offer.find({}).sort({ createdAt: "desc" });

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 5;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const offers = await result;

  const totalOffers = await Offer.countDocuments({});
  const numOfPages = Math.ceil(totalOffers / limit);

  res.status(StatusCodes.OK).json({ offers, totalOffers, numOfPages });
};

export { postOffer, getOffer, getOffers };
