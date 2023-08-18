import { Request, Response } from "express";

export default (dependecies: any) => {
  const createLessone_Controler = async (req: Request, res: Response) => {
    const data = {
      body: req.body,
      file: req.file,
    };
    const {
      useCase: { create_Lessone_useCase },
    } = dependecies;
    const { exicutefunction } = await create_Lessone_useCase(dependecies);
    const lessoneRes = await exicutefunction(data);
    if (lessoneRes) {
      res.send(lessoneRes);
    } else {
      res.send("error occured");
    }
  };
  return createLessone_Controler;
};
