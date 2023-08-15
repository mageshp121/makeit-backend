import { Subjects } from './subjects';


export interface CourseCreatedEvent {
  subject: Subjects.CourseCreated;
  data: {
   CourseId:string
   WorkingTitle:string,
   ShortDescription:string,
   Description:string,
   Category:string,
   thumbNailImageS3UrlKey:string,
   tutorId:string,
   WhatWilllearn1:string,
   WhatWilllearn2:string,
   WhatWilllearn3:string,
   WhatWilllearn4:string,
   WhoIsThiscourseFor:string,
   prerequesties1:string,
   prerequesties2:string,
   CoursePrice:number,
   drafted:boolean
  };
}
