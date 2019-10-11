import express from "express";
import routes from "../routes";
import {
    home,
    upload,
    videoDetail,
    editVideo,
    deleteVideo
} from "../controllers/videoController";

const videoRouter = express.Router();

// Upload Video Router
videoRouter.get(routes.upload, upload);

// Video Detail Router
videoRouter.get(routes.videoDetail(), videoDetail);

// Edit Video Router
videoRouter.get(routes.editVideo, editVideo);

// Delete Video Router
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;