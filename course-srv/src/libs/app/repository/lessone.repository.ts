import Schama from "../database/index";
import { Types } from "mongoose";
const { lessone } = Schama;

export default {
  createlessone: async (data: any) => {
    const lessoneData = {
      lessoneS3UrlKey: data.lessoneS3UrlKey,
      lessoneTitle: data.lessoneTitle,
      lessoneOrder: data.lessoneOrder,
      tutorId: data.tutorId,
      courseId: data.courseId,
    };
    const lessoneRes = await lessone.create(lessoneData);
    return lessoneRes;
  },

  getLessoneByCourseId: async (id: string) => {
    const courses = await lessone.find({ courseId: id });
    return courses;
  },

  getLessoneById: async (_id: string) => {
    const lessoneObject = await lessone.findById({
      _id: new Types.ObjectId(_id),
    });
    return lessoneObject;
  },
};
