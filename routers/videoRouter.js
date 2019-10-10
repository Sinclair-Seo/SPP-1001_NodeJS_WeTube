import express from "express";
import routes from "../routes";
import {
    videoHomeController,
    uploadController,
    videoDetailController,
    editVideoController,
    deleteVideoController
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.home, videoHomeController);
videoRouter.get(routes.upload, uploadController);
videoRouter.get(routes.videoDetail, videoDetailController);
videoRouter.get(routes.editVideo, editVideoController);
videoRouter.get(routes.deleteVideo, deleteVideoController);

export default videoRouter;