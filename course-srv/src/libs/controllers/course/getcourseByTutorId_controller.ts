import { Request, Response } from "express";

export default (dependencies: any) => {
  const getCourseByTutorId = async (req: Request, res: Response) => {
    const tutorId = req.params;
    const {
      useCase: { getCourseByTutorId_usecase },
    } = dependencies;
    const { exicutefunction } = await getCourseByTutorId_usecase(dependencies);
    const response = await exicutefunction(tutorId.id);
    if (response) {
      res.send(response);
    } else {
      res.send("error occured or no such data");
    }
  };
  return getCourseByTutorId;
};
