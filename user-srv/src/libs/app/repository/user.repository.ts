import mongoose,{ObjectId, Types} from 'mongoose'
import { schems } from '../dataBase/mongodb'
const {user} = schems
 
export default {
    
    createUser:async(data:any)=>{

        console.log(data,'alll  lllllll    data');
        const userData = {

            firstName :data.firstName,
            lastName:data.lastName,
            email:data.email,
            phone:data.phone,
            password:data.password,
            roll:data.roll,
            otpVerify:data. isOtPVerified,
            profileImage:data.profileImage,
            s3ImageUrl:data.s3ImageUrl
        }
        console.log(userData,'userdata');
        const User = await user.create(userData)
        console.log(User,'userdata');
        return User
    },

   
    getAllUser:async()=>{
           const allUserdataObject = await user.find({})
           console.log(allUserdataObject,'alluserdataObject');
           return allUserdataObject
    },


    getUserByEmail:async(email:string)=>{
                console.log(email,'email at repository');
                const userObjcet =  await user.findOne({email:email});
                console.log(userObjcet,'userObject');
                return userObjcet
    },
   
    getUserById:async(_id:string)=>{
                console.log('calling this');
                const userObjcet = await user.findById({_id:new Types.ObjectId(_id)});
                console.log(userObjcet,'user obejct');
                return userObjcet
    },
    


    updateUser:async (data:any) =>{
        console.log("calling updateUser");
        const updatedRes = await user.updateMany( { _id: new Types.ObjectId(data._id) },
        {
            $set:{
                firstName:data.firstName,
                lastName:data.lastName,
                email:data.email,
                profileImage:data.profileImage,
            }
           },
        {new:true}) 
        console.log(updatedRes,'ressssss');
        if(updatedRes.acknowledged){
            const userObjcet = await user.findById({_id:new Types.ObjectId(data._id)});
            return userObjcet
        }else{
            return {
                status : false
            }
        }
    }

    
       
}

