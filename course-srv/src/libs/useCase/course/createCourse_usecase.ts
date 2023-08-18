import { course } from "../../enities/courseentity";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { bucketName, s3 } from "../../utils/AWSs3/s3";
import dotenv from "dotenv";
import { randomImageBites } from "../../utils/crypto/crypto";
import sharp from "sharp";
import { CourseCreatedPublisher } from "../../../events/publishers/course-created-publisher";
import { natsWrapper } from "../../../nats-wrapper";
dotenv.config();

/**
 *
 *
 *
 * courseData is an interface.
 * Course is a class.
 *
 *
 *
 *
 */

// const bucketName = process.env.BUCKET_NAME as

export const createCourse_useCase = async (dependencies: any) => {
  const {
    repository: { courseRepository },
  } = dependencies;
  if (!courseRepository) console.log("Have no repository");
  const exicutefunction = async (data: any) => {
    // Converting the image buffer from JPG to WebP
    const imageBufferJPG = data.file.buffer;
    const contentType = "image/webp";
    const webImageData = await sharp(imageBufferJPG).webp().toBuffer();
    // random bytes for random image name
    const imageName = randomImageBites();
    // s3 bucket
    const params = {
      Bucket: bucketName,
      Key: imageName,
      Body: webImageData,
      ContentType: contentType,
    };
    const command = new PutObjectCommand(params);
    await s3.send(command);
    // creating a new course enitty
    let cours: object = new course({
      ...data.body,
      drafted: true,
      thumbNailImageS3UrlKey: imageName,
    });
    const courseRes = await courseRepository.createCourse(cours);
    new CourseCreatedPublisher(natsWrapper.client).publish({
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
    console.log(courseRes, "course response afte adding into database");
    return courseRes;
  };
  return {
    exicutefunction,
  };
};
