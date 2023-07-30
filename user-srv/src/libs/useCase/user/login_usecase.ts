import env from 'dotenv';
import { creatAccessToken,createRefrecshToken} from '../../utils/jwt/jwt';
import { bucketName, s3 } from '../../utils/AWSs3/s3';
import { GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
env.config()
console.log(process.env.JWT_SECRETEKEY);
export const loginUser_usecase=(dependencies:any)=>{
    const {repository:{userRepository}}=dependencies
    if(!userRepository)throw new Error("no UseRepository found");
    const exicutefunction=async(email:string,password:string)=>{
        // getting data from the db using email
        const userdata = await userRepository.getUserByEmail(email);
        const noUserexist = !userdata
        if(noUserexist) return { Message:[{error:"user is not exist please register "}] }
        // removing paasword and s3image url s3image name
        const { password:passwordDiscarded, profileImage:profileImageDiscarded, s3ImageUrl:s3ImageUrlDiscarded,...userWithoutsensitive } = userdata.toObject();
        const { password: _, ...userWithoutPassword } = userdata.toObject();
        if( typeof userWithoutPassword.profileImage === "string" && userWithoutPassword.profileImage.length > 0){
            const getObjectParams = {
               Bucket:  bucketName,
               Key:userWithoutPassword.profileImage,
             };
             const command = new GetObjectCommand(getObjectParams);
             const url = await getSignedUrl(s3, command, { expiresIn: 3600 });
             userWithoutPassword.s3ImageUrl = url
            }
        //createing jwt access and refresh token 
        const accesToken = creatAccessToken(userWithoutsensitive,process.env.ACCESS_JWT_SECRETEKEY!,process.env.ACCESS_EXPIRY!) 
        const reFreshToken = createRefrecshToken(userWithoutsensitive,process.env.REFRESH_JWT_SECRETEKEY!,process.env.REFRESH_EXPIRY!);
        return {
            userWithoutPassword,
            accesToken,
            reFreshToken
        }
    }
    return {
        exicutefunction
    }
}