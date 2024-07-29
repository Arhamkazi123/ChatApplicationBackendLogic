import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    sid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chatters",
      required: true,
    },
    rid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chatters",
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const messagemodel = new mongoose.model("messagechats", messageSchema);
export default messagemodel;
