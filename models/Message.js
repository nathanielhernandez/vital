const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  contractID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  conetnet: {
    type: String,
    required: true,
  },
  timestampe: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Message", messageSchema);
