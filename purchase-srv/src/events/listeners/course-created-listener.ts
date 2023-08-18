import { Message } from "node-nats-streaming";
import {
  Subjects,
  Listener,
  CourseCreatedEvent,
  BadRequestError,
} from "@makeitcmn/comon";
import { queueGroupName } from "./queue-group-name";
import { courseCopy } from "../../libs/enitities/courseCopyEntity";
import Schema from "../../libs/app/dataBase/index";

export class CourseCreateListener extends Listener<CourseCreatedEvent> {
  subject: Subjects.CourseCreated = Subjects.CourseCreated;
  queueGroupName = queueGroupName;
  async onMessage(data: CourseCreatedEvent["data"], msg: Message) {
    // creating new enitity for new course
    const courseCopyEntity = new courseCopy(data);
    // adding new course into data basse
    try {
      await Schema.coursecopy.create(courseCopyEntity);
      msg.ack();
    } catch (error) {
      throw new BadRequestError("something wen wrong");
    }
  }
}
