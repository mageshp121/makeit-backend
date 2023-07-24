import { Kafka } from "kafkajs";

const kafka = new Kafka({
    clientId:"user-serv",
        brokers:["10.105.170.160:9092"]
})
export {
    kafka
}