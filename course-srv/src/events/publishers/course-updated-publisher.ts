import { Publisher, Subjects, CourseUpdatedEvent } from '@makeitcmn/comon';

export class CourseUpdatedPublisher extends Publisher<CourseUpdatedEvent> {
  subject: Subjects.CourseUpdated = Subjects.CourseUpdated;
}
