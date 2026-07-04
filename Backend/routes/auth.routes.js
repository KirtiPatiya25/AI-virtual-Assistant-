import express from "express";
import { signUp, login, logout, getCurrentUser } from "../controllers/auth.controller.js";
import isAuth from "../middlewares/isAuth.js";

const authRouter = express.Router();

authRouter.post("/signup", signUp);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.get("/current-user", isAuth, getCurrentUser);

export default authRouter;