

export const getCartItems=(dependencies:any)=>{
  const {
        repository: { cartRepository },
      } = dependencies;
const exicutefunction = async (_id:string) =>{
        const cartRes = await cartRepository.getFromCart(_id);
        console.log(cartRes,'cartRes');
        return cartRes
}

return {
    exicutefunction
}
}