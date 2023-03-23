import express from "express";
const router = express.Router();

import {
  getResponseByOfferID,
  postResponse,
} from "../controllers/responseController.js";

router.route("/postresponse").post(postResponse);
router.route("/getresponses/:offerID").get(getResponseByOfferID);

export default router;
