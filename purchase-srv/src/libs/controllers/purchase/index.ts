import getPurchseHistoryUser from "./getAllPurchaseHistoryController";
import getpurchaseHistoryTutor  from "./getAllpurchaseHistoryBuyTutorIdControllr"



export default (dependencies:any)=>{
   return{
    getpurchseHistoryUser:getPurchseHistoryUser(dependencies),
    getpurchaseHistoryTutor:getpurchaseHistoryTutor(dependencies)
   } 
}