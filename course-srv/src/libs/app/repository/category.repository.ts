import { Types } from "mongoose";
import { category } from "../database/schema/category.schema"


export default {
      addCategory:async(data:any)=>{
           console.log(data,'datattatatat');
           
        const categoryData = {
            category : data.category,
            createdAt: data.createdAt
        }
       const categoryRes = await category.create(categoryData);
       console.log(categoryRes, " <=  categoryRes => ");
       return categoryRes
      },
      editeCategory:async(data:any)=>{
           const categoryRes = await category.updateOne({_id:new Types.ObjectId(data._id)},{
               $set:{ category:data.category}
           })
           console.log(categoryRes, " <= editeCategory => ");
           return categoryRes 
      },
      getAllCategory:async()=>{
         const categoryRes = await category.find({});
         console.log(categoryRes, " <=  getAllCategory => ");
         return categoryRes
      },
     deleteCategory:async(categoryName:string)=>{
        console.log(categoryName,'namememmeme');
        const categoryRes = await category.deleteOne({category:categoryName.toString()});
        console.log(categoryRes, " <=  deleteCategory => ");
        return categoryRes
     },
     getCategoryByName:async(categoryName:string)=>{
        const categoryRes = await category.findOne({category:categoryName});
        console.log(categoryRes, " <=  getCategoryByName => ");
        return categoryRes
     }
}