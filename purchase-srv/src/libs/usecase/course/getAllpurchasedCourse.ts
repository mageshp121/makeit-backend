import { BadRequestError } from "@makeitcmn/comon";
import { extractAllcourseIds } from "../../utils/mongo";

export const getPurchasedcourses_useCase = (dependencies:any) =>{
    const {
        repository: { purchaseRespository },
      } = dependencies;
 const exicutefunction = async (UserId:string)=>{
    console.log(UserId,"userId");
    
    const purchaseResbyuserId = await purchaseRespository.getAllpurchaseHistoryByUserId(UserId);
     if(!purchaseResbyuserId) throw new Error("somehting went Wrong");
      const courseIds = extractAllcourseIds(purchaseResbyuserId);
      if(!courseIds) throw new Error("Somehting went Wrong");
      const purchasedCourse = await purchaseRespository. getAllPurchaedCourses(courseIds);
      return purchasedCourse

}
return {exicutefunction}

}