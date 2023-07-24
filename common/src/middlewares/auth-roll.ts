import express, { Request, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";
import jwt,{ Secret, VerifyErrors} from "jsonwebtoken";
import { NotAuthorizedError } from "../errors/not-authorized-error";
const app = express();
app.use(cookieParser());

// middleware used to authenticate tutor
export const tutorAuth = (secretKey:Secret) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    const refershToken: string = req.cookies.refreshToken;
    console.log(refershToken,"<= refresh token in tutorauth middleware =>");
    
    if (refershToken) {
      jwt.verify(
        refershToken,
         secretKey,
        (err:VerifyErrors | null, payload:any) => {
          if (err) {
            throw new NotAuthorizedError();
          } else {
            console.log(payload,'<= payload tutor roll =>');
            if ( payload && payload.roll === "tutor") {
              console.log(payload,'<= payload tutor inside if roll =>');
              next();
            } else {
              throw new NotAuthorizedError();
            }
          }
        }
      );
    }else{
      console.log("No token error tutor auth");
      throw new NotAuthorizedError()
    }
  };
};




// middleware used to authenticate user
export const userAuth = (secretKey: Secret) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    const refershToken: string = req.cookies.refreshToken;
    console.log(refershToken,"<= refresh token in userauth middleware =>");
    if (refershToken) {
      jwt.verify(
        refershToken,
        secretKey,
        (err: VerifyErrors | null , payload:any) => {
          if (err) {
            throw new NotAuthorizedError();
          } else {
            console.log(payload,'<= payload userAuth roll =>');
            if ( payload && payload.roll === "user") {
              console.log(payload,'<= payload userAuth inside if roll =>');
              next();
            } else {
              throw new NotAuthorizedError();
            }
          }
        }
      );
    }else{
      console.log("No token error userauth");
      throw new NotAuthorizedError()
    }
  };
};
