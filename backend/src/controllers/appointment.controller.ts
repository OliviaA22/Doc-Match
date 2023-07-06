import { Request, Response } from "express";
import AppointmentService from "../services/appointments";

class AppointmentController {
  /**
   * Create a new appointment
   * @param req The http request
   * @param res The http response
   * @returns
   */
  async create(req: Request, res: Response, next: any) {
    try {
      const service = new AppointmentService();
      const appointment = await service.create(req.body);
      res.status(201).json(appointment);
    } catch (error) {
      next(error);
    }
  }

  
  /**
   * Get all appointments
   * @param req The http request
   * @param res The http response
   * @returns
   */
  async get(req: Request, res: Response, next: any) {
    try {
      const service = new AppointmentService();
      const appointments = await service.getAll();
      res.status(200).json(appointments);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Get appointment by id
   * @param req The http request
   * @param res The http response
   * @returns
   */
  async getById(req: Request, res: Response, next: any) {
    try {
      const service = new AppointmentService();
      const appointment = await service.getById(req.params.id);
      res.status(200).json(appointment);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Update appointment by id
   * @param req The http request
   * @param res The http response
   * @returns
   */
  async updateAppointmentById(req: Request, res: Response, next: any) {
    try {
      const service = new AppointmentService();
      const appointment = await service.update(req.params.id, req.body);
      res.status(200).json(appointment);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Delete appointment by id
   * @param req The http request
   * @param res The http response
   * @returns
   */
  async delete(req: Request, res: Response, next: any) {
    try {
      const service = new AppointmentService();
      const appointment = await service.delete(req.params.id);
      res.status(200).json(appointment);
    } catch (error) {
      next(error);
    }
  }
}

export default new AppointmentController();
