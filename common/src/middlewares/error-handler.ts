import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/custom-error';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(err);
  if (err instanceof CustomError) {
    console.log(err);
    return res.status(err.statusCode).json({ errors: err.serializeErrors() });
  }
  res.status(400).send({
    errors: [{ message: 'Something went wrong' }]
  });
};
