import mongoose from "mongoose";

const TagSchema = new mongoose.Schema(
  {
    tagValue: {
      type: String,
      required: true,
    },
    offerID: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Tags", TagSchema);
