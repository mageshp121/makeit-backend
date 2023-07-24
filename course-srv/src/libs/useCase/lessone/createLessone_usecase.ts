import { PutObjectCommand } from "@aws-sdk/client-s3";
import { lessoneEntity } from "../../enities/lessoneentity";

import { lessoneBucketName, s3 } from "../../utils/AWSs3/s3";
import { randomImageBites } from "../../utils/crypto/crypto";

export const create_Lessone_useCase = async (dependencies: any) => {
  const {
    repository: { lessoneRepository },
  } = dependencies;
  if (!lessoneRepository)
    console.log("have no repository {  lessoneRepository }");
  const exicutefunction = async (data: any) => {
    console.log(randomImageBites(), "btyryyyryryryr");
    // random bytes for random image name
    const lessoneName = randomImageBites();
    // s3 bucket
    const params = {
      Bucket: lessoneBucketName,
      Key: lessoneName,
      Body: data.file.buffer,
      ContentType: data.file.mimetype,
    };
    console.log(params, "s3 params");
    const command = new PutObjectCommand(params);
    await s3.send(command);
    console.log(data, "data in usecase");
    console.log("Enterd into exicutefuncation in  createLessone_useCase");
    console.log({ ...data.body,lessoneS3UrlKey: lessoneName }, "sprded data");

    // creating a new lessone enitty
    let lessone: object = new lessoneEntity({
      ...data.body,
      lessoneS3UrlKey:lessoneName,
    });
    console.log(lessone, "lessone entity created");
    const courseRes = await lessoneRepository.createlessone(lessone);
    console.log(courseRes, "lessone response afte adding into database");
    return courseRes;
  };

  return {
    exicutefunction,
  };
};
