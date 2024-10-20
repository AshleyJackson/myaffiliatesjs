import { convertXML } from "simple-xml-to-json";
import { createClient } from "./common";
import fs from 'fs'

const axios = createClient()

type create_campaign_params = {
  FEED_ID: number,
  CAMPAIGN_ID: number,
  USER_ID: number,
  DESCRIPTION: string,
}
type create_campaign_output = {
  tracking_id: number,
  user_id: number,
  description: string,
}

type view_campaigns_params = {
  FEED_ID: number,
  CAMPAIGN_ID: number,
  USER_ID: number,
  METADATA?: string,
  CREATED?: { from: string, to: string },
  MODIFIED?: { from: string, to: string }
}
type view_campaigns_output = {
  user_id: number,
  username: string,
  campaign_id: number,
  description: string,
  date_created: string,
  date_modified: string,
  spend: string,
  metadata: string,
}

export async function view_campaigns(user_id: number, campaign_id: number, metadata?: string, created?: { from: string, to: string }, modified?: { from: string, to: string }): Promise<any> {
  const params: view_campaigns_params = {
    FEED_ID: 17,
    CAMPAIGN_ID: campaign_id,
    USER_ID: user_id,
    METADATA: metadata,
  }
  if (created) {
    params.CREATED = created
  }
  if (modified) {
    params.MODIFIED = modified
  }
  const request = await axios.get('feeds.php', { params: params })
  // const request = fs.readFileSync('./tests/view_campaigns.xml', 'utf-8')
  const response = request.data;
  const data = convertXML(response);
  let output: view_campaigns_output[] = []
  const children = data.CAMPAIGNS.children
  for (const child of children) {
    output.push({
      user_id: child.CAMPAIGN.USER_ID,
      username: child.CAMPAIGN.USERNAME,
      campaign_id: child.CAMPAIGN.CAMPAIGN_ID,
      description: child.CAMPAIGN.DESCRIPTION,
      date_created: child.CAMPAIGN.DATE_CREATED,
      date_modified: child.CAMPAIGN.DATE_MODIFIED,
      spend: child.CAMPAIGN.SPEND,
      metadata: child.CAMPAIGN.METADATA,
    })
  }
  return output
}

export async function create_campaign(campaign_id: number, user_id: number, description: string) {
  const params: create_campaign_params = {
    FEED_ID: 13,
    CAMPAIGN_ID: campaign_id,
    USER_ID: user_id,
    DESCRIPTION: description
  }
  const request = await axios.post('feeds.php', {}, {
    params: params
  })
  const data = convertXML(request.data)
  const output: create_campaign_output = {
    tracking_id: data.CAMPAIGNS.children[0].ITEM.TACKING_ID,
    user_id: data.CAMPAIGNS.children[0].ITEM.USER_ID,
    description: data.CAMPAIGNS.children[0].ITEM.DESCRIPTION
  }
  return output
}

// create_campaign(1, 1, "Test campaign").then(console.log)
// view_campaigns(1, 1).then(e => console.log(JSON.stringify(e, null, 2)))