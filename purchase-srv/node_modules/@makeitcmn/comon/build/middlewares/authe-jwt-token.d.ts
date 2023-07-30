import { Request, Response, NextFunction } from "express";
interface secretKey {
    refreshToken: string;
    accessToken: string;
}
export declare const jwtauthentication: (secretKey: secretKey) => (req: Request, res: Response, next: NextFunction) => void;
export {};
