import fs from "fs";
import { convertXML } from "simple-xml-to-json";
import { Token, User } from "./src/types";
import { decode_token } from "./src/tokens";

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