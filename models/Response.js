import mongoose from "mongoose";

const ResponseSchema = new mongoose.Schema(
  {
    offerID: {
      type: String,
      required: true,
    },
    responseDetails: {
      type: String,
      required: true,
    },
    userID: {
      type: String,
      required: true,
    },
    businessID: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Response", ResponseSchema);
