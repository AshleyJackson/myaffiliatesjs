export interface Token {
  prefix: string;
  user_id: string;
  setup_id: string;
  plan_id: string;
  media_id: string;
  banner_id: string;
  campaign_id: string;
  authcode: string;
  referring_url: string;
  ip_address: string;
  country: string;
  time_stamp: Date;
}

export interface Creds {
  baseUrl: string;
  token: string;
  username: string;
  password: string;
}
