import mongoose from "mongoose";

const userschema = mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female"],
    },
    profilepic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const usermodel = mongoose.model("Chatters", userschema);
export default usermodel;
