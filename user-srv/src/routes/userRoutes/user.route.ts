import express  from "express"
import { profileController } from "../../libs/controllers";
import { RegistrationDataValidation } from "../../libs/utils/validations/formDataValidation";
import { validateRequest } from "@makeitcmn/comon";




export default (dependencies:any)=>{
    const router =  express.Router();
    const {getAllUsersController,getUserById,loginController,RegisterUser,logutControler,getUserByEmail,createRefreshController} = profileController(dependencies)


    // get methodes
    router.get("/Allusers",getAllUsersController);
    router.get('/logout',logutControler);
    router.get("/users/:id",getUserById);
    router.get("/user/email",getUserByEmail);
    router.get('/refresh',createRefreshController);
    
    // post methods
    router.post('/login',loginController);
    router.post('/register',RegistrationDataValidation,validateRequest,RegisterUser);
    return router
} 