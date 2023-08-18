import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import { purchaseController,purchaseCourseController } from '../../libs/controllers'
import { jwtauthentication } from '@makeitcmn/comon'




export default (dependencies:any)=>{


    const secret:any = {
        refreshToken : process.env.REFRESH_JWT_SECRETEKEY,
        accessToken : process.env.ACCESS_JWT_SECRETEKEY
        
    }
    const router =  express.Router();
    // purchase controller
    const { getpurchseHistoryUser,getpurchaseHistoryTutor} = purchaseController(dependencies);
    const { getPurchasedcourse_controler } = purchaseCourseController(dependencies)



    // get methods
    router.get("/user/purchase/get/:userid",getpurchseHistoryUser);
    router.get("/tutor/purchase/get/:tutorid",getpurchaseHistoryTutor);
    router.get("/user/purchase/get/course/:id",getPurchasedcourse_controler)
    return router
}