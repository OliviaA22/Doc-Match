import * as mongoose from "mongoose";
import { type } from "os";
import { number, z } from "zod";

const Schema = mongoose.Schema;

export const DoctorDTO = z.object({
  _id: z.string().optional(),
  title: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  address: z.object({
    street: z.string(),
    city: z.string(),
    postcode: z.number(),
    state: z.string(),
    country: z.string(),
  }),
  language: z.array(z.string()).min(1),
  specialisation: z.array(z.string()).min(1),
});

export type IDoctor = z.infer<typeof DoctorDTO>;

const doctorSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  specialisation: {
    type: [String],
    required: true,
  },
  address: {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    postcode: {
      type: Number,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    location: {
      type: {
        type: String,
        enum: ["Point"], // Restrict to 'Point' type
        required: true,
      },
      coordinates: {
        type: [Number],
        index: "2dsphere",
        required: true,
      },
    },
  },
  language: {
    type: [String],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

doctorSchema.index({"address.location": "2dsphere"})
const Doctor = mongoose.model<IDoctor>("Doctor", doctorSchema);

export default Doctor;
