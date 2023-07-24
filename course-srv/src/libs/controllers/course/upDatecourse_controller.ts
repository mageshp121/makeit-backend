import { BadRequestError } from "@makeitcmn/comon"
import { Request,Response } from "express"

export default (dependencies:any)=>{
    const courseBasic = async (req:Request,res:Response)=>{
        const data = {
            body:req.body,
            file:req.file
            }
          const { useCase: { updateCourse_usecase } } = dependencies;
          const { exicutefunction} = await updateCourse_usecase(dependencies);
          const courseRes = await exicutefunction(data);
          if(!courseRes) throw new BadRequestError("somthing went wrong");
          return courseRes
 
    }
  return courseBasic
}