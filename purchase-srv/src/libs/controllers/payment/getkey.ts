
import { Request,Response } from "express"

export const get_Key_controller = ()=>{
    const getkey =  async (req:Request,res:Response) =>{
         const key = process.env.RAZORPAY_KEYID
          res.send(key).status(200);
    }   
return getkey
}