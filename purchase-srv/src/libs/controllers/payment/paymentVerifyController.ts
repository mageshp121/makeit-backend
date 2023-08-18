import { Request,Response } from "express"

export default (dependencies:any)=>{
    const { useCase: {verifyPayment_usecase }} = dependencies;
    const payMentVerifyController = async(req:Request,res:Response)=>{
        const { exicutefunction } =  verifyPayment_usecase(dependencies);
        const authorizationHeader:any = req.headers.authorization
        const token = authorizationHeader.split(' ')[1];
        const verifyRes = await exicutefunction(req.body,token);
        console.log(verifyRes,'verifyRes');
        if(verifyRes.paymentSuccess){
            res.send(verifyRes).status(200)
        }else{
            res.send(verifyRes).status(404)
        }
        
    }
       
       return payMentVerifyController  
}