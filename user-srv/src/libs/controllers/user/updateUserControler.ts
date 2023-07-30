import { Request, Response } from "express";

export default (dependencies: any) => {
  const updateUser = async (req: Request, res: Response) => {
    console.log(req.body,'bodyy data');
    
    const data = {
      body: req.body,
      file: req.file,
    };
    console.log(data,'dattttatata at update user');
    
    const {
      useCase: { updateUser_usecase },
    } = dependencies;
    const { executefunction } = await updateUser_usecase(dependencies);
    const updateRes = await executefunction(data);
    res.send(updateRes).status(200);
  };
  return updateUser;
};
