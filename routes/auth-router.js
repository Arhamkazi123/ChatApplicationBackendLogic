import express from "express";
import { register, login, logout } from "../controllers/auth-controller.js";

const authrouter = express.Router();

authrouter.route("/register").post(register);
authrouter.route("/login").post(login);
authrouter.route("/logout").post(logout);

export { authrouter };
