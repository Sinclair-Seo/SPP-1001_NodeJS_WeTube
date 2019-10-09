import express from "express";

const globalRouter = express.Router();

globalRouter.get("/", (req, res) => res.send("WeTube Home"));

export default globalRouter;