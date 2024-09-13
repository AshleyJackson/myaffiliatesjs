"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate_email = validate_email;
const axios_1 = __importDefault(require("axios"));
async function validate_email(email) {
    const response = await axios_1.default.get(`https://api.ashleyjackson.net/email/validate/${email}`);
    return response.data;
}
