import env from 'dotenv';
import { creatAccessToken,createRefrecshToken} from '../../utils/jwt/jwt';
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
        // removing paasword from userdata
        const { password: _, ...userWithoutPassword } = userdata.toObject();
        //createing jwt access and refresh token 
        const accesToken = creatAccessToken(userWithoutPassword,process.env.ACCESS_JWT_SECRETEKEY!,process.env.ACCESS_EXPIRY!) 
        const reFreshToken = createRefrecshToken(userWithoutPassword,process.env.REFRESH_JWT_SECRETEKEY!,process.env.REFRESH_EXPIRY!);
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