import { Application, Request, Response } from "express";
import blogPostRouter from "./routes/blog";
import userRouter from "./routes/users";
import doctorRouter from "./routes/doctors";

export default function routes(app: Application): void {
  app.use("/api/v1/user", userRouter);
  app.use("/api/v1/blog", blogPostRouter);
  app.use("/api/v1/doctor", doctorRouter);
}
