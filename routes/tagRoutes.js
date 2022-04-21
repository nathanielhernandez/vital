import express from "express";
const router = express.Router();

import {
  postTag,
  getTagsByOfferID,
  getTopTags,
} from "../controllers/tagController.js";

router.route("/posttag").post(postTag);
router.route("/gettags/:offerID").get(getTagsByOfferID);
router.route("/gettoptags").get(getTopTags);

export default router;
