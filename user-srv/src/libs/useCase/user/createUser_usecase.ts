import { userData, userProfile } from "../../entities";
import bcrypt from 'bcrypt';
import { creatAccessToken,createRefrecshToken } from "../../utils/jwt/jwt";


export const createUser_useCase = async (dependdecies: any) => {
  const {repository: { userRepository },} = dependdecies;
  if (!userRepository)console.log("have no repository");
   const exicutefunction = async ({firstName,lastName,email,phone,roll,password,profileImage,s3ImageUrl}: userData) => {
    const userExist = await userRepository.getUserByEmail(email);
    if (!userExist) {
      // Hashing password
       const salt  = await bcrypt.genSalt(Number(process.env.SALT));
       const hashPassword = await bcrypt.hash(password,salt);
       // Creating new entity
      let user:object =  new userProfile({firstName,lastName,email,phone,password:hashPassword,roll,isOtPVerified:false,profileImage:"",s3ImageUrl:""});
      console.log(user,'usersssss');
      
      // creating new user using this enitity
     const userData =  await userRepository.createUser(user);
     // creating acces and refersh token
     const accesToken = creatAccessToken(userData,process.env.ACCESS_JWT_SECRETEKEY!,process.env.ACCESS_EXPIRY!);
     const reFreshToken = createRefrecshToken(userData,process.env.REFRESH_JWT_SECRETEKEY!,process.env.REFRESH_EXPIRY!);
      return{
        userData,
        accesToken,
        reFreshToken
      } 
    } else {
      return { Message:[{error:"user is already exist. Please login "}] }
    }
  }; 
  return { exicutefunction }
};
