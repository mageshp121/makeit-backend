import { Request,Response } from "express";



export default (dependecies:any)=>{
    const createLessone_Controler=async (req:Request,res:Response)=>{
        console.log(req.file,'req.file obejct');
        console.log(req.body,'req.body obejct');
        console.log(dependecies,'dependecies');
        const data = {
            body:req.body,
            file:req.file
        }
        console.log(data,'dat object');
        const { useCase: {  create_Lessone_useCase},} = dependecies;
        const {exicutefunction} = await  create_Lessone_useCase(dependecies);
        const lessoneRes = await exicutefunction(data);
        console.log(lessoneRes);
        if(lessoneRes){        
            res.send(lessoneRes);
        }else{
            res.send("error occured");
        }
    }
    return createLessone_Controler
}