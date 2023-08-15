import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import { paymentControlers } from '../../libs/controllers'

import { jwtauthentication } from '@makeitcmn/comon'




export default (dependencies:any)=>{


    const secret:any = {
        refreshToken : process.env.REFRESH_JWT_SECRETEKEY,
        accessToken : process.env.ACCESS_JWT_SECRETEKEY
        
    }
    const router =  express.Router();
    // cart contrpller
    const { checkout_controler,get_Key,paymentVarify_controller } = paymentControlers(dependencies);
    router.get("/getway",get_Key)

    // post methodes
    router.post("/checkout",jwtauthentication(secret),checkout_controler);
    router.post('/verify',jwtauthentication(secret),paymentVarify_controller);


   
 

    return router
}