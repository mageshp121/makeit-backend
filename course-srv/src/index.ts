import { app } from "./app";
import { dbConnect } from "./config/db";
import { natsWrapper } from "./nats-wrapper";

const start = async () => {
  try {
    await natsWrapper.connect('makeit', 'Course-srv', 'http://nats-srv:4222');
    natsWrapper.client.on('close', () => {
      console.log('NATS connection closed!');
      process.exit();
    });
    process.on('SIGINT', () => natsWrapper.client.close());
    process.on('SIGTERM', () => natsWrapper.client.close());
    await dbConnect();
  } catch (err) {
    console.error(err);
  }
  app.listen(4000, () => {
    console.log("server started at 4000");
  });
};
start();
