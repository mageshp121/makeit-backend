import { Request, Response } from "express";

export default (dependencies: any) => {
  const edietCategory_controller = async (req: Request, res: Response) => {
    const {
      useCase: { editeCategory_usecase },
    } = dependencies;
    const { exicutefunction } = await editeCategory_usecase(dependencies);
    const categoryRes = await exicutefunction(req.body);
    res.send(categoryRes).status(200);
  };
  return edietCategory_controller;
};
