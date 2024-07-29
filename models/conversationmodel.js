import mongoose from "mongoose";

const convschema = new mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chatters",
      },
    ],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "messagechats",
        default: [],
      },
    ],
  },
  { timestamps: true }
);

const convmodel = new mongoose.model("Conversation", convschema);
export default convmodel;
