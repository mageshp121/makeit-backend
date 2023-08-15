import jwt from "jsonwebtoken"

export const  getPayloadformToken =(token:string)=>{
    const decodedPayload:any = jwt.decode(token); // Decodes the token's payload
    console.log(decodedPayload);
    return { data:decodedPayload.user.user }
}