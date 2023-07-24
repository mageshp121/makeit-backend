import { ConsumerMessage } from "../common/subscriber";
import { EventEmitter } from "../emitter/emitter";
import dependeencies from "../../config/depentencies";
// import { user_login_response_producer } from "../producer";
// import randomstring from "randomstring";
// import { attachAccesTokenToCookie } from "../../libs/utils/jwt/jwt";

// export default async (topic: string) => {
//   var grid = randomstring.generate();
//   const login = new ConsumerMessage(grid);
//   login.getMessage(topic);
//   EventEmitter.on(topic, (data) => {
//     console.log(data, "kkkkkkkkkk,njnjjnjnj");
//     const response = async (dependeencies: any) => {
//       const responseTopic = "LOGINRES";
//       if (!dependeencies) throw new Error("No such dependeencies");
//       const {
//         useCase: { getUserByEmail_usecase },
//       } = dependeencies;
//       const Userdata = await getUserByEmail_usecase(
//         dependeencies
//       ).exicutefunction(data.email);
//       // Ataching token into cookie storage
//       attachAccesTokenToCookie('AccessToken',Userdata.accesToken,res)
//       user_login_response_producer(responseTopic, Userdata);
//     };

//     if (data) response(dependeencies);
//   });
// };
