import {  cartRepository,purchaseRespository } from '../libs/app/repository/index'
import { Cart_usecase,removeProductFromCart_usecase,getCartItems,checkout_Usecase,verifyPayment_usecase,getPurhcaseHistoryByUserId_useCase,getPurhcaseHistoryByTutor_useCase,getPurchasedcourses_useCase } from '../libs/usecase';

const useCase:any = {
      Cart_usecase,
      removeProductFromCart_usecase,
      getCartItems,
      checkout_Usecase,
      verifyPayment_usecase,
      getPurhcaseHistoryByUserId_useCase,
      getPurhcaseHistoryByTutor_useCase,
      getPurchasedcourses_useCase
};
const repository:any={cartRepository,purchaseRespository}
export default {repository,useCase }