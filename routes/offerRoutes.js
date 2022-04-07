import express from "express";
const router = express.Router();

import {
  postOffer,
  getOffer,
  getOffers,
} from "../controllers/offerController.js";

router.route("/postoffer").post(postOffer);
router.route("/getoffer").get(getOffer);
router.route("/getoffers").get(getOffers);

export default router;
