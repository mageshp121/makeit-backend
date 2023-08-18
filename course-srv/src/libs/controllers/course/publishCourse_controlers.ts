import { BadRequestError, NotFoundError } from "@makeitcmn/comon";
import { Request, Response } from "express";

export default (dependencies: any) => {
  const Publishcourse = async (req: Request, res: Response) => {
    const id = req.params.id;
    if (!id) throw new BadRequestError("someting went wrong");
    const {
      useCase: { publishCourse_usecase },
    } = dependencies;
    const { exicutefunction } = await publishCourse_usecase(dependencies);
    if (!exicutefunction)
      throw new BadRequestError("someting went wrong okkkkkk ");
    const courseRes = await exicutefunction(id);
    res.send(courseRes).status(200);
  };
  return Publishcourse;
};
