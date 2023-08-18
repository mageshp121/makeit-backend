export interface lessoneData {
  lessoneContent: string;
  lessoneTitle: string;
  lessoneOrder: number;
  tutorId: string;
  courseId: string;
  lessoneS3UrlKey: string;
}

export class lessoneEntity {
  lessoneTitle: string ;
  lessoneOrder: number;
  tutorId: string;
  courseId: string;
  lessoneS3UrlKey: string;

  constructor({
    lessoneS3UrlKey,
    lessoneTitle,
    lessoneOrder,
    tutorId,
    courseId,
  }: lessoneData) {
       (this.lessoneS3UrlKey = lessoneS3UrlKey),
      (this.lessoneOrder = lessoneOrder),
      (this.tutorId = tutorId),
      (this.courseId = courseId),
      (this.lessoneTitle=lessoneTitle)
  }
}
