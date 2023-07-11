import * as mongoose from "mongoose";
import Appointment, { IAppointment } from "../models/appointment.model";

class AppointmentService {
  async create(data: IAppointment) {
    const appointment = await Appointment.create({
      ...data,
    });
    return appointment;
  }

  async getAll() {
    const appointments = await Appointment.find();
    return appointments;
  }

  async getById(id: string) {
    const appointment = await Appointment.findById(id);
    return appointment;
  }

  async update(id: string, data: IAppointment) {
    const updatedAppointment = await Appointment.findByIdAndUpdate(id, data, {
      new: true,
    });
    return updatedAppointment;
  }

  async delete(id: string) {
    const deletedAppointment = await Appointment.deleteOne({ _id: id });
    return deletedAppointment;
  }
}

export default AppointmentService;