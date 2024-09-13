import fs from "fs";
import { convertXML } from "simple-xml-to-json";
import { createClient } from "./common";
const axios = createClient()

export async function decode_token(token: string): Promise<Token> {
  const request = await axios.get(`/feeds.php?FEED_ID=4&TOKENS=${token}`)
  let output: Token
  const data = convertXML(request.data)
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
  }
  return output
}


interface Token {
  prefix: string;
  user_id: string;
  setup_id: string;
  media_id: string;
  banner_id: string;
  campaign_id: string;
  authcode: string;
  referring_url: string;
  ip_address: string;
  country: string;
  time_stamp: Date;
  user?: TokenUser; // Not sure off the top of my head if User is always available
  setup?: TokenSetup; // Not sure off the top of my head if Setup is always available
}

interface TokenUser {
  user_name: string;
  status: string;
}

interface TokenSetup {
  site_id: string;
  site_name: string;
  site_url: string;
  operation_id: string;
  plan_id: string;
  object_id: string;
  object_description: string;
  object_url: string;
}