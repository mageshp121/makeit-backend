import {
  BadRequestError,
  NotAuthorizedError,
  NotFoundError,
  dataNoFoundError,
} from "@makeitcmn/comon";
import jwt, { Secret } from "jsonwebtoken";
import env from "dotenv";
import { creatAccessToken, createRefrecshToken } from "../../utils/jwt/jwt";
env.config();



export const CreateRefresh_usecase = (dependencies: any) => {
  const secret = process.env.REFRESH_JWT_SECRETEKEY!;
  const Accsss = process.env.ACCESS_JWT_SECRETEKEY!;
  if (!secret) throw new NotFoundError()
  const {
    repository: { userRepository },
  } = dependencies;
  if (!userRepository) throw new NotFoundError()
  const exicutefunction = async (token: string) => {
    let payload: any;
    jwt.verify(token, secret, (err: any, decode: any) => {
      if (err) {
        console.log(err);
        throw new NotAuthorizedError();;
      } else {
        console.log(decode,'decode');
        payload = decode;
      }
    });
    if (!payload) throw new dataNoFoundError();
    const user = await userRepository.getUserById(payload.user._id);
    if (!user) throw new dataNoFoundError();
    const reFreshtoken = creatAccessToken(payload,Accsss,"30s");
    console.log(reFreshtoken,'tokekekekekekekekeke');
    return reFreshtoken;
  };
  return {
    exicutefunction,
  };
};
