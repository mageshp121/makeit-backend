import { Publisher, Subjects, CourseCreatedEvent } from '@makeitcmn/comon';

export class CourseCreatedPublisher extends Publisher<CourseCreatedEvent> {
  subject: Subjects.CourseCreated = Subjects.CourseCreated;
}
