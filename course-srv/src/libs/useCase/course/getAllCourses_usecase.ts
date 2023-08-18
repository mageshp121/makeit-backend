import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { bucketName, s3 } from "../../utils/AWSs3/s3";
import env from "dotenv";
env.config();

export const getAllCourses_useCase = (dependencies: any) => {
  const {
    repository: { courseRepository },
  } = dependencies;
  if (!courseRepository) console.log("Have no repository");

  const exicutefunction = async () => {
    const courses = await courseRepository.getAllCoureses();
    for (let cours of courses) {
      if (process.env.NODE_ENV != "development") {
        const getObjectParams = {
          Bucket: bucketName,
          Key: cours.thumbNailImageS3UrlKey,
        };
        const command = new GetObjectCommand(getObjectParams);
        const url = await getSignedUrl(s3, command, { expiresIn: 3600 });
        cours.thumbNailImageS3UrlKey = url;
      } else {
        cours.thumbNailImageS3UrlKey =
          "https://i.ytimg.com/vi/pN6jk0uUrD8/mqdefault.jpg";
      }
    }
    if (!courses.length) console.log("no courses are found");
    return courses;
  };
  return {
    exicutefunction,
  };
};
