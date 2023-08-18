import { BadRequestError } from "@makeitcmn/comon";
import { instance } from "../../utils/razorpay/razorpay";
import { order } from "../../enitities/orderEntity";

export const checkout_Usecase = async (dependencies: any) => {
  let orderobjetcs: any = [];
  const exicutefunction = async (data: any) => {
    console.log(data, "<= data =>");
    const options = {
      amount: data.totalemount*100,
      currency: "INR",
    };
    console.log(options, "<= options =>");
    const {
      repository: { purchaseRespository },
    } = dependencies;
    return new Promise<void>((resolve, reject) => {
      instance.orders
        .create(options)
        .then(async (orders: any) => {
          console.log(orders, "<= order created =>");
          // creating order new entity
          const orderentity: any = new order({ ...data, orderId: orders.id });
          console.log(orderentity, "order entityyyy");
          const { courseDetails } = orderentity;
          // creating sepparate order obejct with course data
          for (let i = 0; i < courseDetails.length; i++) {
            const neworderObject = { ...orderentity, ...courseDetails[i] };
            delete neworderObject.courseDatails;
            orderobjetcs.push(neworderObject);
          }
          console.log(orderobjetcs,'orderObjects');
          // calling transaction funcation
          const trasactoionStatus =
            await purchaseRespository.createOrdrHistoryTrasaction(
              orderentity,
              orderobjetcs
            );
          if(trasactoionStatus.checkoutSuccess){
            resolve(orders);
          }else{
            reject()
          }
        })
        .catch((error) => {
          console.log(error, "<= error occured =>");
          reject(error);
        });
    });
  };
  return {
    exicutefunction,
  };
};
