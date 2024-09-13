"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClient = void 0;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const creds = {
    baseUrl: process.env.BASE_URL,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
};
if (!creds.baseUrl || !creds.username || !creds.password) {
    throw new Error('Please provide a BASE_URL, USERNAME, and PASSWORD in your .env file.');
}
const createClient = () => {
    return axios_1.default.create({
        baseURL: creds.baseUrl,
        auth: {
            username: creds.username,
            password: creds.password
        }
    });
};
exports.createClient = createClient;
