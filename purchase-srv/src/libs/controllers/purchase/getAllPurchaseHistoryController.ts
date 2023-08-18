import { NotFoundError } from "@makeitcmn/comon";
import { Request,Response } from "express"


export default (dependencies:any)=>{
    const { useCase: { getPurhcaseHistoryByUserId_useCase }} = dependencies;
     const getAllPurchaseHistoryController =  async (req:Request,res:Response) =>{
            const userId = req.params.userid;
            if(!userId) throw new NotFoundError()
            const  { exicutefunction } = getPurhcaseHistoryByUserId_useCase(dependencies);
            const purchaseRes = await  exicutefunction(userId);
            console.log(purchaseRes,'purchase Res at controler');
            res.send(purchaseRes).status(200)
     }

    return getAllPurchaseHistoryController

}