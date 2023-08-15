import { Request, Response } from "express";

export default (dependencies:any) => {
  const getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    console.log(req.params);
    const {useCase: { getUserBy_Id_useCase }} = dependencies;
    const userData = await getUserBy_Id_useCase(dependencies).executefunction(id);
    if (!userData)return res.status(401).json({ status: false });
    return res.status(200).json(userData);
    
  };
  return getUserById;
};