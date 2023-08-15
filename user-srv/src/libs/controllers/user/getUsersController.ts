import { BadRequestError } from "@makeitcmn/comon";
import { Request, Response } from "express";

export default (dependencies: any) => {
  const {
    useCase:{ getAllUser_useCase }} = dependencies;
  const getAllUsers = async (req: Request, res: Response) => {
    try {
      const useData = await getAllUser_useCase(dependencies).executefunction();
      if (!useData) res.json({ staus: false });

         res.status(200).send(useData);
    } catch (error: any) {
      throw new BadRequestError("Something went wrong");
    }
  };
  return getAllUsers;
};
