import { Request, Response, NextFunction } from "express";

/**
 * Middleware performs the validation checks and rejects or forwards the request.
 */
export const validate = (schema: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    // the req object is passed in so it because available during validation runtime
    try {
      const result = await schema.safeParseAsync(req.body);

      if (!result.success) {
        return res.status(400).json({ error: result.error.issues }).end();
      }

      req["sanitizedData"] = result.data;
      return next();
    } catch (error) {
      res.status(400).json("Unexpected failure.").end();
    }
  };
};
