import * as mongoose from "mongoose";
import { type } from "os";
import { z } from "zod";

const Schema = mongoose.Schema;

export const AppointmentDTO = z.object({
  date: z.date(),
});


export type IAppoint = z.infer<typeof AppointmentDTO>;

const AppointmentSchema = new Schema({
  date: {
    type: Date,
    required: true,
  }
});

const Appointment = mongoose.model<IAppoint>("Appointment", AppointmentSchema);

export default Appointment;
