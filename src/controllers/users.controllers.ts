import { Request, Response } from "express";
import axios from "axios";
import dotenv from "dotenv";
import UserService from "../services/user";

dotenv.config();
const config = process.env;


class UserController {
  async create(req: Request, res: Response, next: any) {
    try {
      const service = new UserService();

      // Extract address details from the request
      const { postcode, street, city, state, country } = req.body.address;

      // Create the address string
      const addressString = `${postcode}, ${street}, ${city},  ${state}, ${country}`;

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

      const user = await service.create(req.sanitizedData);
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }

  async login(req: Request, res: Response, next: any) {
    try {
      const service = new UserService();
      const user = await service.login(req.sanitizedData);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController();
