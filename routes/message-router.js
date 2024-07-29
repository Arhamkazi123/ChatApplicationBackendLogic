import express from "express";
import { getmessages, sendmessage } from "../controllers/message-controller.js";
import protectRoute from "../middlewares/protectRoute.js";

const messagerouter = express.Router();

messagerouter.route("/send/:id").post(protectRoute, sendmessage);
messagerouter.route("/:id").get(protectRoute, getmessages);

export { messagerouter };
