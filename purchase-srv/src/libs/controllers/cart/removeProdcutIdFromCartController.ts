import { Request,Response } from "express"



export default (dependencies:any)=>{
       const removeProductFomcart = async (req:Request,res:Response)=>{
        console.log(req.body,'agfdsgafghfghfdasg');
        const { useCase: { removeProductFromCart_usecase },} = dependencies;
        console.log(removeProductFromCart_usecase,'jkk');
              const cartRes = await removeProductFromCart_usecase(dependencies).exicutefunction(req.body);
              console.log(cartRes,'remove api cart rest');
              console.log(cartRes);
              if(cartRes.acknowledged && cartRes.modifiedCount === 1 && cartRes.matchedCount ===1 ){
                res.send({updated:true}).status(200)
              } else{
                res.send({updated:false}).status(400)
              }
       }
   return removeProductFomcart
}