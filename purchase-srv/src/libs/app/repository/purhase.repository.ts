import mongoose, { Types } from "mongoose";
import Schema from "../dataBase/index";

export default {
  createOrdrHistoryTrasaction: async (OrderData: any, tutorOrderData: any) => {
    console.log(OrderData, "ordedata");
    console.log(tutorOrderData, "tutor orderData");

    const session = await mongoose.startSession();
    const courseOrder = {
      orderId: OrderData.orderId,
      userId: OrderData.userId,
      courseDetails: OrderData.courseDetails,
      totalemount: OrderData.totalemount,
      paymentGateway: OrderData.paymentGateway,
      date: new Date(),
      status: OrderData.status,
    };
    try {
      session.startTransaction();
      console.log("transaction started");
      const orderResRes = await Schema.order.create([courseOrder], { session });
      const tutororderRes = await Schema.tutoOrderHistory.insertMany(
        tutorOrderData,
        { session }
      );
      await session.commitTransaction();
      console.log(orderResRes, " courseRes");
      console.log(tutororderRes, "tutororderRes ");
      return { checkoutSuccess: true };
    } catch (error) {
      await session.abortTransaction();
    }
  },

  updateorderTransaction: async (data: any, userId: string) => {
    console.log(userId, " updateorderTransaction userID");
    const session = await mongoose.startSession();
    try {
      session.startTransaction();
      await Schema.order.updateOne(
        { orderId: data.orderId },
        { status: data.status },
        { session }
      );
      await Schema.tutoOrderHistory.updateMany(
        { orderId: data.orderId },
        { status: data.status },
        { session }
      );
      // Removing all course _id's from cart
      const res = await Schema.cart.updateOne(
        { userId: userId },
        { $set: { cartProductId: [] } },
        { session }
      );
      console.log(res, "ressssssssss");
      await session.commitTransaction();
      return {
        paymentSuccess: true,
      };
    } catch (error) {
      await session.abortTransaction();
      return {
        paymentSuccess: false,
      };
    }
  },

  getAllpurchaseHistoryByUserId: async (userId: string) => {
    try {
      const purchaseRes: any = await Schema.order
        .find({ userId: userId })
        .sort({ date: -1 });
      console.log(purchaseRes, "purchase res");
      return purchaseRes;
    } catch (error) {
      return error;
    }
  },

  getAllpurchaseHistoryByTutoId: async (tutoId: string) => {
    try {
      const purchaseRes: any = await Schema.tutoOrderHistory
        .find({ tutorId: tutoId })
        .sort({ date: -1 });
      console.log(purchaseRes, "purchase res");
      return purchaseRes;
    } catch (error) {
      return error;
    }
  },
  getAllPurchaedCourses: async (courseIds: any) => {
    try {
      const courseRes: any = await Schema.coursecopy.find({
        CourseId: { $in: courseIds },
      });
      return courseRes;
    } catch (error) {
      return error;
    }
  },
};
