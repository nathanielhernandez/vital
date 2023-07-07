import express from "express";
const router = express.Router();

import {
  getResponseByOfferID,
  postResponse,
  updateResponse,
} from "../controllers/responseController.js";

router.route("/postresponse").post(postResponse);
router.route("/getresponses/:offerID").get(getResponseByOfferID);
router.route("/updateresponse/:id").patch(updateResponse);

export default router;
