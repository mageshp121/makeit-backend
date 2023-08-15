
import Schema from "../dataBase/index"


export default {
  cart: async (data: any) => {
    const cartData = {
           userId:data.userId,
           cartProductId:[data.cartProductId]
    }
    const cartDataRes = await Schema.cart.create(cartData);
    return cartDataRes;
  },
  getFromCart:async (id:string) =>{
       const CartRes = await  Schema.cart.findOne({userId:id});
       return CartRes
 },
  removeProductIdFromCart: async (data:any)=>{     
     const cartRes = await  Schema.cart.updateOne({userId:data.userId},{
      $pull:{cartProductId:data.cartProductId}
     },
     { new: true }
     )
     return cartRes
},
  updateCart: async ({userId,cartProductId}:any)=>{
    const cartRes = await  Schema.cart.updateOne({userId:userId},{
        $push:{cartProductId:cartProductId}
    },{
    new:true
    })
    return cartRes
},

};
