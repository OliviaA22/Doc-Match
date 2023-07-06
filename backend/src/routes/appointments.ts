import express from "express";
import appointmentController from "../controllers/appointment.controller";
import { validate } from "../middlewares/validation";
import { AppointmentDTO } from "../models/appointment.model";

const appointmentRouter = express.Router();

/**
 * @openapi
 * '/appointment':
 *  post:
 *     tags:
 *     - Appointment
 *     summary: Create a new appointment
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/schemas/AppointmentModel'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/schemas/AppointmentModel'
 *      400:
 *        description: Bad request
 */
appointmentRouter.post(
  "/",
  validate(AppointmentDTO),
  appointmentController.create
);

/**
 * @openapi
 * '/appointment':
 *  get:
 *     tags:
 *     - Appointment
 *     summary: Get all appointments
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/schemas/AppointmentModel'
 *      400:
 *        description: Bad request
 */
appointmentRouter.get("/", appointmentController.get);

/**
 * @openapi
 * '/appointment/{id}':
 *  get:
 *     tags:
 *     - Appointment
 *     summary: Get an appointment by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/schemas/AppointmentModel'
 *      400:
 *        description: Bad request
 */
appointmentRouter.get("/:id", appointmentController.getById);

/**
 * @openapi
 * '/appointment/{id}':
 *  patch:
 *     tags:
 *     - Appointment
 *     summary: Update an appointment by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/schemas/AppointmentModel'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/schemas/AppointmentModel'
 *      400:
 *        description: Bad request
 */
appointmentRouter.patch("/:id", appointmentController.updateAppointmentById);

/**
 * @openapi
 * '/appointment/{id}':
 *  delete:
 *     tags:
 *     - Appointment
 *     summary: Delete an appointment by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/schemas/AppointmentModel'
 *      400:
 *        description: Bad request
 */
appointmentRouter.delete("/:id", appointmentController.delete);

export default appointmentRouter;
