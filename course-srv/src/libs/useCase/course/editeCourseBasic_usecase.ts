import { BadRequestError } from "@makeitcmn/comon";
import sharp from "sharp";
import { randomImageBites } from "../../utils/crypto/crypto";
import { bucketName, s3 } from "../../utils/AWSs3/s3";
import { PutObjectCommand } from "@aws-sdk/client-s3";

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
    const courseRes = await courseRepository.updateCourse(data.body);
    if (!courseRes) throw new BadRequestError("something went wrong");
    return courseRes;
  };
  return {
    exicutefunction,
  };
};
