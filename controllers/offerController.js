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
  const offers = await Offer.find({}).sort({ createdAt: "desc" });
  // if (offers.length === 0) {
  //   throw new NoItemsError("No offers returned.");
  // }
  res.status(StatusCodes.OK).json({ offers, totalOffers: offers.length });
};

export { postOffer, getOffer, getOffers };
