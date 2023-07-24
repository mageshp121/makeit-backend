import mongoose from "mongoose";

const usrSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    phone:Number,
    password:String,
    roll:String,
    otpVerify:Boolean
},{
    versionKey:false
})
const user = mongoose.model("users",usrSchema)
console.log(user,'mongoose user');
export {
    user
}