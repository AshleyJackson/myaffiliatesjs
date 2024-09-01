export interface Token {
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

export interface TokenUser {
  user_name: string;
  status: string;
}

export interface TokenSetup {
  site_id: string;
  site_name: string;
  site_url: string;
  operation_id: string;
  plan_id: string;
  object_id: string;
  object_description: string;
  object_url: string;
}

export interface Creds {
  baseUrl: string;
  token: string;
  username: string;
  password: string;
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
