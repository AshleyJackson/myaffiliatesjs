"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.view_campaigns = view_campaigns;
const simple_xml_to_json_1 = require("simple-xml-to-json");
const common_1 = require("./common");
const axios = (0, common_1.createClient)();
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
async function view_campaigns(baseUrl, username, password, date_from, date_to) {
    const request = await axios.get(`${baseUrl}/feeds.php?FEED_ID=17&CREATED_DATE_FROM=${date_from.toISOString()}&CREATED_DATE_TO=${date_to.toISOString()}`, {
        auth: {
            username: username,
            password: password
        }
    });
    const response = request.data;
    const parsed_xml = (0, simple_xml_to_json_1.convertXML)(response);
    const campaigns = parsed_xml.CAMPAIGNS.children;
    return campaigns;
}
