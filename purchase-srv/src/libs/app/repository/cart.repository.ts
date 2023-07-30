import { Types } from "mongoose";
import Schama from "../dataBase/index";
const { cart } = Schama;

export default {
  cart: async (data: any) => {
    const cartData = {
           userId:data._id,
           cartProductId:[data.productId]
    }
    console.log(cartData, "cartData");
    const cartDataRes = await cart.create(cartData);
    console.log(cartDataRes, " courseRes");
    return cartDataRes;
  },
};
