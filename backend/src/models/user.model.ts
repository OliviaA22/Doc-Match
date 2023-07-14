import * as mongoose from "mongoose";
import { type } from "os";
import { z } from "zod";

const Schema = mongoose.Schema;

export const UserDTO = z.object({
  firstName: z.string(),
  lastName: z.string(),
  password: z.string(),
  email: z.string().email(),
  address: z.object({
    street: z.string(),
    city: z.string(),
    postcode: z.number(),
    state: z.string(),
    country: z.string(),
  }),
  language: z.array(z.string()).min(1),
});

export const LoginDTO = z.object({
  password: z.string().min(8),
  email: z.string().email(),
});

export type ILogin = z.infer<typeof LoginDTO>;

export type IUser = z.infer<typeof UserDTO>;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
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

const User = mongoose.model<IUser>("User", userSchema);

export default User;
