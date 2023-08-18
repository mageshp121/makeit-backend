import { BadRequestError, dataNoFoundError } from "@makeitcmn/comon";

export const publishCourse_usecase = (dependencies: any) => {
  const {
    repository: { courseRepository },
  } = dependencies;
  if (!courseRepository) throw new BadRequestError("Inter error");
  const exicutefunction = async (id: string) => {
    const courseRes = await courseRepository.publishCourseCourseById(id);
    if (!courseRes) throw new dataNoFoundError();
    return courseRes;
  };
  return {
    exicutefunction,
  };
};
