import { BadRequestError } from "@makeitcmn/comon";
import { categoryEntity } from "../../enities/category";

export const createCategory_useCase = async (dependencies:any) =>{
    const {
        repository: { categoryRepository },
      } = dependencies;
      if(!categoryRepository) throw new BadRequestError("something went wrong");
      const exicutefunction = async (data:any)=>{
        console.log("enterd into exicute");
        
       const  isCategoryExist = await categoryRepository.getCategoryByName(data.category);
       console.log(isCategoryExist,'hsjdhadhjdhjka');
       
       if(isCategoryExist){
            return  { categoryPresent:true }
       }
       const categoryData = new categoryEntity(data);
        console.log(categoryData);
        const  categoryRes = await categoryRepository.addCategory(categoryData)
        return categoryRes
      }
      return { exicutefunction}
}