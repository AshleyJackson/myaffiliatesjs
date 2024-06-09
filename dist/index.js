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
  decode_token: () => decode_token,
  get_affiliate_earnings: () => get_affiliate_earnings,
  get_user_status: () => get_user_status,
  view_campaigns: () => view_campaigns
});
module.exports = __toCommonJS(src_exports);
var import_axios = __toESM(require("axios"));
var import_simple_xml_to_json = require("simple-xml-to-json");
async function decode_token(baseUrl, token, username, password) {
  const request = await import_axios.default.get(`${baseUrl}/feeds.php?FEED_ID=4&TOKENS=${token}`, {
    auth: {
      username,
      password
    }
  });
  const response = request.data;
  const parsed_xml = (0, import_simple_xml_to_json.convertXML)(response);
  const token_data = parsed_xml.TOKENS.children;
  return token_data;
}
async function get_user_status(baseUrl, username, password, user_id) {
  const request = await import_axios.default.get(`${baseUrl}/feeds.php?FEED_ID=3&USER_IDS=${user_id}`, {
    auth: {
      username,
      password
    }
  });
  const response = request.data;
  const parsed_xml = (0, import_simple_xml_to_json.convertXML)(response);
  const user_status = parsed_xml;
  return user_status;
}
async function view_campaigns(baseUrl, username, password, date_from, date_to) {
  const request = await import_axios.default.get(`${baseUrl}/feeds.php?FEED_ID=17&CREATED_DATE_FROM=${date_from.toISOString()}&CREATED_DATE_TO=${date_to.toISOString()}`, {
    auth: {
      username,
      password
    }
  });
  const response = request.data;
  const parsed_xml = (0, import_simple_xml_to_json.convertXML)(response);
  const campaigns = parsed_xml.CAMPAIGNS.children;
  return campaigns;
}
async function get_affiliate_earnings(baseUrl, username, password, USER_ID, date_from, date_to) {
  const request = await import_axios.default.get(`${baseUrl}/feeds.php?FEED_ID=25&USER_ID=${USER_ID}&FROM_DATE=${date_from.toISOString()}&TO_DATE=${date_to.toISOString()}`, {
    auth: {
      username,
      password
    }
  });
  const response = request.data;
  const parsed_xml = (0, import_simple_xml_to_json.convertXML)(response);
  const affiliate_earnings = parsed_xml;
  return affiliate_earnings;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  decode_token,
  get_affiliate_earnings,
  get_user_status,
  view_campaigns
});
