import { NotFoundError } from "@makeitcmn/comon";
import { cart, usercart } from "../../enitities/cartEntitty";

export const Cart_usecase =(dependencies:any)=>{
    const {
        repository: { cartRepository },
      } = dependencies;
      if (!cartRepository) throw new NotFoundError()
      const exicutefunction =async(data:any)=>{
            const CartPresent = await cartRepository.getFromCart(data.userId);
            if(CartPresent){
              console.log('cart present');
              
             // checking the product id is present  in the cart or not
             const isProductPresent = CartPresent.cartProductId.includes(data.cartProductId)
             if(isProductPresent && isProductPresent != null ){
               console.log("isProductPresent");
               return {ProductPresent:true}
             }else{
              console.log("is product is not present so adding new one");
              // updating the cart adding new product into the cart
              const updatedCartRes = await cartRepository.updateCart(data);
              console.log(updatedCartRes,'updatedcartRes');
              if(updatedCartRes.matchedCount ===1 && updatedCartRes.modifiedCount===1 && updatedCartRes.acknowledged){
                return {updated:true}
              }else{
                return {updated:false}
              }
             }
            }else{
              console.log("cart is not presnet so creatin new one");
              // creating new cart
              const cartentity = new usercart({...data})
              const cartRes = await cartRepository.cart(cartentity);
               if(cartRes._id){
                return {created:true}
               }else{
                return { creted:false }
               }
              
            }
      }
      return {
        exicutefunction
      }
}