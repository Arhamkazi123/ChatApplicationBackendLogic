import express from "express";
import { fetchallusers } from "../controllers/user-controller.js";
import protectRoute from "../middlewares/protectRoute.js";

const userrouter = express.Router();

userrouter.route("/fetchallusers").get(protectRoute, fetchallusers);

export { userrouter };
