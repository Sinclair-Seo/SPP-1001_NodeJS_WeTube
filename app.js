import express from "express";
import logger from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import { userRouter } from "./router";

const app = express();

const handleHome = (req, res) => res.send("Hello from Home");
const handleProfile = (req, res) => res.send("It's a profile page");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(logger("combined"));

app.get("/", handleHome);
app.get("/profile", handleProfile);
app.use("/user", userRouter);

export default app;
