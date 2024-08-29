import { decode_token } from "./src";

const baseUrl = "";
const username = "";
const password = "";
const token = "";

decode_token({
  baseUrl,
  token,
  username,
  password
}).then((response) => {
  console.log(response)
})

