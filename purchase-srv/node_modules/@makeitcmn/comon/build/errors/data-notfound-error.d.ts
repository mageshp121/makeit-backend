import { CustomError } from './custom-error';
export declare class dataNoFoundError extends CustomError {
    statusCode: number;
    reasone: string;
    constructor();
    serializeErrors(): {
        message: string;
    }[];
}
