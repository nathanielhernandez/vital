import express from "express";
const router = express.Router();

import { postTag, getTagsByOfferID } from "../controllers/tagController.js";

router.route("/posttag").post(postTag);
router.route("/gettags/:offerID").get(getTagsByOfferID);

export default router;
