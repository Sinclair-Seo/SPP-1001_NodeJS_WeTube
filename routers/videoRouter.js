import express from "express";

const videoRouter = express.Router();

videoRouter.get("/", (req, res) => res.send("Video Home"));
videoRouter.get("/upload", (req, res) => res.send("Upload Video"));

export default videoRouter;