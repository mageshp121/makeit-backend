import { Request, Response } from "express";

export default (dependencies: any) => {
  const {
    useCase: { createCategory_useCase },
  } = dependencies;
  const createCatgory_controller = async (req: Request, res: Response) => {
    const { exicutefunction } = await createCategory_useCase(dependencies);
    const categoryRes = await exicutefunction(req.body);
    res.send(categoryRes).status(200);
  };
  return createCatgory_controller;
};
