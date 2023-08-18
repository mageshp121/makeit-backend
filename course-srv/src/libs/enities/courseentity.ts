export interface courseData {
  WorkingTitle: string;
  ShortDescription: string;
  Description: string;
  Category: string;
  tutorId: string;
  thumbNailImageS3UrlKey: string;
  WhatWilllearn1: string;
  WhatWilllearn2: string;
  WhatWilllearn3: string;
  WhatWilllearn4: string;
  WhoIsThiscourseFor: string;
  prerequesties1: string;
  prerequesties2: string;
  CoursePrice: number;
  drafted: boolean;
}

export class course {
  WorkingTitle: string;
  ShortDescription: string;
  Description: string;
  Category: string;
  thumbNailImageS3UrlKey: string;
  tutorId: string;
  WhatWilllearn1: string;
  WhatWilllearn2: string;
  WhatWilllearn3: string;
  WhatWilllearn4: string;
  WhoIsThiscourseFor: string;
  prerequesties1: string;
  prerequesties2: string;
  CoursePrice: number;
  drafted: boolean;

  constructor({
    WorkingTitle,
    ShortDescription,
    Description,
    Category,
    WhoIsThiscourseFor,
    thumbNailImageS3UrlKey,
    tutorId,
    WhatWilllearn1,
    WhatWilllearn2,
    WhatWilllearn3,
    WhatWilllearn4,
    prerequesties1,
    prerequesties2,
    CoursePrice,
    drafted,
  }: courseData) {
    (this.WorkingTitle = WorkingTitle),
      (this.ShortDescription = ShortDescription),
      (this.Description = Description),
      (this.Category = Category),
      (this.thumbNailImageS3UrlKey = thumbNailImageS3UrlKey);
    this.tutorId = tutorId;
    (this.WhatWilllearn1 = WhatWilllearn1),
      (this.WhatWilllearn2 = WhatWilllearn2),
      (this.WhatWilllearn3 = WhatWilllearn3),
      (this.WhatWilllearn4 = WhatWilllearn4),
      (this.WhoIsThiscourseFor = WhoIsThiscourseFor);
    (this.prerequesties1 = prerequesties1),
      (this.prerequesties2 = prerequesties2),
      (this.CoursePrice = CoursePrice),
      (this.drafted = drafted);
  }
}
