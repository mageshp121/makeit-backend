export interface order {
    userId:string,
    courseDetails:string[],
    totalemount:number,
    paymentGateway:string,
    orderId:string
}
export class order{
   userId: string;
   totalemount:number
   paymentGateway:string
   courseDetails:string[]
   date:Date
   status:string
   orderId:string
   constructor({userId,courseDetails,totalemount,paymentGateway,orderId}:order){
       this.orderId=orderId
       this.userId = userId;
       this.courseDetails = courseDetails;
       this.totalemount = totalemount;
       this.paymentGateway = paymentGateway
       this.date = new Date();
       this.status = "Pending"
   }
}
  