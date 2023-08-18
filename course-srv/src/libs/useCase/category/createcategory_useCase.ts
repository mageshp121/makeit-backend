import { BadRequestError } from "@makeitcmn/comon";
import { categoryEntity } from "../../enities/category";

export const createCategory_useCase = async (dependencies: any) => {
  const {
    repository: { categoryRepository },
  } = dependencies;
  if (!categoryRepository) throw new BadRequestError("something went wrong");
  const exicutefunction = async (data: any) => {
    const isCategoryExist = await categoryRepository.getCategoryByName(
      data.category
    );
    if (isCategoryExist) {
      return { categoryPresent: true };
    }
    const categoryData = new categoryEntity(data);
    const categoryRes = await categoryRepository.addCategory(categoryData);
    return categoryRes;
  };
  return { exicutefunction };
};
