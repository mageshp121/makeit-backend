import { BadRequestError } from "@makeitcmn/comon";
import sharp from "sharp";
import { randomImageBites } from "../../utils/crypto/crypto";
import { bucketName, s3 } from "../../utils/AWSs3/s3";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { CourseUpdatedPublisher } from "../../../events/publishers/course-updated-publisher";
import { natsWrapper } from "../../../nats-wrapper";

export const updateCourse_usecase = async (dependencies: any) => {
  const {
    repository: { courseRepository },
  } = dependencies;
  if (!courseRepository) throw new BadRequestError("something went wrong");
  const exicutefunction = async (data: any) => {
    if (data.files) {
      console.log("when file is present");
      // Converting the image buffer from JPG to WebP
      const imageBufferJPG = data.file.buffer;
      const contentType = "image/webp";
      const webImageData = await sharp(imageBufferJPG).webp().toBuffer();
      // s3 bucket
      const params = {
        Bucket: bucketName,
        Key: data.body.imageName,
        Body: webImageData,
        ContentType: contentType,
      };
      console.log(params, "dadadddddddddd");
      const command = new PutObjectCommand(params);
      await s3.send(command);
    }
    console.log(data, "data updateCourse_usecase ");
    // creating new course
    const courseRes = await courseRepository.updateCourse(data.body);
    if (!courseRes) throw new BadRequestError("something went wrong");
    // publishing event into nats client
    new CourseUpdatedPublisher(natsWrapper.client).publish({
      CourseId: courseRes._id,
      WorkingTitle: courseRes.WorkingTitle,
      ShortDescription: courseRes.ShortDescription,
      Description: courseRes.Description,
      Category: courseRes.Category,
      thumbNailImageS3UrlKey: courseRes.thumbNailImageS3UrlKey,
      tutorId: courseRes.tutorId,
      WhatWilllearn1: courseRes.WhatWilllearn1,
      WhatWilllearn2: courseRes.WhatWilllearn2,
      WhatWilllearn3: courseRes.WhatWilllearn3,
      WhatWilllearn4: courseRes.WhatWilllearn4,
      WhoIsThiscourseFor: courseRes.WhoIsThiscourseFor,
      prerequesties1: courseRes.prerequesties1,
      prerequesties2: courseRes.prerequesties2,
      CoursePrice: courseRes.CoursePrice,
      drafted: courseRes.drafted,
    });
    console.log(courseRes, "course response afte editing courseBasic");
    return courseRes;
  };
  return {
    exicutefunction,
  };
};
