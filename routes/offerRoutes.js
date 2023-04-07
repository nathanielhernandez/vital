import express from "express";
const router = express.Router();

import {
  postOffer,
  getOffer,
  getOffers,
  getOffersByUserID,
} from "../controllers/offerController.js";

router.route("/postoffer").post(postOffer);
router.route("/getoffers").get(getOffers);
router.route("/:id").get(getOffer);
router.route("/getoffersbyuser").get(getOffersByUserID);

export default router;
