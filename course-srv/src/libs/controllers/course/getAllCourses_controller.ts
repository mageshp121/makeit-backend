import { Request, Response } from "express";

export default (dependencies: any) => {
  const getAllCoureses_controller = async (req: Request, res: Response) => {
    const {
      useCase: { getAllCourses_useCase },
    } = dependencies;
    if (!getAllCourses_useCase) console.log("have no Usecase");
    const { exicutefunction } = await getAllCourses_useCase(dependencies);
    const courses = await exicutefunction();
    if (!courses.length) res.send("no courses add yet");
    res.send(courses);
  };

  return getAllCoureses_controller;
};
