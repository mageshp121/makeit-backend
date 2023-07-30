import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import { CartControllers } from '../../libs/controllers'
// import multer from 'multer'
import { jwtauthentication } from '@makeitcmn/comon'
// import publishCourse_controlers from '../../libs/controllers/course/publishCourse_controlers'
// const storage = multer.memoryStorage();
// const upload = multer({storage:storage});



export default (dependencies:any)=>{


    const secret:any = {
        refreshToken : process.env.REFRESH_JWT_SECRETEKEY,
        accessToken : process.env.ACCESS_JWT_SECRETEKEY
        
    }
    const router =  express.Router();
    // Course contrpller
    const {  cartController  } = CartControllers(dependencies);
    // lesson controller
    router.post("/cart",cartController);
 

    return router
}