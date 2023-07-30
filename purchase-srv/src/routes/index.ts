import express from "express";
import cartRoutes from './cart/cart.routes'

export const routes  =(dependencies:any)=>{
    const routes = express.Router()
    routes.use('/purchase',cartRoutes(dependencies));
    return routes
}

