import { Types } from "mongoose";
import Schama from "../dataBase/index";


export default {
    createCourse: async (data: any) => {
        console.log(data, "alll data");
        const couseData = {
          CourseId: data.CourseId,
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
        const courseRes = await Schama.coursecopy.create(couseData);
        console.log(courseRes, " courseRes");
        return courseRes;
      },

};
