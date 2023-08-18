import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { lessoneBucketName, s3 } from "../../utils/AWSs3/s3";

export const getLessoneByCourseId_UseCase = async (dependencies: any) => {
  if (!dependencies) console.log("there is no dependency inthis route");
  const {
    repository: { lessoneRepository },
  } = dependencies;
  const exicutefuncation = async (courseId: string) => {
    const lessones = await lessoneRepository.getLessoneByCourseId(courseId);
    for (let lesson of lessones) {
      const getObjectParams = {
        Bucket: lessoneBucketName,
        Key: lesson.lessoneS3UrlKey,
      };
      const command = new GetObjectCommand(getObjectParams);
      const url = await getSignedUrl(s3, command, { expiresIn: 3600 });
      lesson.lessoneS3UrlKey = url;
    }
    return lessones;
  };
  return {
    exicutefuncation,
  };
};
