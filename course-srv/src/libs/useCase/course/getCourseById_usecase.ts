import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { bucketName, s3 } from "../../utils/AWSs3/s3";
import { BadRequestError } from "@makeitcmn/comon";

export const getCourseById_Usecase = async (dependencies: any) => {
  const {
    repository: { courseRepository },
  } = dependencies;
  const exicutefunction = async (id: string) => {
    const course = await courseRepository.getCourseById(id);
    if (!course) throw new BadRequestError("something wen wrong");
    let data = {
      _id: course._id,
      WorkingTitle: course.WorkingTitle,
      ShortDescription: course.ShortDescription,
      Description: course.Description,
      Category: course.Category,
      thumbNailImageS3UrlKey: "",
      imageName: course.thumbNailImageS3UrlKey,
      tutorId: course.tutorId,
      WhatWilllearn1: course.WhatWilllearn1,
      WhatWilllearn2: course.WhatWilllearn2,
      WhatWilllearn3: course.WhatWilllearn3,
      WhatWilllearn4: course.WhatWilllearn4,
      WhoIsThiscourseFor: course.WhoIsThiscourseFor,
      prerequesties1: course.prerequesties1,
      prerequesties2: course.prerequesties2,
      CoursePrice: course.CoursePrice,
      drafted: course.drafted,
    };
    const getObjectParams = {
      Bucket: bucketName,
      Key: course.thumbNailImageS3UrlKey,
    };
    const command = new GetObjectCommand(getObjectParams);
    const url = await getSignedUrl(s3, command, { expiresIn: 3600 });
    data.thumbNailImageS3UrlKey = url;
    return data;
  };

  return {
    exicutefunction,
  };
};
