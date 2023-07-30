import { NotFoundError } from "@makeitcmn/comon";


export const Cart_usecase =(dependencies:any)=>{
    const {
        repository: { cartRepository },
      } = dependencies;
      if (!cartRepository) throw new NotFoundError()
      const exicutefunction =async(data:any)=>{
            const cartRes = await cartRepository.cart(data);
            return cartRes 

      }
      return {
        exicutefunction
      }
}