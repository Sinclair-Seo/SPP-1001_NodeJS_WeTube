import express from "express";

const userRouter = express.Router();

userRouter.get("/", (req, res) => res.send("User Home"));
userRouter.get("/profile", (req, res) => res.send("User Profile"));

export default userRouter;