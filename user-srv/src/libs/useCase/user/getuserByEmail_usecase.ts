
import { dataNoFoundError } from "@makeitcmn/comon";
import { creatAccessToken,createRefrecshToken } from "../../utils/jwt/jwt";


export const getUserByEmail_useCase =(dependencies:any)=>{
    const {repository:{userRepository}}=dependencies;
   const executefunction = async (email:string)=>{
         const userObject  = await userRepository.getUserByEmail(email);
         if(userObject){
            const accesToken = creatAccessToken(userObject,process.env.ACCESS_JWT_SECRETEKEY!,process.env.ACCESS_EXPIRY!);
            const reFreshToken = createRefrecshToken(userObject,process.env.REFRESH_JWT_SECRETEKEY!,process.env.REFRESH_EXPIRY!);
            return {
               userObject,
               accesToken,
               reFreshToken
            } 
         }else{
            throw new dataNoFoundError()
         }
   }
   return {
      executefunction
   }
}