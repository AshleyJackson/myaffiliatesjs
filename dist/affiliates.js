import { createClient } from "./common";
import { convertXML } from "simple-xml-to-json";
const axios = createClient();
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
export async function get_affiliate_earnings(baseUrl, username, password, USER_ID, date_from, date_to) {
    const request = await axios.get(`${baseUrl}/feeds.php?FEED_ID=25&USER_ID=${USER_ID}&FROM_DATE=${date_from.toISOString()}&TO_DATE=${date_to.toISOString()}`, {
        auth: {
            username: username,
            password: password
        }
    });
    const response = request.data;
    const parsed_xml = convertXML(response);
    const affiliate_earnings = parsed_xml;
    return affiliate_earnings;
}
export async function create_affiliate(account_type, username, password, email, plan_force, plans, country, referrer_token) {
    const params = {
        FEED_ID: 26,
        account_type: account_type,
        username: username,
        password: password,
        email: email,
        country: country,
        referrer_token: referrer_token,
        plans: plans,
        plan_force: plan_force
    };
    const request = await axios.post('feeds.php', {}, {
        params: params
    });
    const data = convertXML(request.data);
    const output = {};
    return data;
}
