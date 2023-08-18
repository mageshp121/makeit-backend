import { Request, Response } from "express";

export default (dependencies: any) => {
  const getCourseById = async (req: Request, res: Response) => {
    const courseId = req.params.id;
    const {
      useCase: { getCourseById_Usecase },
    } = dependencies;
    const { exicutefunction } = await getCourseById_Usecase(dependencies);
    const course = await exicutefunction(courseId);
    if (course) {
      res.send(course);
    } else {
      res.send("There is no such course or invalied credentials");
    }
  };

  return getCourseById;
};
