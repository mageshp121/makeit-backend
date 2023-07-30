"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAuth = exports.tutorAuth = void 0;
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const not_authorized_error_1 = require("../errors/not-authorized-error");
const app = (0, express_1.default)();
app.use((0, cookie_parser_1.default)());
// middleware used to authenticate tutor
const tutorAuth = (secretKey) => {
    return (req, _res, next) => {
        const refershToken = req.cookies.refreshToken;
        console.log(refershToken, "<= refresh token in tutorauth middleware =>");
        if (refershToken) {
            jsonwebtoken_1.default.verify(refershToken, secretKey, (err, payload) => {
                if (err) {
                    throw new not_authorized_error_1.NotAuthorizedError();
                }
                else {
                    console.log(payload, '<= payload tutor roll =>');
                    if (payload && payload.roll === "tutor") {
                        console.log(payload, '<= payload tutor inside if roll =>');
                        next();
                    }
                    else {
                        throw new not_authorized_error_1.NotAuthorizedError();
                    }
                }
            });
        }
        else {
            console.log("No token error tutor auth");
            throw new not_authorized_error_1.NotAuthorizedError();
        }
    };
};
exports.tutorAuth = tutorAuth;
// middleware used to authenticate user
const userAuth = (secretKey) => {
    return (req, _res, next) => {
        const refershToken = req.cookies.refreshToken;
        console.log(refershToken, "<= refresh token in userauth middleware =>");
        if (refershToken) {
            jsonwebtoken_1.default.verify(refershToken, secretKey, (err, payload) => {
                if (err) {
                    throw new not_authorized_error_1.NotAuthorizedError();
                }
                else {
                    console.log(payload, '<= payload userAuth roll =>');
                    if (payload && payload.roll === "user") {
                        console.log(payload, '<= payload userAuth inside if roll =>');
                        next();
                    }
                    else {
                        throw new not_authorized_error_1.NotAuthorizedError();
                    }
                }
            });
        }
        else {
            console.log("No token error userauth");
            throw new not_authorized_error_1.NotAuthorizedError();
        }
    };
};
exports.userAuth = userAuth;
