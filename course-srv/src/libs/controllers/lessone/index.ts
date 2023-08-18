import createLessone_controller from "./createLessone_controller";
import getAll_lessoneBycourseId from "./getLessoneBycourseId_controller";

export default (dependencies: any) => {
  return {
    createLessone_controller: createLessone_controller(dependencies),
    getLessoneBycourseId_controller: getAll_lessoneBycourseId(dependencies),
  };
};
