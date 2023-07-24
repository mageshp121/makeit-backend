import express, { Request, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import { NotAuthorizedError } from "../errors/not-authorized-error";
import { BadRequestError } from "../errors/bad-request-error";

const app = express();
app.use(cookieParser());

interface secretKey {
  refreshToken: string;
  accessToken: string;
}


 // jwt authentication middleware that authenticates users request
export const jwtauthentication = (secretKey: secretKey) => {
  return (req: Request, res: Response, next: NextFunction) => {
    console.log(req.headers['authorization']);
    const token: any = req.headers['authorization']?.split(" ")[1];
    console.log(token,'jwtauthentication acces');
    if (token) {
      jwt.verify(token, secretKey.accessToken, (err: any) => {
        if (err) {
          throw new NotAuthorizedError();
        } else {
          // If everything is okey then callig the next function  
          next();
        }
      });
    } else {
      throw new BadRequestError("Tokens are not present");
    }
  };
};
