import dependeencies from "../../config/depentencies";
import { createUser_useCase } from '../../libs/useCase/user/createUser_usecase'

import { ConsumerMessage } from "../common/subscriber";
import { EventEmitter } from "../emitter/emitter";
import { user_register_response_producer } from "../producer";
import randomstring from "randomstring";



// export default async (topic:string) => {
//   var grpid = randomstring.generate()
//     const register = new ConsumerMessage(grpid)
//        register.getMessage(topic)
//        EventEmitter.on(topic,(data)=>{
//               const responseTopic = 'REGISTERRESPONSETOPIC'
//               const create = async (dependencies:any)=>{
//                 if(!dependeencies)throw new Error("No such depeneccies")
//                 // const { useCase :{createUser_useCase}} = dependencies;
//                 const response = await (await createUser_useCase(dependencies)).exicutefunction(data)
//                 console.log(response,'responseeee');
//                 user_register_response_producer(responseTopic,response);
//               }
//              if(data){
//                  create(dependeencies)
//              } 
//         })
// }

