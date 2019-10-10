import express from "express";
import routes from "../routes";
import {
    joinController,
    loginController,
    logoutController
} from "../controllers/userController";
import {
    homeController,
    searchController
} from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get(routes.home, homeController);
globalRouter.get(routes.join, joinController);
globalRouter.get(routes.login, loginController);
globalRouter.get(routes.logout, logoutController);
globalRouter.get(routes.search, searchController);

export default globalRouter;