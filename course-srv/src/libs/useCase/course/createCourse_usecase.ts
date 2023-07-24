import {   course } from "../../enities/courseentity";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { bucketName, s3 } from "../../utils/AWSs3/s3";
import dotenv from "dotenv";
import { randomImageBites } from "../../utils/crypto/crypto";
import sharp from 'sharp'
dotenv.config();
/**
 * courseData is an interface.
 * Course is a class.
 */

// const bucketName = process.env.BUCKET_NAME as string

export const createCourse_useCase = async (dependencies: any) => {
  const {
    repository: { courseRepository },
  } = dependencies;
  if (!courseRepository) console.log("Have no repository");
  const exicutefunction = async (data: any) => {
    console.log(randomImageBites(), "btyryyyryryryr");
    console.log(data,'datatatatatatatataatatatatat');
    
    // Converting the image buffer from JPG to WebP
    const imageBufferJPG = data.file.buffer
    const contentType = 'image/webp'  
    const webImageData = await sharp(imageBufferJPG).webp().toBuffer()
    // random bytes for random image name
    const imageName = randomImageBites();
    // s3 bucket
    const params = {
      Bucket: bucketName,
      Key:imageName,
      Body:webImageData,
      ContentType:contentType,
    };
    console.log(params, "dadadddddddddd");

    const command = new PutObjectCommand(params);
    await s3.send(command);

    // creating a new course enitty
    let cours: object = new course({
      ...data.body,
      tutorId:'64acf4006742357551e55edd',
      drafted: true,
      thumbNailImageS3UrlKey:imageName,
    });
    console.log(cours, "course entity created");
    const courseRes = await courseRepository.createCourse(cours);
    console.log(courseRes, "course response afte adding into database");
    return courseRes;
  };
  return {
    exicutefunction,
  };
};
