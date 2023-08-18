export const editeCategory_usecase = async (dependencies: any) => {
  const {
    repository: { categoryRepository },
  } = dependencies;

  const exicutefunction = async (editeDetails: any) => {
    const updatedCategoryRes = await categoryRepository.editeCategory(
      editeDetails
    );
    if (
      updatedCategoryRes.matchedCount === 1 &&
      updatedCategoryRes.modifiedCount === 1 &&
      updatedCategoryRes.acknowledged
    ) {
      return { udpdate: true };
    } else {
      return { update: false };
    }
  };

  return { exicutefunction };
};
