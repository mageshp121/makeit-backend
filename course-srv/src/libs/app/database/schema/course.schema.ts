import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    WorkingTitle: String,
    ShortDescription: String,
    Description: String,
    Category: String,
    thumbNailImageS3UrlKey: String,
    tutorId: String,
    WhatWilllearn1: String,
    WhatWilllearn2: String,
    WhatWilllearn3: String,
    WhatWilllearn4: String,
    WhoIsThiscourseFor: String,
    prerequesties1: String,
    prerequesties2: String,
    CoursePrice: Number,
    drafted: Boolean,
  },
  {
    versionKey: false,
  }
);
const course = mongoose.model("courses", courseSchema);
export { course };
