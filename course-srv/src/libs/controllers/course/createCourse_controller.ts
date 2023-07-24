import { Request,Response } from "express";



export default (dependecies:any)=>{
    const createCourse=async (req:Request,res:Response)=>{
        console.log(dependecies,'dependecies');
        const data = {
            body:req.body,
            file:req.file
        }
        console.log(data,'dat object');
        const { useCase: { createCourse_useCase },} = dependecies;
        const {exicutefunction} = await createCourse_useCase(dependecies);
        const courseRes = await exicutefunction(data);
        if(courseRes){        
            res.send(courseRes);
        }else{
            res.send("error occured");
        }
    }

    return createCourse
}