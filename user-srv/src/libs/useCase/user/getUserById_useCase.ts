import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { bucketName,s3 } from "../../utils/AWSs3/s3";

export const getUserBy_Id_useCase = (dependecies:any) =>{
          const {repository :{ userRepository }} = dependecies;
          if(!userRepository) throw new Error("repo error")
        const executefunction=async(id:string)=>{
                const userById = await userRepository.getUserById(id);
                console.log(userById,'user object');
                if(userById != null){
                  if( typeof userById.profileImage === "string" && userById.profileImage.length > 0){
                     const getObjectParams = {
                        Bucket:  bucketName,
                        Key:userById.profileImage,
                      };
                      const command = new GetObjectCommand(getObjectParams);
                      const url = await getSignedUrl(s3, command, { expiresIn: 3600 });
                      userById.s3ImageUrl = url
                      return userById
                  }else{
                       return userById
                  }
                }
               
        }
   return {
      executefunction
   }
}