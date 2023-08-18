import { Request, Response } from "express";

export default (dependencies: any) => {
  const getAllCategory_controller = async (req: Request, res: Response) => {
    const {
      useCase: { getAllCatogory_useCase },
    } = dependencies;
    const { exicutefunction } = await getAllCatogory_useCase(dependencies);
    const categoryRes = await exicutefunction();
    res.send(categoryRes).status(200);
  };

  return getAllCategory_controller;
};
