"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);

// src/tokens.ts
var import_simple_xml_to_json = require("simple-xml-to-json");

// src/common.ts
var import_axios = __toESM(require("axios"));
var import_dotenv = require("dotenv");
(0, import_dotenv.config)();
var creds = {
  baseUrl: process.env.BASE_URL,
  username: process.env.USERNAME,
  password: process.env.PASSWORD
};
if (!creds.baseUrl || !creds.username || !creds.password) {
  throw new Error("Missing credentials in .env file");
}
var createClient = () => {
  return import_axios.default.create({
    baseURL: creds.baseUrl,
    auth: {
      username: creds.username,
      password: creds.password
    }
  });
};

// src/tokens.ts
var axios2 = createClient();
async function decode_token(token) {
  const request = await axios2.get(`/feeds.php?FEED_ID=4&TOKENS=${token}`);
  let output;
  const data = (0, import_simple_xml_to_json.convertXML)(request.data);
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

// src/users.ts
var import_simple_xml_to_json2 = require("simple-xml-to-json");
var axios3 = createClient();
async function get_user(date_from, date_to) {
  const user = await axios3.get(`/feeds.php?FEED_ID=17&CREATED_DATE_FROM=${date_from.toISOString()}&CREATED_DATE_TO=${date_to.toISOString()}`);
  let output;
  const data = (0, import_simple_xml_to_json2.convertXML)(user.data);
  output = {
    id: data.USERS.children[0].USER.ID,
    username: data.USERS.children[0].USER.children[0].USERNAME.content,
    parent_id: data.USERS.children[0].USER.children[1].PARENT_ID.content,
    parent_username: data.USERS.children[0].USER.children[2].PARENT_USERNAME.content,
    admin_id: data.USERS.children[0].USER.children[3].ADMIN_ID.content,
    admin_username: data.USERS.children[0].USER.children[4].ADMIN_USERNAME.content,
    email: data.USERS.children[0].USER.children[5].EMAIL.content,
    country: data.USERS.children[0].USER.children[6].COUNTRY.content,
    status: data.USERS.children[0].USER.children[7].STATUS.content,
    join_date: data.USERS.children[0].USER.children[8].JOIN_DATE.content,
    currency: data.USERS.children[0].USER.children[9].CURRENCY.content,
    balance: data.USERS.children[0].USER.children[10].BALANCE.content,
    payment_type: data.USERS.children[0].USER.children[11].PAYMENT_TYPE.content,
    minimum_payment: data.USERS.children[0].USER.children[12].MINIMUM_PAYMENT.content,
    language: data.USERS.children[0].USER.children[13].LANGUAGE.content,
    user_comments: {
      comment: data.USERS.children[0].USER.children[14].USER_COMMENTS.children[0].COMMENT.COMMENT,
      date: data.USERS.children[0].USER.children[14].USER_COMMENTS.children[0].COMMENT.DATE
    },
    user_tags: data.USERS.children[0].USER.children[15].USER_TAGS.content,
    // These are blank for now, will add in later.
    // user_campaigns: [],
    // user_details: [],
    // user_variables: [],
    // subscriptions: [],
    subscription_variables: [
      {
        name: data.USERS.children[0].USER.children[20].SUBSCRIPTION_VARIABLES.children[0].SUBSCRIPTION_VARIABLE.NAME,
        value: data.USERS.children[0].USER.children[20].SUBSCRIPTION_VARIABLES.children[0].SUBSCRIPTION_VARIABLE.VALUE,
        customer_group: data.USERS.children[0].USER.children[20].SUBSCRIPTION_VARIABLES.children[0].SUBSCRIPTION_VARIABLE.CUSTOMER_GROUP,
        date: data.USERS.children[0].USER.children[20].SUBSCRIPTION_VARIABLES.children[0].SUBSCRIPTION_VARIABLE.DATE,
        plan_id: data.USERS.children[0].USER.children[20].SUBSCRIPTION_VARIABLES.children[0].SUBSCRIPTION_VARIABLE.PLAN_ID
      }
    ]
  };
  return output;
}

// src/index.ts
var src_default = {
  decode_token,
  get_user
};
