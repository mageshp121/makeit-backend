import { BadRequestError } from "@makeitcmn/comon";



export const updateCourse_usecase = async (dependencies:any)=>{
const {repository: { courseRepository },} = dependencies;
if(!courseRepository) throw new BadRequestError("something went wrong");
const exicutefunction  =async(data:any) =>{
      if(data.files){
           console.log("when file is present");
      }
      const courseRes = await courseRepository(data.data);
      if(!courseRes) throw new BadRequestError("something went wrong");
      return courseRes
}
return {
    exicutefunction
}
}