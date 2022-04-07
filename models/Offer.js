import mongoose from "mongoose";

const OfferSchema = new mongoose.Schema(
  {
    businessName: {
      type: String,
      required: true,
    },
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
    tagsID: {
      type: String,
    },
    shareableLink: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Offer", OfferSchema);
