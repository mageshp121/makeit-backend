import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import { CartControllers } from '../../libs/controllers'
import multer from 'multer'
import { jwtauthentication } from '@makeitcmn/comon'
// import publishCourse_controlers from '../../libs/controllers/course/publishCourse_controlers'
const storage = multer.memoryStorage();
const upload = multer({storage:storage});



export default (dependencies:any)=>{


    const secret:any = {
        refreshToken : process.env.REFRESH_JWT_SECRETEKEY,
        accessToken : process.env.ACCESS_JWT_SECRETEKEY
        
    }
    const router =  express.Router();
    // cart contrpller
    const {  cartController,removeProductId,getItem } = CartControllers(dependencies);
  

    // post methodes
    router.post("/cart",jwtauthentication(secret),cartController);


    // patch methodes
    router.patch("/cart/remove",jwtauthentication(secret),removeProductId);

    // get methodes
    router.get("/cart/get/:id",getItem)
 

    return router
}