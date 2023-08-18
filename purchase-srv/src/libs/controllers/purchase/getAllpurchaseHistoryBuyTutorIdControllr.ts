import { NotFoundError } from "@makeitcmn/comon";
import { Request,Response } from "express"


export default (dependencies:any)=>{
    const { useCase: { getPurhcaseHistoryByTutor_useCase  }} = dependencies;
     const getAllPurchaseHistoryControllerTutor =  async (req:Request,res:Response) =>{
            const tuTorId = req.params.tutorid;
            if(!tuTorId) throw new NotFoundError()
            const  { exicutefunction } = getPurhcaseHistoryByTutor_useCase (dependencies);
            const purchaseRes = await  exicutefunction(tuTorId);
            console.log(purchaseRes,'purchase Res at controler');
            res.send(purchaseRes).status(200)
     }

    return getAllPurchaseHistoryControllerTutor

}