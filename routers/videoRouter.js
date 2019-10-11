import express from "express";
import routes from "../routes";
import {
    videoDetail,
    editVideo,
    deleteVideo,
    getUpload,
    postUpload
} from "../controllers/videoController";

const videoRouter = express.Router();

// Upload Video Router
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, postUpload);

// Video Detail Router
videoRouter.get(routes.videoDetail(), videoDetail);

// Edit Video Router
videoRouter.get(routes.editVideo, editVideo);

// Delete Video Router
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;