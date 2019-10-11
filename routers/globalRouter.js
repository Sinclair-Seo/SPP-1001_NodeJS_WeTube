import express from "express";
import routes from "../routes";
import {
    getJoin,
    postJoin,
    getLogin,
    postLogin,
    logout
} from "../controllers/userController";
import { home, search } from "../controllers/videoController";

const globalRouter = express.Router();

// Home Router
globalRouter.get(routes.home, home);

// Join Router
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

// Login Router
globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

// Log out Router
globalRouter.get(routes.logout, logout);

// Search Router
globalRouter.get(routes.search, search);

export default globalRouter;