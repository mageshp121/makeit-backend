import { Request, Response } from "express";
// import { attachRefresTokenToCookie } from "../../utils/jwt/jwt";


/**
* @desc User Sign up
* @route POST /auth/signup/
* @access public
*
* @body 
* {
*   "email": "user@gmail.com",
*   "password": "password123"
* }
*/


export default (depentencies: any) => {
  const register = async (req: Request, res: Response) => {
    console.log(req.body,'request body coming successfully');
    const data ={
          ...req.body,
          profileImage:null,
          s3ImageUrl:null
    }
    try {
      const {useCase: { createUser_useCase },} = depentencies;
      const { exicutefunction } = await createUser_useCase(depentencies);
      const response = await exicutefunction(data);
      console.log(response,'response jkjk');
      if(response.Message){
        console.log('error coming');
        res.send(response)
      }else{
       const  { userData,accesToken,reFreshToken } = response
        console.log(req.session,'okoooko');
        res.status(200).send({userData,accesToken,reFreshToken});
      }
    } catch (error) {
      console.log(error);
      res.status(400).send({ mesage: error });
    }
  };
  return register;
};
