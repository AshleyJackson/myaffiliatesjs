import { createClient } from "./common";
import { convertXML } from "simple-xml-to-json";
const axios = createClient();
export async function create_player(client_reference, client_group, join_date, display_name, token, country) {
    const params = {
        FEED_ID: 8,
        CLIENT_REFERENCE: client_reference,
        CLIENT_GROUP: client_group,
        JOIN_DATE: join_date,
        DISPLAY_NAME: display_name,
        TOKEN: token,
        COUNTRY: country
    };
    const request = await axios.post('feeds.php', {}, {
        params: params
    });
    const data = convertXML(request.data);
    const output = {
        zban_player_id: data.PLAYER.children[0].ZBAN_PLAYER_ID.content
    };
    return output;
}
export async function get_players(player_id, from_date, to_date, affiliate_id, affiliate_name, display_info, client_id, source_group, customer_suspended) {
    const params = {
        PLAYER_ID: player_id,
        FROM_DATE: from_date,
        TO_DATE: to_date,
        AFFILIATE_ID: affiliate_id,
        AFFILIATE_NAME: affiliate_name,
        DISPLAY_INFO: display_info,
        CLIENT_ID: client_id,
        SOURCE_GROUP: source_group,
        CUSTOMER_SUSPENDED: customer_suspended ? 1 : 0
    };
    const request = await axios.get('feeds.php', {
        params: params
    });
    const data = convertXML(request.data);
    const players = data.PLAYERS.children;
    return players;
}
