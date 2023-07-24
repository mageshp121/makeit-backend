import { kafka } from "../../kafka-wrapper";
import { EventEmitter } from "../emitter/emitter";

class ConsumerMessage {
  consumer;
  constructor(grid: string) {
    this.consumer = kafka.consumer({ groupId: grid });
    this.consumer.connect();
  }
  async getMessage(topic: string) {
    await this.consumer.subscribe({ topic });
    console.log(
      topic,
      "subscribed"
    );
    await this.consumer.run({
      eachMessage: async ({ message }) => {
        console.log(message, "Kafka received message");
        if (message.value !== null) {
          try {
            const data = JSON.parse(message.value.toString());
            console.log(data, "consume data", topic, "onsume topic");
            EventEmitter.emit(topic, data);
          } catch (error) {
            console.log(error);
          }
        }
      },
    });
  }
}
export { ConsumerMessage };
