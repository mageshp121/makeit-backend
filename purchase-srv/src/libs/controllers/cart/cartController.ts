import { Request,Response } from "express"


export default (dependencies:any)=>{
    const { useCase: {  Cart_usecase},} = dependencies;
    const Cartcontroler =(req:Request,res:Response)=>{
        const cartRes = Cart_usecase(dependencies).exicutefunction(req.body)
        console.log(cartRes,'cartRessssssssssss');
        res.send(cartRes).status(200)
    }

    return Cartcontroler

}