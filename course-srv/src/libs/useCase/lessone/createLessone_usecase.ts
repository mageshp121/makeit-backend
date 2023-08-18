import { PutObjectCommand } from "@aws-sdk/client-s3";
import { lessoneEntity } from "../../enities/lessoneentity";

import { lessoneBucketName, s3 } from "../../utils/AWSs3/s3";
import { randomImageBites } from "../../utils/crypto/crypto";

export const create_Lessone_useCase = async (dependencies: any) => {
  const {
    repository: { lessoneRepository },
  } = dependencies;
  const exicutefunction = async (data: any) => {
    console.log(data,'lessone data');
    
    // random bytes for random image name
    const lessoneName = randomImageBites();
    // s3 bucket
    const params = {
      Bucket: lessoneBucketName,
      Key: lessoneName,
      Body: data.file.buffer,
      ContentType: data.file.mimetype,
    };
    const command = new PutObjectCommand(params);
    await s3.send(command);
    // creating a new lessone enitty
    let lessone: object = new lessoneEntity({
      ...data.body,
      lessoneS3UrlKey: lessoneName,
    });
    console.log(lessone,'lesson enitity');
    const courseRes = await lessoneRepository.createlessone(lessone);
    return courseRes;
  };

  return {
    exicutefunction,
  };
};
