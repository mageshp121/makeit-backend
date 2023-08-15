

import express from "express";
import cartRoutes from './cart/cart.routes'
import paymentRoutes from "./payment/payment.routes"; 

export const routes  =(dependencies:any)=>{
    const routes = express.Router()
    routes.use('/purchase',cartRoutes(dependencies));
    routes.use('/payment',paymentRoutes(dependencies))
    return routes
}
