import mongoose from "mongoose";

const OfferSchema = new mongoose.Schema(
  {
    businessID: {
      type: String,
      required: true,
    },
    offerTitle: {
      type: String,
      required: true,
    },
    reward: {
      type: String,
      required: true,
    },
    offerDetails: {
      type: String,
      minlength: 200,
      maxlength: 13000,
      required: true,
    },
    allowedContracts: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Offer", OfferSchema);
