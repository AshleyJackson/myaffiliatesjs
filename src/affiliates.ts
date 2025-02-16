import { createClient } from "./common";
import { convertXML } from "simple-xml-to-json";
import fs from 'fs'
const axios = createClient()

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

type affiliate_account_type = '' | 'shell'
type create_affiliate_params = {
  FEED_ID: number,
  account_type: affiliate_account_type,
  username: string,
  password: string,
  email: string,
  country?: string,
  referrer_token?: string,
  plans: string,
  plan_force: string
}
type create_affiliate_output = {
  user_id: number
  status: string
  validation_code: string
  error_count: number
  username: string
  password: string
  parent_id: number
  country: string
  language: string
  email: string
}

export async function create_affiliate(account_type: affiliate_account_type, username: string, password: string, email: string, plan_force: string, plans: string, country?: string, referrer_token?: string) {
  const params: create_affiliate_params = {
    FEED_ID: 26,
    account_type: account_type,
    username: username,
    password: password,
    email: email,
    country: country,
    referrer_token: referrer_token,
    plans: plans,
    plan_force: plan_force
  }
  const request = await axios.post('feeds.php', {}, {
    params: params
  })
  let output: create_affiliate_output
  const data = convertXML(request.data)
  output = {
    status: data.ACCOUNT.STATUS,
    validation_code: data.ACCOUNT.VALIDATION_CODE,
    error_count: data.ACCOUNT.children[0].INIT.ERROR_COUNT,
    username: data.ACCOUNT.children[1].USERNAME.content,
    password: data.ACCOUNT.children[2].PASSWORD.content,
    parent_id: data.ACCOUNT.children[3].PARENT.content,
    user_id: data.ACCOUNT.children[4].USERID.content,
    country: data.ACCOUNT.children[5].COUNTRY.content,
    language: data.ACCOUNT.children[6].LANGUAGE.content,
    email: data.ACCOUNT.children[7].EMAIL.content
  }
  return data
}
