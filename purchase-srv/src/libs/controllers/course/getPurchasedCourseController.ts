
import { Request,Response } from "express"

export default (dependencies:any)=>{
    const getpurchasedCourse =  async (req:Request,res:Response) =>{
          const userId = req.params.id;
          console.log(userId,"params ID");
          if(!userId) throw new Error("Something went wrong")
          const { useCase: { getPurchasedcourses_useCase},} = dependencies;
          const { exicutefunction } = getPurchasedcourses_useCase(dependencies);
          const purchaseCourseRes =   await exicutefunction(userId)
          console.log(purchaseCourseRes,'resss');
          res.send(purchaseCourseRes).status(200);
    }   
return  getpurchasedCourse
}