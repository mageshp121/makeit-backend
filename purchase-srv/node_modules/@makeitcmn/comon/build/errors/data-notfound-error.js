"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataNoFoundError = void 0;
const custom_error_1 = require("./custom-error");
class dataNoFoundError extends custom_error_1.CustomError {
    constructor() {
        super("User is not found in this credential");
        this.statusCode = 404;
        this.reasone = "User is not found in this credential";
        Object.setPrototypeOf(this, dataNoFoundError.prototype);
    }
    serializeErrors() {
        return [{ message: this.reasone }];
    }
}
exports.dataNoFoundError = dataNoFoundError;
