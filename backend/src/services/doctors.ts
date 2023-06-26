import * as mongoose from "mongoose";
import Doctor, { IDoctor } from "../models/doctor.model";

class DoctorService {
  async create(data: IDoctor) {
    const doctor = await Doctor.create({
      ...data,
    });
    return doctor;
  }

  async get(limit = 20, skip = 0) {
    const doctor = await Doctor.find()
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip);
    return doctor;
  }

  async getById(id: string) {
    const doctor = await Doctor.findById(id);
    return doctor;
  }

  async update(id: string, data: IDoctor) {
    const updatedDocotor = await Doctor.findByIdAndUpdate(id, data, {
      new: true,
    });
    return updatedDocotor;
  }

  async delete(id: string) {
    const deletedDoctor = await Doctor.deleteOne({ _id: id });
    return deletedDoctor;
  }
}

export default DoctorService;
