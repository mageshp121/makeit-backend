import { sendMessage } from "../common/producer"

export default (topic:string,data:any)=>{
    console.log(topic,data,"kadkaaa}}}}}}]")
    sendMessage(topic,data)
}