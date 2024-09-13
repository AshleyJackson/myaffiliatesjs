import axios from 'axios';
import { config } from "dotenv";
config();
const creds = {
    baseUrl: process.env.BASE_URL,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
};
if (!creds.baseUrl || !creds.username || !creds.password) {
    throw new Error('Please provide a BASE_URL, USERNAME, and PASSWORD in your .env file.');
}
export const createClient = () => {
    return axios.create({
        baseURL: creds.baseUrl,
        auth: {
            username: creds.username,
            password: creds.password
        }
    });
};
