import { convertXML } from "simple-xml-to-json";
import { createClient } from "./common";
const axios = createClient()

export async function get_user(date_from: Date, date_to: Date): Promise<User> {
  const user = await axios.get(`/feeds.php?FEED_ID=17&CREATED_DATE_FROM=${date_from.toISOString()}&CREATED_DATE_TO=${date_to.toISOString()}`)
  let output: User
  const data = convertXML(user.data)

  // TODO: Rebuild this section to work with multiple users.
  // NOTE: This section should not work currently lmao.
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



export interface User {
  id: string;
  username: string;
  parent_id: string;
  parent_username: string;
  admin_id?: string;
  admin_username?: string;
  email: string;
  country?: string;
  status: string;
  join_date: Date;
  currency: string;
  balance: string;
  payment_type: string;
  minimum_payment: string;
  language: string;
  user_comments?: {
    comment: string;
    date: Date;
  },
  user_tags?: string;
  // user_campaigns?: {
  //   campaign_id: string;
  //   description: string;
  // }[];
  // user_variables?: {
  //   name: string;
  //   value: string;
  // }[];
  // user_details?: {},
  // subscriptions?: {
  //   plan_name: string;
  //   description?: string;
  //   billing_display?: string;
  //   plan_id: string;
  //   customer_group: string;
  //   discard_negative_earnings: string;
  //   start_date: Date;
  // }[];
  subscription_variables: {
    name: string;
    value: string;
    plan_id: string;
    customer_group: string;
    date: Date;
  }[];
  // user_payment_details: {
  //   name: string;
  //   id: string;
  // }[];
}