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
  decode_token: () => decode_token
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  decode_token
});
