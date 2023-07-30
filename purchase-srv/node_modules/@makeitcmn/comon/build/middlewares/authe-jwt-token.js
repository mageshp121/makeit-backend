"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtauthentication = void 0;
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const not_authorized_error_1 = require("../errors/not-authorized-error");
const bad_request_error_1 = require("../errors/bad-request-error");
const app = (0, express_1.default)();
app.use((0, cookie_parser_1.default)());
// jwt authentication middleware that authenticates users request
const jwtauthentication = (secretKey) => {
    return (req, res, next) => {
        var _a;
        console.log(req.headers['authorization']);
        const token = (_a = req.headers['authorization']) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        console.log(token, 'jwtauthentication acces');
        if (token) {
            jsonwebtoken_1.default.verify(token, secretKey.accessToken, (err) => {
                if (err) {
                    throw new not_authorized_error_1.NotAuthorizedError();
                }
                else {
                    // If everything is okey then callig the next function  
                    next();
                }
            });
        }
        else {
            throw new bad_request_error_1.BadRequestError("Tokens are not present");
        }
    };
};
exports.jwtauthentication = jwtauthentication;
