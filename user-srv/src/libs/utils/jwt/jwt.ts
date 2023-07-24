import jwt from 'jsonwebtoken'
import { Response } from 'express';

export const creatAccessToken  =  (
  user: Object,
  AccessTokenscretkey:string,
  Expiration:string
) => {
  console.log('enter into create access');
  console.log(user,'all credentials');
   const token = jwt.sign({ user }, AccessTokenscretkey, { expiresIn: Expiration });
  console.log(token,'access token');
  return token
};

export const createRefrecshToken = (
  user: Object,
  RefreshTokenscretkey: string,
  Expiration: string
) => {
  console.log('enter into create refresh');
  return jwt.sign({ user }, RefreshTokenscretkey, { expiresIn: Expiration });
};

export const clearRefreshTokenFromCookie = (cookieName:string,res:Response)=>{
  console.log('attachAccesTokenToCookie - not http only ','development');
    res.cookie(cookieName,{
      httpOnly:false,
      secure:false,
      signed:false,
      maxAge:0
    })
}