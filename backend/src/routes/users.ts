import express, { Application } from "express";

import { verifyToken } from "../middlewares/auth";
import { UserDTO, LoginDTO } from "../models/user.model";
import UserController from "../controllers/users.controllers";
import { validate } from "../middlewares/validation";

const userRouter = express.Router();
/**
 * @openapi
 * '/users':
 *  post:
 *     tags:
 *     - User
 *     summary: Create new user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/schemas/UserModel'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/schemas/UserModel'
 *      400:
 *        description: Bad request
 */
userRouter.post("/register", validate(UserDTO), UserController.create);

/**
 * @openapi
 * '/users':
 *  post:
 *     tags:
 *     - User
 *     summary: login new user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/schemas/UserModel'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/schemas/UserModel'
 *      400:
 *        description: Bad request
 */
userRouter.post("/login", validate(LoginDTO), UserController.login);

export default userRouter;
