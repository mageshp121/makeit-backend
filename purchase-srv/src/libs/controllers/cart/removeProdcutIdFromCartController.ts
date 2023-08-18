import { Request, Response } from "express";
export default (dependencies: any) => {
  const removeProductFomcart = async (req: Request, res: Response) => {
    const {
      useCase: { removeProductFromCart_usecase },
    } = dependencies;
    const cartRes = await removeProductFromCart_usecase(
      dependencies
    ).exicutefunction(req.body);
    if (
      cartRes.acknowledged &&
      cartRes.modifiedCount === 1 &&
      cartRes.matchedCount === 1
    ) {
      res.send({ updated: true }).status(200);
    } else {
      res.send({ updated: false }).status(400);
    }
  };
  return removeProductFomcart;
};
