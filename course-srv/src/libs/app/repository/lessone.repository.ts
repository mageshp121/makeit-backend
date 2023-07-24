import Schama from "../database/index";
import { Types } from "mongoose";
const { lessone } = Schama;

export default {
  createlessone: async (data: any) => {
    console.log(data, "alll data");
    const lessoneData = {
      lessoneS3UrlKey: data.lessoneS3UrlKey,
      lessoneTitle: data.lessoneTitle,
      lessoneOrder: data.lessoneOrder,
      tutorId: data.tutorId,
      courseId: data.courseId,
    };
    console.log(lessoneData, "userdata");
    const lessoneRes = await lessone.create(lessoneData);
    console.log(lessoneRes, " courseRes");
    return lessoneRes;
  },

  getLessoneByCourseId: async (id: string) => {
    console.log(id, "id at repository");
    const courses = await lessone.find({courseId :id});
    return courses;
  },

  getLessoneById: async (_id: string) => {
    console.log("calling this");
    const lessoneObject = await lessone.findById({
      _id: new Types.ObjectId(_id),
    });
    return lessoneObject;
  },
};
