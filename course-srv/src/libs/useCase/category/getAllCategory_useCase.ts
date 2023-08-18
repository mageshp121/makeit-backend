import { BadRequestError } from "@makeitcmn/comon";

export const getAllCatogory_useCase = async (dependencies: any) => {
  const {
    repository: { categoryRepository },
  } = dependencies;
  if (!categoryRepository) throw new BadRequestError("something went wrong");
  const exicutefunction = async () => {
    const categoryRes = await categoryRepository.getAllCategory();
    return categoryRes;
  };
  return { exicutefunction };
};
