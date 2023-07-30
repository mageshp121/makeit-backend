
import { dataNoFoundError } from "@makeitcmn/comon";
import { creatAccessToken,createRefrecshToken } from "../../utils/jwt/jwt";
import { bucketName, s3 } from "../../utils/AWSs3/s3";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";


export const getUserByEmail_useCase =(dependencies:any)=>{
    const {repository:{userRepository}}=dependencies;
   const executefunction = async (email:string)=>{
         const userObject  = await userRepository.getUserByEmail(email);
         if(userObject){
            if( typeof userObject.profileImage === "string" && userObject.profileImage.length > 0){
               const getObjectParams = {
                  Bucket:  bucketName,
                  Key:userObject.profileImage,
                };
                const command = new GetObjectCommand(getObjectParams);
                const url = await getSignedUrl(s3, command, { expiresIn: 3600 });
                userObject.s3ImageUrl = url
               }
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