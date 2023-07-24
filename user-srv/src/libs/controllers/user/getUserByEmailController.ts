import { Request, Response } from "express";
import { NotFoundError } from "@makeitcmn/comon";
// import { attachRefresTokenToCookie } from "../../utils/jwt/jwt";

export default (dependencies: any) => {
  const getUserByEamil = async (req: Request, res: Response) => {
    let email;
    const queryData = req.query.email;
    if (typeof queryData === "string") {
      email = decodeURIComponent(queryData);
    }
    if (!email) throw new NotFoundError();
    const {useCase: { getUserByEmail_useCase },} = dependencies;
    const { executefunction } = await getUserByEmail_useCase(dependencies);
    if (!executefunction) throw new NotFoundError();
    const { userObject, accesToken, reFreshToken } = await executefunction(email);
   
    if (userObject) {
      res.send({ userObject, accesToken,reFreshToken}).status(200);
    } else {
      throw new Error("Something went wrong");
    }
  };
  return getUserByEamil;
};
