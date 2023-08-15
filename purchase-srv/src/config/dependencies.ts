import {  cartRepository,purchaseRespository } from '../libs/app/repository/index'
import { Cart_usecase,removeProductFromCart_usecase,getCartItems,checkout_Usecase,verifyPayment_usecase } from '../libs/usecase';

const useCase:any = {
      Cart_usecase,
      removeProductFromCart_usecase,
      getCartItems,
      checkout_Usecase,
      verifyPayment_usecase
};
const repository:any={cartRepository,purchaseRespository}
export default {repository,useCase }