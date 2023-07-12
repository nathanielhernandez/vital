import mongoose from "mongoose";

const ContractSchema = new mongoose.Schema(
  {
    businessID: {
      type: String,
      required: true,
    },
    userID: {
      type: String,
      required: true,
    },
    offerID: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Contract", ContractSchema);
