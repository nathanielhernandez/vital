import mongoose from "mongoose";

const OfferSchema = new mongoose.Schema(
  {
    businessID: {
      type: String,
      required: true,
    },
    offerDetails: {
      type: String,
      minlength: 200,
      maxlength: 13000,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Offer", OfferSchema);
