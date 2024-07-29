import mongoose from "mongoose";
import messagemodel from "../models/messagemodel.js";
import convmodel from "../models/conversationmodel.js";

const sendmessage = async (req, res) => {
  const { message } = req.body;
  const { id: rid } = req.params;
  const sid = req.user._id;

  try {
    let conversation = await convmodel.findOne({
      participants: { $all: [sid, rid] },
    });

    if (!conversation) {
      conversation = await convmodel.create({
        participants: [sid, rid],
      });
    }

    const newMessage = new messagemodel({
      sid,
      rid,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(201).json(newMessage);
  } catch (error) {
    console.error("Error in sendmessage:", error);
    return res
      .status(500)
      .json({ message: "An error occurred during message sending" });
  }
};

const getmessages = async (req, res) => {
  const { id: rid } = req.params;
  const sid = req.user._id;
  try {
    let conversation = await convmodel
      .findOne({
        participants: { $all: [sid, rid] },
      })
      .populate("messages");

    if (!conversation) {
      return res.status(200).json([]);
    }

    const messagemila = conversation.messages;

    res.status(200).json(messagemila);
  } catch (error) {
    console.log(error.message);
  }
};

export { sendmessage, getmessages };
