"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decode_token = decode_token;
const simple_xml_to_json_1 = require("simple-xml-to-json");
const common_1 = require("./common");
const axios = (0, common_1.createClient)();
async function decode_token(token) {
    const request = await axios.get(`/feeds.php?FEED_ID=4&TOKENS=${token}`);
    let output;
    const data = (0, simple_xml_to_json_1.convertXML)(request.data);
    output = {
        prefix: data.TOKENS.children[0].TOKEN.PREFIX,
        user_id: data.TOKENS.children[0].TOKEN.USER_ID,
        setup_id: data.TOKENS.children[0].TOKEN.SETUP_ID,
        media_id: data.TOKENS.children[0].TOKEN.MEDIA_ID,
        banner_id: data.TOKENS.children[0].TOKEN.BANNER_ID,
        campaign_id: data.TOKENS.children[0].TOKEN.CAMPAIGN_ID,
        authcode: data.TOKENS.children[0].TOKEN.AUTHCODE,
        referring_url: data.TOKENS.children[0].TOKEN.REFERRING_URL,
        ip_address: data.TOKENS.children[0].TOKEN.IP_ADDRESS,
        country: data.TOKENS.children[0].TOKEN.COUNTRY,
        time_stamp: data.TOKENS.children[0].TOKEN.TIME_STAMP,
        user: {
            user_name: data.TOKENS.children[0].TOKEN.children[0].USER.USERNAME,
            status: data.TOKENS.children[0].TOKEN.children[0].USER.STATUS
        },
        setup: {
            site_id: data.TOKENS.children[0].TOKEN.children[1].SETUP.SITE_ID,
            site_name: data.TOKENS.children[0].TOKEN.children[1].SETUP.SITE_NAME,
            site_url: data.TOKENS.children[0].TOKEN.children[1].SETUP.SITE_URL,
            operation_id: data.TOKENS.children[0].TOKEN.children[1].SETUP.OPERATION_ID,
            plan_id: data.TOKENS.children[0].TOKEN.children[1].SETUP.PLAN_ID,
            object_id: data.TOKENS.children[0].TOKEN.children[1].SETUP.OBJECT_ID,
            object_description: data.TOKENS.children[0].TOKEN.children[1].SETUP.OBJECT_DESCRIPTION,
            object_url: data.TOKENS.children[0].TOKEN.children[1].SETUP.children[0].OBJECT_DATA.children[0].DATA.VALUE
        }
    };
    return output;
}
