import express from "express";
import blogControllers from "../controllers/blog.controllers";
import doctorController from "../controllers/doctors.controller";
import { verifyToken } from "../middlewares/auth";
import { isUserOwnerGuard } from "../middlewares/permissionGuard";
import { validate } from "../middlewares/validation";
import { DoctorDTO } from "../models/doctor.model";

const doctorRouter = express.Router();

/**
 * @openapi
 * '/doctor':
 *  post:
 *     tags:
 *     - Doctor
 *     summary: Create a new doctor
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/schemas/DoctorModel'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/schemas/DoctorModel'
 *      400:
 *        description: Bad request
 */
doctorRouter.post(
  "/",
  //   verifyToken,
  validate(DoctorDTO),
  doctorController.create
);

/**
 * @openapi
 * '/doctor':
 *  get:
 *     tags:
 *     - Doctor
 *     summary: get all doctors
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/schemas/DoctorModel'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/schemas/DoctorModel'
 *      400:
 *        description: Bad request
 */
doctorRouter.get("/", doctorController.get);


doctorRouter.get("/search", doctorController.search);

/**
 * @openapi
 * '/doctor':
 *  getdoctor by id:
 *     tags:
 *     - User
 *     summary: get a doctor by id
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/schemas/DoctorModel'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/schemas/DoctorModel'
 *      400:
 *        description: Bad request
 */
doctorRouter.get("/:id", doctorController.getById);

/**
 * @openapi
 * '/doctor':
 *  update by id:
 *     tags:
 *     - User
 *     summary: update a doctor by id
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/schemas/DoctorModel'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/schemas/DoctorModel'
 *      400:
 *        description: Bad request
 */
doctorRouter.patch("/:id", doctorController.updateDoctorById);

/**
 * @openapi
 * '/doctor':
 *  delete a doctor by id:
 *     tags:
 *     - User
 *     summary: delete a doctor by id
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/schemas/DoctorModel'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/schemas/DoctorModel'
 *      400:
 *        description: Bad request
 */
doctorRouter.delete("/:id", doctorController.delete);

export default doctorRouter;
