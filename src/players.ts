import { createClient } from "./common";
import { convertXML } from "simple-xml-to-json";
import fs from 'fs'

const axios = createClient()
type create_player_params = {
  FEED_ID: number,
  CLIENT_REFERENCE: string,
  CLIENT_GROUP: string,
  JOIN_DATE: string,
  DISPLAY_NAME: string,
  TOKEN: string,
  COUNTRY: string
}
type create_player_output = {
  zban_player_id: number,
}

type get_players_params = {
  PLAYER_ID: number | undefined,
  FROM_DATE: string | undefined,
  TO_DATE: string | undefined,
  AFFILIATE_ID: number | undefined,
  AFFILIATE_NAME: string | undefined,
  DISPLAY_INFO: string | undefined,
  CLIENT_ID: string | undefined,
  SOURCE_GROUP: string | undefined,
  CUSTOMER_SUSPENDED: number | undefined
}

type get_players_output = {
  player: {
    zban_player_id: number,
    client_id: string,
    affiliate_id: number,
    affiliate_username: string,
    join_date: string,
    display_info: string,
    source_group: string,
    status: string,
    campaign_id: number,
    plan_id: number,
    plan_name: string,
    object_id: number,
    object_description: string,
    media_id: number,
    media_description: string,
    payload: string,
    referrer: string,
  }
}

export async function create_player(client_reference: string, client_group: string, join_date: string, display_name: string, token: string, country: string) {
  const params: create_player_params = {
    FEED_ID: 8,
    CLIENT_REFERENCE: client_reference,
    CLIENT_GROUP: client_group,
    JOIN_DATE: join_date,
    DISPLAY_NAME: display_name,
    TOKEN: token,
    COUNTRY: country
  }
  const request = await axios.post('feeds.php', {}, {
    params: params
  })
  const data = convertXML(request.data)
  const output: create_player_output = {
    zban_player_id: data.PLAYER.children[0].ZBAN_PLAYER_ID.content
  }
  return output
}

export async function get_players(player_id?: number, from_date?: string, to_date?: string, affiliate_id?: number, affiliate_name?: string, display_info?: string, client_id?: string, source_group?: string, customer_suspended?: boolean) {
  const params: get_players_params = {
    PLAYER_ID: player_id,
    FROM_DATE: from_date,
    TO_DATE: to_date,
    AFFILIATE_ID: affiliate_id,
    AFFILIATE_NAME: affiliate_name,
    DISPLAY_INFO: display_info,
    CLIENT_ID: client_id,
    SOURCE_GROUP: source_group,
    CUSTOMER_SUSPENDED: customer_suspended ? 1 : 0
  }
  const request = await axios.get('feeds.php', {
    params: params
  })
  const data = convertXML(request.data)
  const players: get_players_output[] = data.PLAYERS.children
  return players
}
