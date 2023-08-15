import crypto from "crypto"
import dotenv from "dotenv";
import { getPayloadformToken } from "../../utils/JwtPayload/getPayload";
dotenv.config();


export const verifyPayment_usecase=(dependencies:any)=>{
    const {
        repository: { purchaseRespository },
      } = dependencies;
      const exicutefunction = async (data:any,token:string)=>{
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = data ;
		const sign = razorpay_order_id + "|" + razorpay_payment_id;
		const expectedSign = crypto
			.createHmac("sha256",  process.env.RAZORPAY_SECRET!)
			.update(sign.toString())
			.digest("hex");
		if (razorpay_signature === expectedSign) {
           const  data = {
              orderId:razorpay_order_id,
              status:"success"
           }
         const payload:any = getPayloadformToken(token);
         const response = await purchaseRespository.updateorderTransaction(data,payload.data._id);
		 return	response
        }
      };
   return { exicutefunction } 
}