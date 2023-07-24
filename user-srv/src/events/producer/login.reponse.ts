import { sendMessage } from "../common/producer";


export default (topic:string,data:any)=>{
     sendMessage(topic,data)
     
}