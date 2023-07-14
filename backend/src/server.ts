import express, { Application } from "express";
import http from "http";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import connectToDb from "./db";
import routes from "./routes";

const app = express();

class ExpressServer {
  constructor() {
    app.use(
      (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
      ): void => {
        bodyParser.json({ limit: "100kb" })(req, res, next);
      }
    );
    app.use(
      bodyParser.urlencoded({
        extended: true,
        limit: process.env.REQUEST_LIMIT || "100kb",
      })
    );

    app.use(cors());
  }

  router(routes: (router: Application) => void): ExpressServer {
    app.enable("case sensitive routing");
    app.enable("strict routing");
    // number of proxies/LB between the user and the server.
    // Used by express-rate-limit to read the real client ip via request.ip and not the LB ip address
    app.set("trust proxy", 1);

    routes(app);
    app.use(
      (
        err: any,
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
      ) => {
        return res
          .status(err.status || 500)
          .json({ message: err.message, success: false });
      }
    );
    return this;
  }

  listen(p: number): Application {
    const welcome = (port: number) => () =>
      console.log(
        `up and running in ${
          process.env.NODE_ENV || "development"
        } on port: ${port}}`
      );
    connectToDb().then(() => {
      http.createServer(app).listen(p, welcome(p));
    });

    return app;
  }
}

export default new ExpressServer().router(routes).listen(5000);

declare module "express-serve-static-core" {
  interface Request {
    user: any;
    sanitizedData: any;
  }
}
