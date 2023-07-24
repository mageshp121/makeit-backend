
import { CustomError } from './custom-error';
export class dataNoFoundError extends CustomError {
    statusCode = 404 ; 
    reasone = "User is not found in this credential";
    constructor(){
        super("User is not found in this credential");
        Object.setPrototypeOf(this,dataNoFoundError.prototype);
    }
    serializeErrors(){
        return [{message:this.reasone}]
    }
}

