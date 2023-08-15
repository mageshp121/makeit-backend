import cartController from "./cartController"
import removeProdcutIdFromCartController from "./removeProdcutIdFromCartController"
import getcartItemController from "./getcartItemController"
import { get_Key_controller } from "../payment/getkey"

export default (dependencies:any)=>{

    return {
         cartController:cartController(dependencies),
         removeProductId:removeProdcutIdFromCartController(dependencies),
         getItem:getcartItemController(dependencies),
        
    }  
}