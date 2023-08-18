
import { Request,Response } from "express"

export default (dependencies:any)=>{
    const checkOutcontroller =  async (req:Request,res:Response) =>{
          const { useCase: { checkout_Usecase},} = dependencies;
          const { exicutefunction } = await checkout_Usecase(dependencies);
          console.log(req.body,'bodyyyyy');
         const checkOutRes =   await exicutefunction(req.body)
          console.log(checkOutRes,'resss');
          res.send(checkOutRes).status(200);
    }   
return checkOutcontroller
}