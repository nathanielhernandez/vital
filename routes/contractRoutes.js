import express from "express";
const router = express.Router();

import {
  postContract,
  getContract,
  getContractsByOffer,
  getContractsByUser,
  updateContract,
} from "../controllers/contractController.js";

router.route("/postcontract").post(postContract);
router.route("/getcontract/:id").get(getContract);
router.route("/getcontractsbyoffer/:offerID").get(getContractsByOffer);
router.route("/getcontractsbyuser/:userID").get(getContractsByUser);
router.route("/updatecontract/:id").patch(updateContract);

export default router;
