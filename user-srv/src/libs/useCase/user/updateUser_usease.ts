import { BadRequestError } from "@makeitcmn/comon";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { bucketName, s3 } from "../../utils/AWSs3/s3";
import { randomImageBites } from "../../utils/crypto/crypto";

export const updateUser_usecase = (dependencies: any) => {
  const {
    repository: { userRepository },
  } = dependencies;
  if (!userRepository) throw new BadRequestError("Something went wrong");
  const executefunction = async (data: any) => {
    if (data.file) {
      // chechikng is the user is added profile image or not if already added just updating the image
      if (
        typeof data.body.profileImage === "string" &&
        data.body.profileImage.length > 0
      ) {
        console.log(data.body.profileImage, "<= data.body.profileImage =>");
        const params = {
          Bucket: bucketName,
          Key: data.body.profileImage,
          Body: data.file.buffer,
          ContentType: data.file.mimetype,
        };
        console.log(params, "s3 params");
        const command = new PutObjectCommand(params);
        await s3.send(command);
      } else {
        // user adding profile image for the first time
        const profileImageName = randomImageBites();
        // s3 bucket
        const params = {
          Bucket: bucketName,
          Key: profileImageName,
          Body: data.file.buffer,
          ContentType: data.file.mimetype,
        };
        console.log(params, "s3 params");
        const command = new PutObjectCommand(params);
        await s3.send(command);
        data.body.profileImage = profileImageName;
      }
    }
    console.log(data.body, "afterrr s3");
    const userRes = await userRepository.updateUser(data.body);
    if (!userRes) throw new BadRequestError("Something went wrong");
    return userRes;
  };
  return {
    executefunction,
  };
};
