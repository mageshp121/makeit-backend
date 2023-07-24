import { kafka } from "../../kafka-wrapper";

const producer = kafka.producer()


export const sendMessage =async (topic:string,data:any) => {
    await producer.connect()
    await producer.send({
        topic,
        messages:[{
            value:JSON.stringify(data)
        }]
    })
}