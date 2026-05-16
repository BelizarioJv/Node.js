import { HttpError } from "../errors/HttpError.js";

export const errorMiddleware = (error, req, res, next) => {
  if (error) {
    if (error instanceof HttpError) {
      res.status(error.status).json({ message: error.message });
    } else {
      res.status(500).json({ message: error.message });
    }
  } else {
    next();
  }
};
