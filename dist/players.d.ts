type create_player_output = {
    zban_player_id: number;
};
type get_players_output = {
    player: {
        zban_player_id: number;
        client_id: string;
        affiliate_id: number;
        affiliate_username: string;
        join_date: string;
        display_info: string;
        source_group: string;
        status: string;
        campaign_id: number;
        plan_id: number;
        plan_name: string;
        object_id: number;
        object_description: string;
        media_id: number;
        media_description: string;
        payload: string;
        referrer: string;
    };
};
export declare function create_player(client_reference: string, client_group: string, join_date: string, display_name: string, token: string, country: string): Promise<create_player_output>;
export declare function get_players(player_id?: number, from_date?: string, to_date?: string, affiliate_id?: number, affiliate_name?: string, display_info?: string, client_id?: string, source_group?: string, customer_suspended?: boolean): Promise<get_players_output[]>;
export {};
