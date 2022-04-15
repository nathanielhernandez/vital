import Tag from "../models/Tag.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/index.js";

const postTag = async (req, res) => {
  const { tagValue, offerID } = req.body;

  if (!tagValue || !offerID) {
    throw new BadRequestError("Please provide all values");
  }

  const tag = await Tag.create({
    tagValue,
    offerID,
  });

  res.status(StatusCodes.CREATED).json({
    tagValue: tag.tagValue,
    offerID: tag.offerID,
  });
};

const getTag = (req, res) => {};

const getTagsByOfferID = async (req, res) => {
  const { offerID } = req.params;
  const tags = await Tag.find({ offerID: offerID });
  res.send(tags);
};

export { postTag, getTagsByOfferID };
