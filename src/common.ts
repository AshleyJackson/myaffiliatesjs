import axios from 'axios';
import { config } from "dotenv";
config();

const creds = {
  baseUrl: process.env.BASE_URL as string,
  username: process.env.USERNAME as string,
  password: process.env.PASSWORD as string,
}

if (!creds.baseUrl || !creds.username || !creds.password) {
  throw new Error('Missing credentials in .env file');
}

export const createClient = () => {
  return axios.create({
    baseURL: creds.baseUrl,
    auth: {
      username: creds.username,
      password: creds.password
    }
  });
}