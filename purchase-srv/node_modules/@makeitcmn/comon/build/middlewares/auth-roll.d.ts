import { Request, Response, NextFunction } from "express";
import { Secret } from "jsonwebtoken";
export declare const tutorAuth: (secretKey: Secret) => (req: Request, _res: Response, next: NextFunction) => void;
export declare const userAuth: (secretKey: Secret) => (req: Request, _res: Response, next: NextFunction) => void;
