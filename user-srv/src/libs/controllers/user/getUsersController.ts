import { Request, Response } from "express";

export default (dependencies: any) => {
  const {
    useCase:{ getAllUser_useCase }} = dependencies;
  const getAllUsers = async (req: Request, res: Response) => {
    const tokensdd = req.session
    console.log(tokensdd,'gahdgsadhdsghjdggdhsadgsadsgjgjhsghsghsghdgshgdaghjasdgshdga');
    if(req.cookies.refreshToken){
      console.log(req.cookies.refreshToken);
      console.log('refersh tokenn yes');
    }else{
      console.log('access tokenn no');
    }
   
    try {
      const useData = await getAllUser_useCase(dependencies).executefunction();
      if (!useData) res.json({ staus: false });
      res.status(200).json(useData);
    } catch (error: any) {
      res.json(error);
    }
  };
  return getAllUsers;
};
