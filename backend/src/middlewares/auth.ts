import mongoose from "mongoose";
import { Request, Response } from "express";
import User from "../models/user.model";
const jwt = require("jsonwebtoken");

export const verifyToken = async (req: Request, res: Response, next: any) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res
      .status(401)
      .json({ sucess: false, message: "UnAthorized Access." });
  }
  const rawToken = token.split(" ")[1];
  try {
    const decoded: any = jwt.verify(rawToken, process.env.SECRETE);

    const user = await User.findOne({ _id: decoded.userId });

    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "UnAthorized Access" });
    }
    req.user = user;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ sucess: false, message: "UnAthorized Access" });
  }
};

export default verifyToken;
