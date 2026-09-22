import { Request, Response, NextFunction, RequestHandler } from "express";

/**
 * Wraps an async Express route handler so any rejected promise is
 * forwarded to next(), letting the central error handler deal with it
 * instead of every controller needing its own try/catch block.
 */
export const asyncHandler =
  (fn: (req: Request, res: Response, next: NextFunction) => Promise<unknown>): RequestHandler =>
  (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
