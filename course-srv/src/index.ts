
import { app } from './app';
import { dbConnect } from './config/db'




const start  = async() =>{
    try{
      await  dbConnect()
    }catch(err){
    console.error(err);
    }
 app.listen(4000,()=>{
        console.log("server started at 4000");
    })
}
start()

