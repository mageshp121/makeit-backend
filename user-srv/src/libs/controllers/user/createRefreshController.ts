import { NotFoundError, dataNoFoundError } from "@makeitcmn/comon";
import { Request,Response } from "express"


export default (dependencies:any)=>{
    const createRefresh = async (req:Request,res:Response)=>{
        console.log("calling create Refershshshshhs");
        const token: string | undefined = req.headers["authorization"]?.split(" ")[1];
        console.log(token ,"<= createRefresh =>");
        console.log(token ,'controkerrrrrr');
        if(!token) throw new NotFoundError() 
        const {useCase: { CreateRefresh_usecase },} = dependencies;
        const { exicutefunction } = await  CreateRefresh_usecase(dependencies);
        if(!exicutefunction) throw new NotFoundError();
        const newRefreshToken = await exicutefunction(token);
        if(!newRefreshToken){
            throw new NotFoundError()
        }else{
            res.send(newRefreshToken).status(200)
        } 
    }

    return createRefresh
}