import { Request, Response } from "express";

export default (dependdecies:any)=>{
    const logOut =async(req:Request,res:Response)=>{
        const token = req.cookies.accessToken
        console.log(token,'token');
        
            try{
                res.clearCookie('accessToken');
                res.clearCookie('refreshToken');
                res.status(200).send("logedOut");
            } catch(err){
                res.send(err)
            }
    };

    return logOut
}