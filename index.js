import express from "express";
import "./config.js";
import cors from "cors";
import { connectdb } from "./config/db.js";
import { authrouter } from "./routes/auth-router.js";
import { messagerouter } from "./routes/message-router.js";
import { userrouter } from "./routes/getuser-router.js";
import cookieParser from "cookie-parser";
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authrouter);
app.use("/api/messages", messagerouter);
app.use("/api/userservices", userrouter);

connectdb().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running ");
  });
});
