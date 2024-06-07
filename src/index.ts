import axios from "axios";
import type { Tokens } from './tokens';
import { convertXML } from 'simple-xml-to-json';

export async function decode_token(baseUrl: string, token: string, username: string, password: string) {
    const request = await axios.get(`${baseUrl}/feeds.php?FEED_ID=4&TOKENS=${token}`, {
        auth: {
            username: username,
            password: password
        }
    });
    const response = request.data;
    const parsed_xml: Tokens = convertXML(response);
    const token_data = parsed_xml.TOKENS.children
    return token_data
}

