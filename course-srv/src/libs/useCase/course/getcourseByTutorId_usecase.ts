import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { bucketName, s3 } from "../../utils/AWSs3/s3";
import { BadRequestError } from "@makeitcmn/comon";

export const getCourseByTutorId_usecase = async (dependencies: any) => {
  const {
    repository: { courseRepository },
  } = dependencies;
  if (!courseRepository) throw new BadRequestError("Inter error");
  const exicutefunction = async (Id: string) => {
    const courses = await courseRepository.getCourseByTutorId(Id);
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
    if (!courses) console.log("no Courses are found");
    return courses;
  };
  return { exicutefunction };
};
