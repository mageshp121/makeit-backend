import { Request,Response } from "express" 



export default (dependencies:any)=>{
  const { useCase: {createCategory_useCase }} = dependencies;
  const createCatgory_controller = async (req:Request,res:Response)=>{
    console.log(req.body,'<= Request body =>');
    console.log(createCategory_useCase,'uses');
        const {exicutefunction} = await createCategory_useCase(dependencies);
        const categoryRes = await exicutefunction(req.body)
        console.log(categoryRes, "<=  categoryRes createCatgory_controller =>");
        res.send(categoryRes).status(200)
        
  }
 return createCatgory_controller
}