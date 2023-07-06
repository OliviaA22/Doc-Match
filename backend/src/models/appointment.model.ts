import * as mongoose from "mongoose";
import { type } from "os";
import { z } from "zod";
import DoctorService from "../services/doctors";
import appointmentRouter from "../routes/appointments";


const Schema = mongoose.Schema;

export const AppointmentDTO = z.object({
  date: z.date(),
});


export type IAppointment = z.infer<typeof AppointmentDTO>;

const AppointmentSchema = new Schema({

  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true,
  },
  patientName: {
    type: String,
    required: true,
  },
  appointmentDate: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Appointment = mongoose.model<IAppointment>("Appointment", AppointmentSchema);

export default Appointment;

