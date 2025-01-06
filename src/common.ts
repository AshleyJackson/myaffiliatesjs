import axios from 'axios';
import { config } from "dotenv";

config();

const creds = {
  baseUrl: process.env.admin_base as string,
  username: process.env.admin_username as string,
  password: process.env.admin_password as string,
}

if (!creds.baseUrl || !creds.username || !creds.password) {
  throw new Error('Please provide a BASE_URL, USERNAME, and PASSWORD in your .env file.')
}

export const createClient = () => {
  return axios.create({
    baseURL: `https://${creds.baseUrl}/feeds.php`,
    auth: {
      username: creds.username,
      password: creds.password,
    }
  });
}