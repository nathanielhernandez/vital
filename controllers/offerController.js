import Offer from "../models/Offer.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NoItemsError } from "../errors/index.js";

const postOffer = async (req, res) => {
  const { businessID, offerTitle, reward, offerDetails, allowedContracts } =
    req.body;

  // if (
  //   !businessID ||
  //   !offerTitle ||
  //   !reward ||
  //   !offerDetails ||
  //   !allowedContracts
  // ) {
  //   throw new BadRequestError("Please provide all values");
  // }

  const offer = await Offer.create({
    businessID,
    offerTitle,
    reward,
    offerDetails,
    allowedContracts,
  });

  res.status(StatusCodes.CREATED).json({
    _id: offer._id,
    businessID: offer.businessID,
    offerTitle: offer.offerTitle,
    reward: offer.reward,
    offerDetails: offer.offerDetails,
    allowedContracts: offer.allowedContracts,
  });
};

const getOffer = async (req, res) => {
  const offer = await Offer.findById(req.params.id);
  res.send(offer);
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

const getOffersByUserID = async (req, res) => {
  const user = req.query.user;
  let result = Offer.find({ businessID: user }).sort({ createdAt: "desc" });
};

const updateOffer = async (req, res) => {
  const offerID = req.params.offerID;
  const updateOffer = req.body;

  collection.updateOne(
    { _id: ObjectId(offerID) },
    { $set: updateOffer },
    (err, result) => {
      if (err) {
        console.err("Failed to update the record: ", err);
        res.status(500).send("Failed to update the record");
        return;
      }
      res.send("Record updated succesfully");
    }
  );
};

export { postOffer, getOffer, getOffers, getOffersByUserID, updateOffer };
