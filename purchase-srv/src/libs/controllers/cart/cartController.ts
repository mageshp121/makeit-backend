import { Request, Response } from "express";

export default (dependencies: any) => {
  const {
    useCase: { Cart_usecase },
  } = dependencies;
  const Cartcontroler = async (req: Request, res: Response) => {
    const cartRes = await Cart_usecase(dependencies).exicutefunction(req.body);
    res.send(cartRes).status(200);
  };

  return Cartcontroler;
};
