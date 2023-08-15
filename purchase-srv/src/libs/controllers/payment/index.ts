import checkController from "./checkController";
import { get_Key_controller } from "./getkey";
import paymentVerifyController from "./paymentVerifyController";


export default (dependencies:any)=>{
   return{
    checkout_controler:checkController(dependencies),
    get_Key:get_Key_controller(),
    paymentVarify_controller:paymentVerifyController(dependencies)
   } 

}