

// import { Request, Response, NextFunction } from "express";

// export const validation = (schema: any) => async (req: Request, res: Response, next: NextFunction) => {
//   console.log(schema,'scheemssssssssssssssss');
//     console.log("Enterd into validatio middleware");
//     console.log(req.body.data, "req.boy inside validation");
    
//     const  data= req.body.data;
    
//     console.log(data,'dataa');
   
//     try {
//       const { value, error } = await schema.validate(data);
//       console.log(value,'valueeee');
//       console.log(error,'errrorororo thorowing');
//     if (error) {
//       // throw new Error("Validation Error"); // Create a new Error object
//       res.send({status:false,
//       message:'vallidation error'})
//     }
//       return next();
//     } catch (error) {
//       console.log(error,'errror');
//       return res.status(400).json({ error: "error happend" });
//     }
//   };
       
