import mongoose from "mongoose";



const orderSchema = new mongoose.Schema({
   orderId:String,
   userId:String,
   courseDetails: [
      {
        courseId: String,
        coursePrice: Number,
        tutorId:String
      }
    ],
   totalemount:Number,
   paymentGateway:String,
   date:Date,
   status:String
},{
    versionKey:false
})
const order = mongoose.model("orders",orderSchema)
console.log(order,'mongoose course');
export {
   order
}
const orderFortutorSchema = new mongoose.Schema({
    userId:String,
    tutorId:String,
    orderId:String,
    courseId:String,
    coursePrice:String,
    totalemount:Number,
    paymentGateway:String,
    date:Date,
    status:String
},{
    versionKey:false
})
const tutoOrderHistory = mongoose.model("tutorOrderHistories",orderFortutorSchema)
console.log(tutoOrderHistory,'mongoose course');
export {
   tutoOrderHistory
}
