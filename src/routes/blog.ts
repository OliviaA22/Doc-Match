import express from "express";
import blogControllers from "../controllers/blog.controllers";
import { verifyToken } from "../middlewares/auth";
import { isUserOwnerGuard } from "../middlewares/permissionGuard";
import { validate } from "../middlewares/validation";
import { BlogDTO } from "../models/blog.model";

const blogPostRouter = express.Router();

/**
 * @openapi
 * '/blog':
 *  post:
 *     tags:
 *     - User
 *     summary: Create a new blog post
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/schemas/BlogPostModel'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/schemas/BlogPostModel'
 *      400:
 *        description: Bad request
 */
blogPostRouter.post(
  "/",
  verifyToken,
  validate(BlogDTO),
  blogControllers.create
);

/**
 * @openapi
 * '/blog':
 *  get:
 *     tags:
 *     - User
 *     summary: get a all blog post
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/schemas/BlogPostModel'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/schemas/BlogPostModel'
 *      400:
 *        description: Bad request
 */
blogPostRouter.get("/", blogControllers.get);

/**
 * @openapi
 * '/blog':
 *  getblog by id:
 *     tags:
 *     - User
 *     summary: get a all blog post
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/schemas/BlogPostModel'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/schemas/BlogPostModel'
 *      400:
 *        description: Bad request
 */
blogPostRouter.get("/:id", blogControllers.getById);

/**
 * @openapi
 * '/blog':
 *  update by id:
 *     tags:
 *     - User
 *     summary: get a all blog post
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/schemas/BlogPostModel'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/schemas/BlogPostModel'
 *      400:
 *        description: Bad request
 */
blogPostRouter.patch(
  "/:id",
  verifyToken,
  isUserOwnerGuard,
  blogControllers.updateBlogById
);

/**
 * @openapi
 * '/blog':
 *  delete blog by id:
 *     tags:
 *     - User
 *     summary: get a all blog post
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/schemas/BlogPostModel'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/schemas/BlogPostModel'
 *      400:
 *        description: Bad request
 */
blogPostRouter.delete(
  "/:id",
  verifyToken,
  isUserOwnerGuard,
  blogControllers.delete
);

export default blogPostRouter;
