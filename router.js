import express from "express";

export const userRouter = express.Router();

userRouter.get("/", (req, res) => res.send("User Home"));
userRouter.get("/edit", (req, res) => res.send("User Edit"));
userRouter.get("/Password", (req, res) => res.send("User Password"));
