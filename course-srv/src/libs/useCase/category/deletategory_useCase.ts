import { BadRequestError } from "@makeitcmn/comon";

export const deleteCatogory_useCase = async (dependencies: any) => {
  const {
    repository: { categoryRepository, courseRepository },
  } = dependencies;
  if (!categoryRepository) throw new BadRequestError("something went wrong");
  const exicutefunction = async (CategoryName: string) => {
    const isCourseExistInthisCategory =
      await courseRepository.getCourseByCategory(CategoryName);
    if (isCourseExistInthisCategory.length > 0) {
      return { courseExist: true };
    } else {
      const categoryRes = await categoryRepository.deleteCategory(CategoryName);
      return categoryRes;
    }
  };
  return { exicutefunction };
};
