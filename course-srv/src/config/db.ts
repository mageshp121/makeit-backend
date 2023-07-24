import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
export const dbConnect = async () => {
    try{
        console.log(process.env.MONGO_PASS);
        await mongoose.connect(`mongodb+srv://mageshp121:${process.env.MONGO_PASS}@cluster0.9oqio66.mongodb.net/course-srvs`)
        .then(()=>console.log("DB connected"))
        .catch((err)=>console.log("db connection error",err))
    }
    catch(err){
        
        throw new Error('mongodb connection error')
    }
}
