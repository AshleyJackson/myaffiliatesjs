import axios from "axios";
import { Creds, Token } from './types';
import { convertXML } from 'simple-xml-to-json';
import { decode_token } from "./tokens";
import { get_user } from "./users";


export default {
  decode_token,
  get_user,
}


/**
 * @example 
 * const baseUrl = "";
 * const username = "";
 * const password = "";
 * const date_from = new Date(2022, 0, 1);
 * const date_to = new Date(2022, 11, 31);
 *
 * @description This allows you to specify a date range and get all the campaigns that were created within that date range.
 * @param baseUrl 
 * @param username 
 * @param password 
 * @param date_from 
 * @param date_to 
 * @returns <any>
 */
export async function view_campaigns(baseUrl: string, username: string, password: string, date_from: Date, date_to: Date): Promise<any> {
  const request = await axios.get(`${baseUrl}/feeds.php?FEED_ID=17&CREATED_DATE_FROM=${date_from.toISOString()}&CREATED_DATE_TO=${date_to.toISOString()}`, {
    auth: {
      username: username,
      password: password
    }
  });
  const response = request.data;
  const parsed_xml: any = convertXML(response);
  const campaigns = parsed_xml.CAMPAIGNS.children
  return campaigns
}

/**
 * @example 
 * const baseUrl = "";
 * const username = "";
 * const password = "";
 * const USER_ID = "";
 * const date_from = new Date(2022, 0, 1);
 * const date_to = new Date(2022, 11, 31);
 *
 * @description This allows you to specify a date range and get all the affiliate earnings that were generated within that date range.
 * @param baseUrl 
 * @param username 
 * @param password 
 * @param USER_ID 
 * @param date_from 
 * @param date_to 
 * @returns Promise<any>
 */
export async function get_affiliate_earnings(baseUrl: string, username: string, password: string, USER_ID: number, date_from: Date, date_to: Date): Promise<any> {
  const request = await axios.get(`${baseUrl}/feeds.php?FEED_ID=25&USER_ID=${USER_ID}&FROM_DATE=${date_from.toISOString()}&TO_DATE=${date_to.toISOString()}`, {
    auth: {
      username: username,
      password: password
    }
  });
  const response = request.data;
  const parsed_xml: any = convertXML(response);
  const affiliate_earnings = parsed_xml
  return affiliate_earnings
}
