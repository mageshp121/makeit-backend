import { Request, Response } from "express";

export default (dependecies: any) => {
  const getAllLessoneByCourseId = async (req: Request, res: Response) => {
    const courseId = req.params.id;
    const {
      useCase: { getLessoneByCourseId_UseCase },
    } = dependecies;
    const { exicutefuncation } = await getLessoneByCourseId_UseCase(
      dependecies
    );
    const lessonRes = await exicutefuncation(courseId);
    if (lessonRes) {
      res.send(lessonRes);
    } else {
      res.send("no lessone found one this course or invalied course id");
    }
  };
  return getAllLessoneByCourseId;
};
