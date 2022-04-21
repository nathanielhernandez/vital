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

const getTag = async (req, res) => {};

const getTagsByOfferID = async (req, res) => {
  const { offerID } = req.params;
  const tags = await Tag.find({ offerID: offerID });
  res.send(tags);
};

const getTopTags = async (req, res) => {
  let result = Tag.find({}).sort({ createdAt: "desc" });
  result = result.limit(10);
  const tags = await result;

  res.status(StatusCodes.OK).json({ tags });
};

export { postTag, getTagsByOfferID, getTopTags };
