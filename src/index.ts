import axios from "axios";
import { Creds, Token } from './types';
import { convertXML } from 'simple-xml-to-json';
import { UserStatus } from "./users";

/**
 * @example 
 * const baseUrl = "";
 * const username = "";
 * const password = "";
 * 
 * @description This allows you to specify a token and decode them and output the details pertaining to the details within the token.
 * @param baseUrl 
 * @param token 
 * @param username 
 * @param password 
 * @returns <TOKENSChild[]>
 */
export async function decode_token(data: Creds): Promise<Token> {
  const request = await axios.get(`${data.baseUrl}/feeds.php?FEED_ID=4&TOKENS=${data.token}`, {
    auth: {
      username: data.username,
      password: data.password
    }
  });
  let token: Token = {
    prefix: "",
    user_id: "",
    setup_id: "",
    plan_id: "",
    media_id: "",
    banner_id: "",
    campaign_id: "",
    authcode: "",
    referring_url: "",
    ip_address: "",
    country: "",
    time_stamp: new Date()
  }
  return data

}

/**
 * @example 
 * const baseUrl = "";
 * const username = "";
 * const password = "";
 * const token = "";
 *
 * @description This feed outputs the status of a selected list of users. It can also optionally update the status of those users.
 * @param baseUrl 
 * @param token 
 * @param username 
 * @param password 
 * @returns <UserStatus>
 */
export async function get_user_status(baseUrl: string, username: string, password: string, user_id: number): Promise<UserStatus> {
  const request = await axios.get(`${baseUrl}/feeds.php?FEED_ID=3&USER_IDS=${user_id}`, {
    auth: {
      username: username,
      password: password
    }
  });
  const response = request.data;
  const parsed_xml: UserStatus = convertXML(response);
  const user_status = parsed_xml
  return user_status
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
