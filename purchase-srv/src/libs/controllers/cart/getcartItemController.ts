import { BadRequestError } from "@makeitcmn/comon";
import { Request,Response } from "express"

export default (dependencies:any)=>{
  
    const getItemFromCart = async (req:Request,res:Response)=>{
         const id = req.params.id;
         console.log(id,'idddd');
         
         if(!id)throw new BadRequestError("something went wrong")
         const { useCase: { getCartItems },} = dependencies;
         const cartRes = await getCartItems(dependencies).exicutefunction(id);
         console.log(cartRes,'resss');
         res.send(cartRes).status(200)
    }
    return getItemFromCart
} 