import axios from "axios";
import { convertXML } from 'simple-xml-to-json';
import { decode_token } from "./tokens";
import { get_user } from "./users";
import { validate_email } from "./email";

export default {
  decode_token,
  get_user,
  validate_email,
}

