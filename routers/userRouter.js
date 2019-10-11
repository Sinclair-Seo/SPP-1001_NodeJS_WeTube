import express from "express";
import routes from "../routes";
import {
    userDetail,
    editProfile,
    changePassword
} from "../controllers/userController";

const userRouter = express.Router();

// Edit User Profile Router
userRouter.get(routes.editProfile, editProfile);

// Change Password Router
userRouter.get(routes.changePassword, changePassword);

// User Detail Router
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;