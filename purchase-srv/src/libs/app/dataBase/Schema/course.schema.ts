import mongoose from "mongoose";

const CourseCopySchema = new mongoose.Schema({
   CourseId:String,
   WorkingTitle:String,
   ShortDescription:String,
   Description:String,
   Category:String,
   thumbNailImageS3UrlKey:String,
   tutorId:String,
   WhatWilllearn1:String,
   WhatWilllearn2:String,
   WhatWilllearn3:String,
   WhatWilllearn4:String,
   WhoIsThiscourseFor:String,
   prerequesties1:String,
   prerequesties2:String,
   CoursePrice:Number,
   drafted:Boolean
},{
    versionKey:false
})
const coursecopy = mongoose.model("coursecopies", CourseCopySchema,)
console.log(coursecopy,'mongoose course');
export {
   coursecopy
}
