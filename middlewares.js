import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "videos/" });

export const localMiddleWare = (req, res, next) => {
    res.locals.siteName = "Wetube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id: 1
    };
    next();
};

export const uploadVideo = multerVideo.single("videoFile");