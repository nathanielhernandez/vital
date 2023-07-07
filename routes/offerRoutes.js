import express from "express";
const router = express.Router();

import {
  postOffer,
  getOffer,
  getOffers,
  getOffersByUserID,
  updateOffer,
} from "../controllers/offerController.js";

router.route("/postoffer").post(postOffer);
router.route("/getoffers").get(getOffers);
router.route("/:id").get(getOffer);
router.route("/getoffersbyuser/:userid").get(getOffersByUserID);
router.route("/updateoffer/:id").put(updateOffer);

export default router;
