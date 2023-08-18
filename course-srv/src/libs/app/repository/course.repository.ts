import { Types } from "mongoose";
import Schama from "../database/index";
const { course } = Schama;

export default {
  createCourse: async (data: any) => {
    console.log(data, "alll data");
    const couseData = {
      userId: data.userId,
      WorkingTitle: data.WorkingTitle,
      Description: data.Description,
      ShortDescription: data.ShortDescription,
      Category: data.Category,
      thumbNailImageS3UrlKey: data.thumbNailImageS3UrlKey,
      tutorId: data.tutorId,
      WhatWilllearn1: data.WhatWilllearn1,
      WhatWilllearn2: data.WhatWilllearn2,
      WhatWilllearn3: data.WhatWilllearn3,
      WhatWilllearn4: data.WhatWilllearn4,
      WhoIsThiscourseFor: data.WhoIsThiscourseFor,
      prerequesties1: data.prerequesties1,
      prerequesties2: data.prerequesties2,
      CoursePrice: data.CoursePrice,
      drafted: data.drafted,
    };
    console.log(couseData, "userdata");
    const courseRes = await course.create(couseData);
    console.log(courseRes, " courseRes");
    return courseRes;
  },

  getCourseByTutorId: async (id: string) => {
    console.log(id, "id at repository");
    const courses = await course.find({ tutorId: id });
    return courses;
  },
  getCourseByCategory: async (category: string) => {
    console.log(category);
    const courses = await course.find({ Category: category });
    return courses;
  },

  getAllCoureses: async () => {
    const allCourse = await course.find({});
    console.log(allCourse, "alluserdataObject");
    return allCourse;
  },

  getCourseById: async (id: string) => {
    const coursObject = await course.findById({ _id: new Types.ObjectId(id) });
    return coursObject;
  },

  publishCourseCourseById: async (id: string) => {
    const courseRes = await course.findByIdAndUpdate(
      id,
      { drafted: false },
      { new: true }
    );
    return courseRes;
  },

  updateCourse: async (data: any) => {
    const courssRes = await course.updateOne(
      { _id: new Types.ObjectId(data._id) },
      {
        $set: {
          WorkingTitle: data.WorkingTitle,
          Category: data.Category,
          Description: data.Description,
          ShortDescription: data.ShortDescription,
          WhatWilllearn1: data.WhatWilllearn1,
          WhatWilllearn2: data.WhatWilllearn2,
          WhatWilllearn3: data.WhatWilllearn3,
          WhatWilllearn4: data.WhatWilllearn4,
          WhoIsThiscourseFor: data.WhoIsThiscourseFor,
          thumbNailImageS3UrlKey: data.imageName,
          prerequesties1: data.prerequesties1,
          prerequesties2: data.prerequesties2,
          CoursePrice: data.CoursePrice,
          drafted: data.drafted,
        },
      },
      { new: true }
    );
    return courssRes;
  },
};
