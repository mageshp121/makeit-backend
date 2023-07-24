import { Request,Response } from "express";
// import { attachRefresTokenToCookie } from "../../utils/jwt/jwt";
import { BadRequestError } from "@makeitcmn/comon";
export default ( depentencies:any )=>{
    const login = async (req:Request,res:Response) => {
        try{
            const { useCase:{loginUser_usecase}} = depentencies
            const { email,password} = req.body;
                const response = await loginUser_usecase(depentencies).exicutefunction(email,password);
                if(response.Message){
                    res.send(response)
                }else{
                    const  { userWithoutPassword,accesToken,reFreshToken } = response
                   
                    res.status(200).send({userWithoutPassword,accesToken,reFreshToken});
                }
        }catch(error){
            const message = "something went wrong" 
          throw new BadRequestError(message)
        }
    }
    return login

}  