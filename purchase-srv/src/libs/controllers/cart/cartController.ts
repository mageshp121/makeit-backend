import { Request,Response } from "express"


export default (dependencies:any)=>{
    const { useCase: { Cart_usecase},} = dependencies;
  
    console.log(Cart_usecase,'klkl');
    
    const Cartcontroler = async(req:Request,res:Response)=>{
        console.log(req.body,'bofyyyyy');
        const cartRes = await Cart_usecase(dependencies).exicutefunction(req.body)
        res.send(cartRes).status(200); 
       
    }

    return Cartcontroler

}