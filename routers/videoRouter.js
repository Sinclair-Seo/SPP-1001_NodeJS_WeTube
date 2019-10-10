import express from "express";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get("/", (req, res) => res.send("Video Home"));
videoRouter.get(routes.upload, (req, res) => res.send("Upload Video"));
videoRouter.get(routes.videoDetail, (req, res) => res.send("Video Detail"));
videoRouter.get(routes.editVideo, (req, res) => res.send("Edit Video"));
videoRouter.get(routes.deleteVideo, (req, res) => res.send("Delete Video"));

export default videoRouter;