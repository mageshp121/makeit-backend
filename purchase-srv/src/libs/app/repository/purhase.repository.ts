import mongoose, { Types } from "mongoose";
import Schema from "../dataBase/index";


export default {
    createOrdrHistoryTrasaction: async (OrderData:any,tutorOrderData:any) => {
        console.log(OrderData,'ordedata');
        const session = await mongoose.startSession()
        const courseOrder = {
            orderId:OrderData.orderId,
            userId:OrderData.userId,
            courseDetails:OrderData. courseDetails,
            totalemount:OrderData.totalemount,
            paymentGateway:OrderData.paymentGateway,
            date:new Date(),
            status:OrderData.status 
        };
        try {
            session.startTransaction();
            console.log("transaction started");
            const orderResRes = await Schema.order.create([courseOrder],{session});
            const tutororderRes = await Schema.tutoOrderHistory.insertMany(tutorOrderData,{session})
            await session.commitTransaction();
            console.log(orderResRes, " courseRes");
            console.log(tutororderRes, "tutororderRes ");
            return {checkoutSuccess:true};
        } catch (error) {
            await session.abortTransaction();
        }
      },
    updateorderTransaction:async(data:any,userId:string)=>{
        console.log(userId,' updateorderTransaction userID');
        const session = await mongoose.startSession()
        try {
            session.startTransaction();
            await Schema.order.updateOne({orderId:data.orderId},{status:data.status},{session});
            await Schema.tutoOrderHistory.updateMany({orderId:data.orderId},{status:data.status},{session});
            // Removing all course _id's from cart
            const res  =  await Schema.cart.updateOne({userId:userId},{$set:{cartProductId:[]}},{session});
            console.log(res,"ressssssssss");
            await session.commitTransaction();
            return { 
                paymentSuccess:true
             }
        } catch (error) {
            await session.abortTransaction();
            return {
                paymentSuccess: false
            }
        }

    }

};
