

export const removeProductFromCart_usecase = (dependencies:any) =>{
    const {repository: { cartRepository },} = dependencies;
    const exicutefunction = async (data:any) =>{
        console.log(data,'dtatatatataa');
          const cartRes = await cartRepository.removeProductIdFromCart(data);
          return cartRes
    }
   return {
    exicutefunction
   }
}