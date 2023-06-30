import { Request, Response } from "express";
import axios from "axios";
import dotenv from "dotenv";
import DoctorService from "../services/doctors";
import userRouter from "../routes/users";


dotenv.config();
const config = process.env;



class DoctorController {
  /**
   * create  a new doctor
   * @param req The http request
   * @param res The http response
   * @returns
   */
  async create(req: Request, res: Response, next: any) {
    try {
      const service = new DoctorService();

      // Extract address details from the request
      const { street, city, state, postcode, country } = req.body.address;

      // Create the address string
      const addressString = `${street}, ${city},  ${state}, ${postcode}, ${country}`;

      const params = {
        access_key: `${process.env.ACCESS_KEY}`,
        query: addressString,
      };

      const geocodingResponse = await axios.get(
        "http://api.positionstack.com/v1/forward",
        { params }
      );

      const lat = geocodingResponse.data.data[0].latitude;
      const lng = geocodingResponse.data.data[0].longitude;

      const coordinates = {
        type: "Point",
        coordinates: [lng, lat], // Note: longitude comes before latitude
      };

      //   Add the coordinates to the request data
      req.sanitizedData.address.location = coordinates;

      const doctor = await service.create(req.sanitizedData);
      res.status(201).json(doctor);
    } catch (error) {
      next(error);
    }
  }

  /**
   * get all doctors
   * @param req The http request
   * @param res The http response
   * @returns
   */
  async get(req: Request, res: Response, next: any) {
    try {
      // let limit: number = 20;
      // let skip: number = 0;
      

      // if (req.query.limit) {
      //   limit = Number(req.query.limit);
      // }
      // if (req.query.skip) {
      //   skip = Number(req.query.limit);
      // }

      const {latitude, longitude, radius} = req.query
      
      //parse the radius value as a number
      const radiusInMeters = parseInt(radius as string)* 1000

      //create a a geoJSON point for the users location
      const userLocation = {
        type: "Point",
        coordinates: [
          parseFloat(longitude as string),
          parseFloat(latitude as string)
        ]
      }

      const service = new DoctorService();
      const doctors = await service.findNearbyDoctors(userLocation, radiusInMeters, );
      res.status(200).json(doctors);
    } catch (error) {
      next(error);
    }
  }

  

  /**
   * get doctor by id
   * @param req The http request
   * @param res The http response
   * @returns
   */
  async getById(req: Request, res: Response, next: any) {
    try {
      const service = new DoctorService();
      const doctor = await service.getById(req.params.id);
      res.status(200).json(doctor);
    } catch (error) {
      next(error);
    }
  }

  /**
   * update doctor by id
   * @param req The http request
   * @param res The http response
   * @returns
   */
  async updateDoctorById(req: Request, res: Response, next: any) {
    try {
      const service = new DoctorService();
      const doctor = await service.update(req.params.id, req.sanitizedData);
      res.status(200).json(doctor);
    } catch (error) {
      next(error);
    }
  }

  /**
   * delete doctor by id
   * @param req The http request
   * @param res The http response
   * @returns
   */
  async delete(req: Request, res: Response, next: any) {
    try {
      const service = new DoctorService();
      const doctor = await service.delete(req.params.id);
      res.status(200).json(doctor);
    } catch (error) {
      next(error);
    }
  }
}

export default new DoctorController();
