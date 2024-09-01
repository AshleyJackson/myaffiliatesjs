import fs from "fs";
import { convertXML } from "simple-xml-to-json";
import { Token, User } from "./src/types";

// async function test_decode_token(): Promise<Token> {
//   const token_response = fs.readFileSync('./tests/token.xml', 'utf8').toString();
//   let output: Token
//   const data = convertXML(token_response)
//   output = {
//     prefix: data.TOKENS.children[0].TOKEN.PREFIX,
//     user_id: data.TOKENS.children[0].TOKEN.USER_ID,
//     setup_id: data.TOKENS.children[0].TOKEN.SETUP_ID,
//     media_id: data.TOKENS.children[0].TOKEN.MEDIA_ID,
//     banner_id: data.TOKENS.children[0].TOKEN.BANNER_ID,
//     campaign_id: data.TOKENS.children[0].TOKEN.CAMPAIGN_ID,
//     authcode: data.TOKENS.children[0].TOKEN.AUTHCODE,
//     referring_url: data.TOKENS.children[0].TOKEN.REFERRING_URL,
//     ip_address: data.TOKENS.children[0].TOKEN.IP_ADDRESS,
//     country: data.TOKENS.children[0].TOKEN.COUNTRY,
//     time_stamp: data.TOKENS.children[0].TOKEN.TIME_STAMP,
//     user: {
//       user_name: data.TOKENS.children[0].TOKEN.children[0].USER.USERNAME,
//       status: data.TOKENS.children[0].TOKEN.children[0].USER.STATUS
//     },
//     setup: {
//       site_id: data.TOKENS.children[0].TOKEN.children[1].SETUP.SITE_ID,
//       site_name: data.TOKENS.children[0].TOKEN.children[1].SETUP.SITE_NAME,
//       site_url: data.TOKENS.children[0].TOKEN.children[1].SETUP.SITE_URL,
//       operation_id: data.TOKENS.children[0].TOKEN.children[1].SETUP.OPERATION_ID,
//       plan_id: data.TOKENS.children[0].TOKEN.children[1].SETUP.PLAN_ID,
//       object_id: data.TOKENS.children[0].TOKEN.children[1].SETUP.OBJECT_ID,
//       object_description: data.TOKENS.children[0].TOKEN.children[1].SETUP.OBJECT_DESCRIPTION,
//       object_url: data.TOKENS.children[0].TOKEN.children[1].SETUP.children[0].OBJECT_DATA.children[0].DATA.VALUE
//     }
//   }
//   return output
// }

// test_decode_token().then(console.log)

export async function test_get_user(): Promise<User> {
  const user_response = fs.readFileSync('./tests/users.xml', 'utf8').toString();
  let output: User
  const data = convertXML(user_response)

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
        plan_id: data.USERS.children[0].USER.children[20].SUBSCRIPTION_VARIABLES.children[0].SUBSCRIPTION_VARIABLE.PLAN_ID,
      }
    ],
  }
  return output
}


test_get_user()